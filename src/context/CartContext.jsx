"use client";

//react imports
import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("cart");
      return stored ? JSON.parse(stored) : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((p) => p.id !== productId));
  };

  //to check product is in Cart or not.
  const isInCart = (productId) => cart.some((p) => p.id === productId);

  //this is used to display badge on cart button's header.
  const cartCount = cart.length;

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, isInCart, cartCount }}
    >
      {children}
    </CartContext.Provider>
  );
}

//custom hook to use this context
export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
