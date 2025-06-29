"use client";

import { ShoppingCart, User, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full bg-[#004AAD] text-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="text-2xl font-bold flex-shrink-0">Logo</div>

        {/* Search Bar*/}
        <div className="flex-1 flex justify-end">
          <div className="relative w-full max-w-md lg:max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-200"></Search>
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full bg-transparent border border-white rounded-lg py-2 pl-12 pr-4 text-sm placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-white"
            ></input>
          </div>
        </div>

        {/* Cart Button and Badge */}
        <div className="relative flex-shrink-0 ml-6">
          <button className="flex items-center bg-[#003a80] hover:bg-[#003470] transition rounded-lg py-2 pl-4 pr-6">
            <ShoppingCart className="w-5 h-5 mr-2"></ShoppingCart>
            <span className="text-sm font-medium">Cart</span>
          </button>
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded-full min-w-[16px] h-[16px] flex items-center justify-center">
            0
          </span>
        </div>

        {/* Profile or Avatar */}
        <div className="ml-4 flex-shrink-0">
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
