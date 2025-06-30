"use client";

import { X, Plus, Minus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ProductDetail({ product }) {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);

  //Handlers for quantity change.
  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="bg-white rounded-md px-6 pt-6 pb-8 shadow-lg text-black flex w-[700px] h-[500px] mx-auto relative">
      {/* Close Button-Absolute positioned */}
      <button
        onClick={() => router.back()}
        className="absolute right-4 top-4 p-2 hover:bg-red-50 rounded-full"
      >
        <X className="w-8 h-8 text-red-500"></X>
      </button>

      {/* Left Image */}
      <img
        src={product.image}
        alt={product.title}
        className="w-[350px] h-[460px] object-fit mr-6"
      ></img>

      {/* Right:Details */}
      <div className="flex flex-col flex-1 justify-between mt-8">
        <div>
          <h3 className="font-bold text-4xl mb-4">{product.title}</h3>
          <p className="text-2xl font-bold text-gray-900 mb-6">
            ${product.price}
          </p>
          <p className="text-xl text-gray-700 my-6">{product.description}</p>
          <p className="text-xl text-gray-600 mt-4">
            Category:
            {product.category}
          </p>
        </div>

        <div>
          {/* Quantity Selector */}
          <div className="flex items-center gap-4 mb-6">
            <p className="text-lg font-semibold">Quantity:</p>
            <div className="flex items-center border border-gray-300 rounded-lg">
              <button
                onClick={handleDecrease}
                className="p-3 hover:bg-gray-100 rounded-l-lg"
              >
                <Minus className="w-4 h-4"></Minus>
              </button>
              <span className="px-6 py-2 text-lg font-semibold">
                {quantity}
              </span>
              <button
                onClick={handleIncrease}
                className="p-3 hover:bg-gray-100 rounded-r-lg"
              >
                <Plus className="w-4 h-4"></Plus>
              </button>
            </div>
          </div>
        </div>

        <button className="bg-[#005cbf] text-white text-xl font-bold px-10 py-4 rounded-xl mt-4 self-start">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
