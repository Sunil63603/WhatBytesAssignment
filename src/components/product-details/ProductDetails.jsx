"use client";

//icon imports
import { X, Plus, Minus } from "lucide-react";

//NextJS imports
import { useRouter } from "next/navigation";
import Image from "next/image";

//React imports
import { useState } from "react";

//context imports
import { useCart } from "@/context/CartContext";

export default function ProductDetail({ product }) {
  const router = useRouter();
  const { addToCart, removeFromCart, isInCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const inCart = isInCart(product.id);

  //Handlers for quantity change.
  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="bg-white rounded-md px-2 py-4 sm:px-6 sm:pt-6 sm:pb-8 shadow-lg text-black flex flex-col sm:flex-row w-full max-w-[95vw] sm:max-w-[700px] h-auto sm:h-[500px] mx-auto relative">
      {/* Close Button-Absolute positioned */}
      <button
        onClick={() => router.back()}
        className="absolute right-2 top-2 sm:right-4 sm:top-4 p-2 hover:bg-red-50 rounded-full z-10 cursor-pointer"
      >
        <X className="w-7 h-7 sm:w-8 sm:h-8 text-red-500"></X>
      </button>

      {/* Left Image */}
      <div className="flex-shrink-0 flex justify-center items-center w-full sm:w-auto mb-4 sm:mb-0">
        <Image
          src={product.image}
          alt={product.title}
          width={350}
          height={350}
          className="object-contain rounded w-full max-w-[300px] h-[220px] sm:w-[350px] sm:h-[350px]"
        ></Image>
      </div>

      {/* Right:Details */}
      <div className="flex flex-col flex-1 justify-between sm:mt-8">
        <div>
          <h3 className="font-bold text-2xl sm:text-4xl mb-2 sm:mb-4">
            {product.title}
          </h3>
          <p className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-6">
            ${product.price}
          </p>
          <p className="text-base sm:text-xl text-gray-700 my-3 sm:my-6">
            {product.description}
          </p>
          <p className="text-base sm:text-xl text-gray-600 mt-2 sm:mt-4">
            Category:
            {product.category}
          </p>
        </div>

        <div>
          {/* Quantity Selector */}
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <p className="text-base sm:text-lg font-semibold">Quantity:</p>
            <div className="flex items-center border border-gray-300 rounded-lg">
              <button
                onClick={handleDecrease}
                className="p-2 sm:p-3 hover:bg-gray-100 rounded-l-lg cursor-pointer"
              >
                <Minus className="w-4 h-4"></Minus>
              </button>
              <span className="px-4 sm:px-6 py-1 sm:py-2 text-base sm:text-lg font-semibold">
                {quantity}
              </span>
              <button
                onClick={handleIncrease}
                className="p-2 sm:p-3 hover:bg-gray-100 rounded-r-lg cursor-pointer"
              >
                <Plus className="w-4 h-4"></Plus>
              </button>
            </div>
          </div>
        </div>

        <button
          className={`${
            inCart
              ? "bg-red-600 hover:bg-red-700"
              : "bg-[#005cbf] hover:bg-blue-900"
          } text-white text-lg sm:text-xl font-bold px-6 sm:px-10 py-3 sm:py-4 rounded-xl mt-3 sm:mt-4 self-start w-full sm:w-auto cursor-pointer`}
          onClick={() => {
            inCart ? removeFromCart(product.id) : addToCart(product);
          }}
        >
          {inCart ? "Remove from Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
