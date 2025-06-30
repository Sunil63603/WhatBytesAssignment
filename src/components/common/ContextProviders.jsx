"use client";

//the main purpose of this file is to keep layout.jsx as server component.
import { FilterProvider } from "@/context/FilterContext";

export function ContextProviders({ children }) {
  return <FilterProvider>{children}</FilterProvider>;
}
