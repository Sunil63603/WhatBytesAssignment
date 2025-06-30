"use client";

import { createContext, useState, useContext, useMemo } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import allProducts from "@/data/products.json";

//1.Create the context
const FilterContext = createContext();

//2. Create the provider component
export function FilterProvider({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [searchQuery, setSearchQuery] = useState("");

  const urlFilters = useMemo(() => {
    const category = searchParams.get("category") || "All";
    const price = searchParams.get("price")?.split("-") || [0, 1000];

    return {
      category,
      minPrice: Number(price[0]), //Default min price
      maxPrice: Number(price[1]),
    };
  }, [searchParams]);

  //Memoize the filtered products to avoid recalculating on every render
  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const searchMatch =
        searchQuery === "" ||
        product.title.toLowerCase().includes(searchQuery.toLowerCase());

      const categoryMatch =
        urlFilters.category === "All" ||
        product.category === urlFilters.category;
      const priceMatch =
        product.price >= urlFilters.minPrice &&
        product.price <= urlFilters.maxPrice;
      return searchMatch && categoryMatch && priceMatch;
    });
  }, [urlFilters, searchQuery]);

  const updateUrlFilters = (newFilters) => {
    const params = new URLSearchParams(searchParams);
    Object.entries(newFilters).forEach(([Key, value]) => {
      if (value) {
        params.set(Key, value);
      } else {
        params.delete(key);
      }
    });
    router.push(`${pathname}?${params.toString()}`);
  };

  const value = {
    urlFilters,
    searchQuery,
    setSearchQuery,
    updateUrlFilters,
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
