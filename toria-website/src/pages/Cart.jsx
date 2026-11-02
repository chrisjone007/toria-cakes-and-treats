import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
  MessageCircle,
  Truck,
  Store,
} from "lucide-react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    cartCount,
    cartTotal,
  } = useCart();

  const CHECKOUT_STORAGE_KEY = "toria-checkout-details";
  const emptyCustomer = {
  fullName: "",
  phone: "",
  orderType: "delivery",
  address: "",
  orderDate: "",
  orderTime: "",
  instructions: "",
};

const [customer, setCustomer] = useState(() => {
  try {
    const savedDetails = localStorage.getItem(CHECKOUT_STORAGE_KEY);

    return savedDetails
      ? { ...emptyCustomer, ...JSON.parse(savedDetails) }
      : { ...emptyCustomer };
  } catch (error) {
    console.error("Unable to load checkout details:", error);
    return { ...emptyCustomer };
  }
});
useEffect(() => {
  try {
    localStorage.setItem(
      CHECKOUT_STORAGE_KEY,
      JSON.stringify(customer)
    );
  } catch (error) {
    console.error("Unable to save checkout details:", error);
  }
}, [customer]);

useEffect(() => {
  if (cartItems.length === 0) {
    localStorage.removeItem(CHECKOUT_STORAGE_KEY);
    setCustomer({ ...emptyCustomer });
    setFormError("");
  }
}, [cartItems.length]);

  const [formError, setFormError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState("");
  const FALLBACK_ORDERS_KEY = "toria-pending-fallback-orders";
  const formatPrice = (price) =>
    `₦${Number(price || 0).toLocaleString("en-NG")}`;

  const today = new Date();

  const localToday = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0"),
  ].join("-");

  const updateCustomer = (event) => {
    const { name, value } = event.target;

    setCustomer((current) => ({
      ...current,
      [name]: value,
    }));

    setFormError("");
  };

  // Display customization details for customized cakes.
  const getCustomizations = (item) => {
    const details = [];

    if (item.size) details.push(`Size: ${item.size}`);
    if (item.layers) details.push(`Layers: ${item.layers}`);
    if (item.flavour) details.push(`Flavour: ${item.flavour}`);
    if (item.covering) details.push(`Covering: ${item.covering}`);
    if (item.toppings) details.push(`Toppings: ${item.toppings}`);

    if (item.addOns) {
      const addOns = Array.isArray(item.addOns)
        ? item.addOns.join(", ")
        : item.addOns;

      if (addOns && addOns !== "None") {
        details.push(`Add-ons: ${addOns}`);
      }
    }

    if (item.cakeMessage?.trim()) {
  details.push(`Cake message: "${item.cakeMessage.trim()}"`);
}

    if (item.cakeColor) {
      details.push(`Cake colour preference: ${item.cakeColor}`);
    }

    if (item.designNotes?.trim()) {
      details.push(`Design notes: ${item.designNotes.trim()}`);
    }

    return details;
  };

const handleWhatsAppCheckout = async (event) => {
  event.preventDefault();

  if (isSubmitting || whatsappUrl) return;

  if (cartItems.length === 0) {
    setFormError("Your cart is empty. Please add items before ordering.");
    return;
  }

  if (
    !customer.fullName.trim() ||
    !customer.phone.trim() ||
    !customer.orderDate ||
    !customer.orderTime ||
    (customer.orderType === "delivery" && !customer.address.trim())
  ) {
    setFormError("Please complete all required fields before placing your order.");
    return;
  }

  const phoneDigits = customer.phone.replace(/\D/g, "");

  if (phoneDigits.length < 7 || phoneDigits.length > 15) {
    setFormError("Please enter a valid contact phone number.");
    return;
  }

  if (customer.orderDate < localToday) {
    setFormError("Please choose today or a future date.");
    return;
  }

  setFormError("");
  setIsSubmitting(true);
  setWhatsappUrl("");

  const orderPayload = {
    customer: {
      fullName: customer.fullName.trim(),
      phone: customer.phone.trim(),
      orderType: customer.orderType,
      address:
        customer.orderType === "delivery"
          ? customer.address.trim()
          : "",
      orderDate: customer.orderDate,
      orderTime: customer.orderTime,
      instructions: customer.instructions.trim(),
    },

    items: cartItems.map((item) => ({
      name: item.name,
      quantity: item.quantity,
      price: Number(item.price),
      customizations: {
        size: item.size || "",
        layers: item.layers || "",
        flavour: item.flavour || "",
        covering: item.covering || "",
        toppings: item.toppings || "",
        addOns: item.addOns || "",
        cakeMessage: item.cakeMessage || "",
        designNotes: item.designNotes || "",
      },
    })),

    totalAmount: cartTotal,
  };

  const createWhatsAppMessage = (orderId) => {
    const orderLines = cartItems.flatMap((item, index) => {
      const lines = [
        `${index + 1}. ${item.name} x ${item.quantity}`,
        `   Unit price: ${formatPrice(item.price)}`,
        `   Subtotal: ${formatPrice(item.price * item.quantity)}`,
      ];

      const customizations = getCustomizations(item);

      if (customizations.length > 0) {
        lines.push(
          "   Customizations:",
          ...customizations.map((detail) => `   - ${detail}`)
        );
      }

      return [...lines, ""];
    });

    return [
      "Hello Toria Cakes and Treats!",
      "",
      "I would like to place an order:",
      `Order ID: ${orderId}`,
      "",
      "CUSTOMER DETAILS",
      `Full name: ${customer.fullName.trim()}`,
      `Phone number: ${customer.phone.trim()}`,
      `Order type: ${
        customer.orderType === "delivery" ? "Delivery" : "Pickup"
      }`,
      ...(customer.orderType === "delivery"
        ? [`Delivery address: ${customer.address.trim()}`]
        : []),
      `Preferred date: ${customer.orderDate}`,
      `Preferred time: ${customer.orderTime}`,
      ...(customer.instructions.trim()
        ? [`Additional instructions: ${customer.instructions.trim()}`]
        : []),
      "",
      "ORDER ITEMS",
      ...orderLines,
      `Total items: ${cartCount}`,
      `Order subtotal: ${formatPrice(cartTotal)}`,
      "",
      "Please confirm availability, final prices, and any delivery fee. Thank you!",
    ].join("\n");
  };

  const prepareWhatsApp = (orderId) => {
    const message = createWhatsAppMessage(orderId);

    const whatsappNumber = "2348167304896";

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    setWhatsappUrl(url);
  };

  const saveFallbackOrder = (reason) => {
    // Use a customer-friendly reference while marking the order internally
    // for later review and reconciliation.
    const fallbackId = `TOR-${localToday.replace(/-/g, "")}-${Math.random()
      .toString(36)
      .slice(2, 8)
      .toUpperCase()}`;

    const fallbackOrder = {
      orderId: fallbackId,
      customer: orderPayload.customer,
      items: orderPayload.items,
      totalAmount: orderPayload.totalAmount,
      createdAt: new Date().toISOString(),
      status: "pending_reconciliation",
      reason,
    };

    try {
      const existingOrders = JSON.parse(
        localStorage.getItem(FALLBACK_ORDERS_KEY) || "[]"
      );

      existingOrders.push(fallbackOrder);

      localStorage.setItem(
        FALLBACK_ORDERS_KEY,
        JSON.stringify(existingOrders)
      );
    } catch (storageError) {
      console.error("Unable to save fallback order locally:", storageError);
    }

    // The customer follows the same WhatsApp checkout either way.
    prepareWhatsApp(fallbackId);
  };

  try {
    const apiUrl =
      import.meta.env.VITE_API_URL || "http://localhost:5000";

    const response = await fetch(`${apiUrl}/api/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderPayload),
    });

    let result;

    try {
      result = await response.json();
    } catch {
      result = {};
    }

    if (response.status >= 500) {
      saveFallbackOrder("Backend or database server error");
      return;
    }

    if (!response.ok || !result.success || !result.orderId) {
      saveFallbackOrder(`Order service returned HTTP ${response.status}`);
      return;
    }

    prepareWhatsApp(result.orderId);
  } catch (error) {
    console.error("Online order submission failed:", error);

    // A connection failure should not interrupt the customer's checkout.
    // Keep the reason internal and continue with the WhatsApp order.
    saveFallbackOrder("Order service connection failed");
  } finally {
    setIsSubmitting(false);
  }
};

const inputClass =
    "mt-2 w-full rounded-xl border border-purple-100 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#6D2396] focus:ring-2 focus:ring-purple-100";

  const labelClass = "text-sm font-semibold text-[#351526]";

  return (
    <main className="min-h-screen bg-[#FFFDF9] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#6D2396] hover:text-[#4B176D]"
          >
            <ArrowLeft size={17} />
            Continue shopping
          </Link>

          <h1 className="mt-5 text-3xl font-extrabold text-[#351526] sm:text-4xl">
            Your Shopping Cart
          </h1>

          <p className="mt-2 text-gray-600">
            Review your selections and provide your details to place an order.
          </p>
        </div>

        {cartItems.length === 0 ? (
          <div className="rounded-3xl border border-purple-100 bg-white px-6 py-16 text-center shadow-sm">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-purple-100 text-[#6D2396]">
              <ShoppingBag size={35} />
            </div>

            <h2 className="mt-6 text-2xl font-bold text-[#351526]">
              Your cart is empty
            </h2>

            <p className="mx-auto mt-3 max-w-md leading-7 text-gray-600">
              You haven't added any treats yet. Explore our menu and find
              something delicious.
            </p>

            <Link
              to="/menu"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#4B176D] px-7 py-3 font-semibold text-white transition hover:bg-[#6D2396]"
            >
              Explore Our Menu
              <ArrowRight size={18} />
            </Link>
          </div>
        ) : (
          <form
            onSubmit={handleWhatsAppCheckout}
            className="grid items-start gap-8 lg:grid-cols-[1fr_350px]"
          >
            <div className="space-y-8">
              {/* Cart items */}
              <section className="space-y-4">
                <h2 className="text-xl font-bold text-[#351526]">
                  Your Items ({cartCount})
                </h2>

                {cartItems.map((item) => (
                  <article
                    key={item.cartId || item.name}
                    className="flex flex-col gap-4 rounded-2xl border border-purple-100 bg-white p-4 shadow-sm sm:flex-row sm:items-start"
                  >
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-28 w-full rounded-xl object-cover sm:w-32"
                      />
                    )}

                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-bold text-[#351526]">
                        {item.name}
                      </h3>

                      <p className="mt-1 text-sm text-gray-500">
                        {formatPrice(item.price)} each
                      </p>

                      {getCustomizations(item).length > 0 && (
                        <div className="mt-3 rounded-xl bg-purple-50 p-3">
                          <p className="mb-2 text-xs font-bold uppercase tracking-wide text-[#6D2396]">
                            Your customizations
                          </p>

                          <ul className="space-y-1.5 text-sm text-gray-600">
                            {getCustomizations(item).map((detail, index) => (
                              <li key={`${item.cartId}-${index}`}>
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <p className="mt-3 font-bold text-[#6D2396]">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>

                    <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
                      <div className="flex items-center gap-3 rounded-full border border-purple-100 px-2 py-1.5">
                        <button
                          type="button"
                          onClick={() =>
                            decreaseQuantity(item.cartId || item.name)
                          }
                          aria-label={`Decrease ${item.name} quantity`}
                          className="rounded-full p-1 text-[#6D2396] hover:bg-purple-100"
                        >
                          <Minus size={16} />
                        </button>

                        <span className="min-w-5 text-center text-sm font-bold">
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            increaseQuantity(item.cartId || item.name)
                          }
                          aria-label={`Increase ${item.name} quantity`}
                          className="rounded-full p-1 text-[#6D2396] hover:bg-purple-100"
                        >
                          <Plus size={16} />
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          removeFromCart(item.cartId || item.name)
                        }
                        className="inline-flex items-center gap-1 text-sm text-red-600 hover:text-red-700"
                      >
                        <Trash2 size={15} />
                        Remove
                      </button>
                    </div>
                  </article>
                ))}
              </section>

              {/* Customer checkout details */}
              <section className="rounded-2xl border border-purple-100 bg-white p-5 shadow-sm sm:p-7">
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-[#351526]">
                    Order Details
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    Tell us how to reach you and when you would like your order.
                  </p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label htmlFor="fullName" className={labelClass}>
                      Full name *
                    </label>

                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      autoComplete="name"
                      required
                      maxLength={100}
                      value={customer.fullName}
                      onChange={updateCustomer}
                      placeholder="Enter your full name"
                      className={inputClass}
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="phone" className={labelClass}>
                      Contact phone number *
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      required
                      maxLength={25}
                      value={customer.phone}
                      onChange={updateCustomer}
                      placeholder="e.g. 08012345678"
                      className={inputClass}
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <span className={labelClass}>
                      How would you like to receive your order? *
                    </span>

                    <div className="mt-3 grid gap-3 sm:grid-cols-2">
                      <label
                        className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition ${
                          customer.orderType === "delivery"
                            ? "border-[#6D2396] bg-purple-50"
                            : "border-purple-100 hover:bg-purple-50"
                        }`}
                      >
                        <input
                          type="radio"
                          name="orderType"
                          value="delivery"
                          checked={customer.orderType === "delivery"}
                          onChange={updateCustomer}
                          className="accent-[#6D2396]"
                        />

                        <Truck size={21} className="text-[#6D2396]" />

                        <span className="text-sm font-semibold text-[#351526]">
                          Delivery
                        </span>
                      </label>

                      <label
                        className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition ${
                          customer.orderType === "pickup"
                            ? "border-[#6D2396] bg-purple-50"
                            : "border-purple-100 hover:bg-purple-50"
                        }`}
                      >
                        <input
                          type="radio"
                          name="orderType"
                          value="pickup"
                          checked={customer.orderType === "pickup"}
                          onChange={updateCustomer}
                          className="accent-[#6D2396]"
                        />

                        <Store size={21} className="text-[#6D2396]" />

                        <span className="text-sm font-semibold text-[#351526]">
                          Pickup
                        </span>
                      </label>
                    </div>
                  </div>

                  {customer.orderType === "delivery" && (
                    <div className="sm:col-span-2">
                      <label htmlFor="address" className={labelClass}>
                        Delivery address *
                      </label>

                      <textarea
                        id="address"
                        name="address"
                        required
                        rows={3}
                        maxLength={500}
                        value={customer.address}
                        onChange={updateCustomer}
                        placeholder="Enter your complete delivery address and area"
                        className={inputClass}
                      />
                    </div>
                  )}

                  <div>
                    <label htmlFor="orderDate" className={labelClass}>
                      Preferred date *
                    </label>

                    <input
                      id="orderDate"
                      name="orderDate"
                      type="date"
                      required
                      min={localToday}
                      value={customer.orderDate}
                      onChange={updateCustomer}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="orderTime" className={labelClass}>
                      Preferred time *
                    </label>

                    <input
                      id="orderTime"
                      name="orderTime"
                      type="time"
                      required
                      value={customer.orderTime}
                      onChange={updateCustomer}
                      className={inputClass}
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="instructions" className={labelClass}>
                      Special instructions (optional)
                    </label>

                    <textarea
                      id="instructions"
                      name="instructions"
                      rows={3}
                      maxLength={500}
                      value={customer.instructions}
                      onChange={updateCustomer}
                      placeholder="Any other requests for your order?"
                      className={inputClass}
                    />
                  </div>
                </div>

                {formError && (
                  <p
                    role="alert"
                    className="mt-5 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
                  >
                    {formError}
                  </p>
                )}

                <p className="mt-5 text-xs leading-5 text-gray-500">
                  Your order details and selected cake customizations will be
                  included in a WhatsApp message.
                </p>
              </section>
            </div>

            {/* Order summary */}
            <aside className="rounded-2xl border border-purple-100 bg-white p-6 shadow-sm lg:sticky lg:top-28">
              <h2 className="text-xl font-bold text-[#351526]">
                Order Summary
              </h2>

              <div className="mt-6 flex justify-between gap-4 text-sm text-gray-600">
                <span>Total items</span>
                <span className="font-semibold text-gray-900">
                  {cartCount}
                </span>
              </div>

              <div className="mt-4 flex justify-between gap-4 text-sm text-gray-600">
                <span>Subtotal</span>
                <span className="font-semibold text-gray-900">
                  {formatPrice(cartTotal)}
                </span>
              </div>

              <div className="mt-5 border-t border-purple-100 pt-5">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-bold text-[#351526]">
                    Estimated total
                  </span>

                  <span className="text-xl font-extrabold text-[#6D2396]">
                    {formatPrice(cartTotal)}
                  </span>
                </div>

                <p className="mt-3 text-xs leading-5 text-gray-500">
                  Prices are temporary estimates. Delivery fees, availability,
                  and final prices will be confirmed on WhatsApp.
                </p>
              </div>

              <button
                type={whatsappUrl ? "button" : "submit"}
                disabled={isSubmitting}
                onClick={() => {
                  if (whatsappUrl) {
                    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
                  }
                }}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-4 font-bold text-white transition hover:bg-[#1DA851] disabled:cursor-not-allowed disabled:opacity-60"
              >
                <MessageCircle size={20} />
                {isSubmitting
                  ? "Processing Order..."
                  : whatsappUrl
                    ? "Continue to WhatsApp"
                    : "Place Order on WhatsApp"}
              </button>
              <Link
                to="/menu"
                className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold text-[#6D2396] hover:text-[#4B176D]"
              >
                <ArrowLeft size={16} />
                Continue shopping
              </Link>
            </aside>
          </form>
        )}
      </div>
    </main>
  );
};

export default Cart;