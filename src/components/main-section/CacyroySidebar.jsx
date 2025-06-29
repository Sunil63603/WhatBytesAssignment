"use client";

import { useState } from "react";

const categories = ["All", "Electronics", "Clothing", "Home"];

export default function CacyroySidebar() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [price, setPrice] = useState(5000);

  return (
    <div className="bg-white text-black  px-4 py-6 rounded-xl space-y-6 text-sm w-full max-w-[220px] mx-auto">
      <h2 className="text-lg font-semibold">Cacyroy</h2>

      {/* Category Filter */}
      <div>
        <ul className="space-y-3">
          {categories.map((cat) => (
            <li key={cat}>
              <label className="flex items-center space-x-3 cursor-pointer">
                <span
                  className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                    selectedCategory === cat
                      ? "border-blue-600"
                      : "border-gray-400"
                  }`}
                ></span>
                <input
                  type="radio"
                  name="cacyroy-category"
                  value={cat}
                  checked={selectedCategory === cat}
                  onChange={() => setSelectedCategory(cat)}
                  className="hidden"
                ></input>
                <span>{cat}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Price Box */}
      <div>
        <h3 className="mb-3 font-medium">Price</h3>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></input>
      </div>
    </div>
  );
}
