"use client";

import { useState } from "react";
import { Range } from "react-range";

const categories = ["All", "Electronics", "Clothing", "Home"];

export default function Sidebar() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 1000]);

  return (
    <div className="bg-[#004AAD] text-white px-4 py-6 rounded-xl space-y-6 text-sm w-full max-w-[220px] mx-auto">
      <h2 className="text-lg font-semibold">Filters</h2>
      {/* Category Filter */}
      <div>
        <h3 className="mb-3 font-medium">Category</h3>
        <ul className="space-y-3">
          {categories.map((cat) => (
            <li key={cat}>
              <label className="flex items-center space-x-3 cursor-pointer">
                <span
                  className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                    selectedCategory === cat
                      ? "border-white"
                      : "border-white/40"
                  }`}
                ></span>
                <input
                  type="radio"
                  name="category"
                  value={cat}
                  checked={selectedCategory === cat}
                  onChange={() => setSelectedCategory(cat)}
                  className="hidden"
                ></input>
                <span className="text-sm">{cat}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Price Range Slider */}
      <div>
        <h3 className="mb-3 font-medium">Price</h3>
        <Range
          step={50}
          min={0}
          max={1000}
          values={priceRange}
          onChange={(values) => setPriceRange(values)}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              className="h-1 bg-white/40 rounded-full"
              style={{ ...props.style }}
            >
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              className="w-4 h-4 bg-white border-2 border-white rounded-full shadow"
            ></div>
          )}
        ></Range>
        <div className="flex justify-between text-xs text-white mt-2">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>
    </div>
  );
}
