"use client";

import { ShoppingCart, User, Search } from "lucide-react";
import Link from "next/link";
import { useFilters } from "@/context/FilterContext";

export default function Header() {
  const { filters, setFilters } = useFilters();

  const handleSearchChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      searchQuery: e.target.value,
    }));
  };

  return (
    <header className="w-full bg-[#005cbf] text-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold flex-shrink-0">
          Logo
        </Link>

        <div className="flex-1 flex items-center justify-center ml-28 gap-15 -mr-15">
          {/* Search Bar*/}
          <div className="relative w-full max-w-xl lg:max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-200"></Search>
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full bg-transparent border border-white rounded-lg py-2 pl-12 pr-4 text-sm placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-white"
              value={filters.searchQuery}
              onChange={handleSearchChange}
            ></input>
          </div>

          {/* Cart Button and Badge */}
          <div className="relative flex-shrink-0 ml-3">
            <button className="flex items-center bg-[#001f4d] hover:bg-[#001a40] transition rounded-lg py-2 pl-4 pr-6">
              <ShoppingCart className="w-5 h-5 mr-2"></ShoppingCart>
              <span className="text-sm font-medium">Cart</span>
            </button>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded-full min-w-[16px] h-[16px] flex items-center justify-center">
              0
            </span>
          </div>
        </div>
        {/* Profile or Avatar */}
        <div className="flex-shrink-0 mr-2">
          <User className="w-6 h-6 cursor-pointer"></User>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="px-4 pb-3 block md:hidden bg-[#004AAD]">
        <input
          type="text"
          placeholder="Search for products..."
          className="w-full px-4 py-2 rounded text-sm bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
        ></input>
      </div>
    </header>
  );
}
