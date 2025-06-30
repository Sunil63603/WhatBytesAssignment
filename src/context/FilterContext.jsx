"use client";

import { createContext, useState, useContext, useMemo } from "react";
import allProducts from "@/data/products.json";

//1.Create the context
const FilterContext = createContext();

//2. Create the provider component
export function FilterProvider({ children }) {
  const [filters, setFilters] = useState({
    category: "All",
    minPrice: 0, //Default min price
    maxPrice: 1000,
    searchQuery: "",
  });

  //Memoize the filtered products to avoid recalculating on every render
  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const searchMatch =
        filters.searchQuery === "" ||
        product.title.toLowerCase().includes(filters.searchQuery.toLowerCase());

      const categoryMatch =
        filters.category === "All" || product.category === filters.category;
      const priceMatch =
        product.price >= filters.minPrice && product.price <= filters.maxPrice;
      return searchMatch && categoryMatch && priceMatch;
    });
  }, [filters]);

  const value = {
    filters,
    setFilters,
    filteredProducts,
  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
}

//3. Create a custom hook for easy consumption
export function useFilters() {
  const context = useContext(FilterContext);

  if (context === undefined) {
    throw new Error("useFilters must be used within a FilterProvider");
  }

  return context;
}
