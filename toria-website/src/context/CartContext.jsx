
import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const CartContext = createContext(null);

const CART_STORAGE_KEY = "toria-cart";

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
};

// Identify products by their name and customization options.
const getItemKey = (item) =>
  JSON.stringify({
    name: item.name,
    size: item.size || "",
    layers: item.layers || "",
    flavour: item.flavour || "",
    covering: item.covering || "",
    toppings: item.toppings || "",
    addOns: item.addOns || "",
    cakeMessage: item.cakeMessage || "",
    cakeColor: item.cakeColor || "",
    designNotes: item.designNotes || "",
  });

export const CartProvider = ({ children }) => {
  // Load previously saved cart items when the app starts.
  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);

      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Unable to load saved cart:", error);
      return [];
    }
  });

  // Save cart items whenever they change.
  useEffect(() => {
    try {
      localStorage.setItem(
        CART_STORAGE_KEY,
        JSON.stringify(cartItems)
      );
    } catch (error) {
      console.error("Unable to save cart:", error);
    }
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((currentItems) => {
      const productKey = getItemKey(product);

      const existingItem = currentItems.find(
        (item) => getItemKey(item) === productKey
      );

      if (existingItem) {
        return currentItems.map((item) =>
          getItemKey(item) === productKey
            ? {
                ...item,
                quantity: item.quantity + (product.quantity || 1),
              }
            : item
        );
      }

      return [
        ...currentItems,
        {
          ...product,
          cartId: `${Date.now()}-${Math.random()
            .toString(36)
            .slice(2, 9)}`,
          quantity: product.quantity || 1,
        },
      ];
    });
  };

  const increaseQuantity = (cartId) => {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.cartId === cartId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (cartId) => {
    setCartItems((currentItems) =>
      currentItems
        .map((item) =>
          item.cartId === cartId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (cartId) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.cartId !== cartId)
    );
  };

  const clearCart = () => setCartItems([]);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};