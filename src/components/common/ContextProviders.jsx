"use client";

//the main purpose of this file is to keep layout.jsx as server component.
import { FilterProvider } from "@/context/FilterContext";
import { CartProvider } from "@/context/CartContext";

export function ContextProviders({ children }) {
  return (
    <FilterProvider>
      <CartProvider>{children}</CartProvider>
    </FilterProvider>
  );
}
