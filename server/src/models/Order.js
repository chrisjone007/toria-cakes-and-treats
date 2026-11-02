
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    orderId: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },

    customer: {
      fullName: { type: String, required: true, trim: true },
      phone: { type: String, required: true, trim: true },
      orderType: {
        type: String,
        enum: ["delivery", "pickup"],
        required: true,
      },
      address: { type: String, trim: true },
      orderDate: { type: String, required: true },
      orderTime: { type: String, required: true },
      instructions: { type: String, trim: true },
    },

    items: [
      {
        name: { type: String, required: true },
        quantity: { type: Number, required: true, min: 1 },
        price: { type: Number, required: true, min: 0 },

        customizations: {
          size: String,
          layers: String,
          flavour: String,
          covering: String,
          toppings: String,
          addOns: mongoose.Schema.Types.Mixed,
          cakeMessage: String,
          designNotes: String,
        },
      },
    ],

    totalAmount: {
      type: Number,
      required: true,
      min: 0,
    },

    status: {
      type: String,
      enum: [
        "pending_whatsapp",
        "confirmed",
        "preparing",
        "ready",
        "completed",
        "cancelled",
      ],
      default: "pending_whatsapp",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);