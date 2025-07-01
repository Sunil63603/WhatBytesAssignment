"use client";

//the main purpose of this file is to keep layout.jsx as server component.

//context imports
import { FilterProvider } from "@/context/FilterContext";
import { CartProvider } from "@/context/CartContext";

//react-imports
import { Suspense } from "react";

export function ContextProviders({ children }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FilterProvider>
        <CartProvider>{children}</CartProvider>
      </FilterProvider>
    </Suspense>
  );
}
