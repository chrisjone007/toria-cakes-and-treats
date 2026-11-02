
const express = require("express");
const mongoose = require("mongoose");
const Order = require("../models/Order");
const OrderCounter = require("../models/OrderCounter");

const router = express.Router();

const getLagosDate = () =>
  new Intl.DateTimeFormat("en-CA", {
    timeZone: "Africa/Lagos",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());

router.post("/", async (req, res) => {
  try {
    const { customer, items, totalAmount } = req.body;

    if (!customer?.fullName?.trim() || !customer?.phone?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Customer name and phone number are required.",
      });
    }

    if (!["delivery", "pickup"].includes(customer.orderType)) {
      return res.status(400).json({
        success: false,
        message: "A valid order type is required.",
      });
    }

    if (
      !customer.orderDate ||
      !/^\d{4}-\d{2}-\d{2}$/.test(customer.orderDate) ||
      !customer.orderTime
    ) {
      return res.status(400).json({
        success: false,
        message: "A valid order date and time are required.",
      });
    }

    if (
      customer.orderType === "delivery" &&
      !customer.address?.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: "Delivery address is required.",
      });
    }

    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({
        success: false,
        message: "At least one order item is required.",
      });
    }

    for (const item of items) {
      if (
        !item.name?.trim() ||
        !Number.isInteger(item.quantity) ||
        item.quantity < 1 ||
        typeof item.price !== "number" ||
        !Number.isFinite(item.price) ||
        item.price < 0
      ) {
        return res.status(400).json({
          success: false,
          message: "One or more order items are invalid.",
        });
      }
    }

    if (
      typeof totalAmount !== "number" ||
      !Number.isFinite(totalAmount) ||
      totalAmount < 0
    ) {
      return res.status(400).json({
        success: false,
        message: "A valid order total is required.",
      });
    }

    const orderDate = getLagosDate();

    for (let attempt = 1; attempt <= 3; attempt++) {
      const session = await mongoose.startSession();

      try {
        let savedOrder;

        await session.withTransaction(async () => {
          const counter = await OrderCounter.findOneAndUpdate(
            { date: orderDate },
            { $inc: { sequence: 1 } },
            {
              new: true,
              upsert: true,
              setDefaultsOnInsert: true,
              session,
            }
          );

          const orderId = `TOR-${orderDate.replace(/-/g, "")}-${String(
            counter.sequence
          ).padStart(3, "0")}`;

          const orderItems = items.map((item) => ({
            name: item.name.trim(),
            quantity: item.quantity,
            price: item.price,
            customizations: {
              size: item.customizations?.size || "",
              layers: item.customizations?.layers || "",
              flavour: item.customizations?.flavour || "",
              covering: item.customizations?.covering || "",
              toppings: item.customizations?.toppings || "",
              addOns: item.customizations?.addOns ?? "",
              cakeMessage: item.customizations?.cakeMessage || "",
              designNotes: item.customizations?.designNotes || "",
            },
          }));

          const [order] = await Order.create(
            [
              {
                orderId,
                customer,
                items: orderItems,
                totalAmount,
              },
            ],
            { session }
          );

          savedOrder = order;
        });

        return res.status(201).json({
          success: true,
          orderId: savedOrder.orderId,
          message: "Order created successfully.",
        });
      } catch (error) {
        console.error("Order creation failed:", error);

        if (error.code === 11000 && attempt < 3) {
          continue;
        }

        return res.status(500).json({
          success: false,
          message: "Unable to create order. Please try again.",
        });
      } finally {
        await session.endSession();
      }
    }

    return res.status(500).json({
      success: false,
      message: "Unable to create order. Please try again.",
    });
  } catch (error) {
    console.error("Order request failed:", error);

    return res.status(500).json({
      success: false,
      message: "An unexpected error occurred.",
    });
  }
});

module.exports = router;