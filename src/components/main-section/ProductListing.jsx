"use client";

//NextJS imports
import { useRouter } from "next/navigation";
import Image from "next/image";

//context imports
import { useFilters } from "@/context/FilterContext";
import { useCart } from "@/context/CartContext";

//Custom hook to check if screen is of mobile dimensions(BigProductCard should not be displayed)
import { useIsMobile } from "@/utils/useIsMobile";

//component for star-ratings
function StarRating({ rating }) {
  const fullStarColor = "#002766"; // Lighter blue (Tailwind's blue-500)
  const emptyStarColor = "#e5e7eb"; // Light gray (Tailwind's gray-200)

  return (
    <div className="flex items-center mb-2">
      {[...Array(5)].map((_, i) => {
        const ratingValue = i + 1;
        let star;

        if (rating >= ratingValue) {
          // Full star
          star = (
            <svg
              key={i}
              width="18"
              height="18"
              viewBox="0 0 20 20"
              fill={fullStarColor}
            >
              <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
            </svg>
          );
        } else if (rating >= ratingValue - 0.5) {
          // Half star
          star = (
            <svg
              key={i}
              width="18"
              height="18"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id={`half_gradient_${i}`}>
                  <stop offset="50%" stopColor={fullStarColor} />
                  <stop offset="50%" stopColor={emptyStarColor} />
                </linearGradient>
              </defs>
              <path
                d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z"
                fill={`url(#half_gradient_${i})`}
              />
            </svg>
          );
        } else {
          // Empty star
          star = (
            <svg
              key={i}
              width="18"
              height="18"
              viewBox="0 0 20 20"
              fill={emptyStarColor}
            >
              <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
            </svg>
          );
        }

        return (
          <div key={i} className="mr-1">
            {star}
          </div>
        ); // Adds spacing between stars
      })}
    </div>
  );
}

export default function ProductListing() {
  const router = useRouter();

  //contexts
  const { filteredProducts } = useFilters();
  const { addToCart, removeFromCart, isInCart } = useCart();

  //based on this, bigProductCard will be displayed
  const isMobile = useIsMobile();

  //changing route to display '/product/id'
  const handleProductClick = (productId) => {
    router.push(`/product/${productId}`);
  };

  return (
    <section className="w-full lg:w-3/4 xl:w-4/5">
      <h2 className="text-2xl font-bold mb-4 ml-20 text-black">
        Product Listing
      </h2>
      <div className="grid gap-6 justify-center [grid-template-columns:repeat(1,180px)] sm:[grid-template-columns:repeat(2,180px)] lg:[grid-template-columns:repeat(3,180px)]">
        {filteredProducts.length === 0 ? (
          <div className="col-span-full text-center text-lg text-gray-500 py-12">
            No Products Found.Try changing Filters
          </div>
        ) : (
          filteredProducts.map((product) =>
            product["card-dimensions"] === "small" ? (
              <div
                key={product.id}
                onClick={() => handleProductClick(product.id)}
                className="bg-white rounded-md px-4 pt-4 pb-6 shadow-sm text-black flex flex-col w-[180px] cursor-pointer hover:shadow-2xl transition-shadow"
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  width={140}
                  height={110}
                  className="object-cover mx-auto mb-4"
                ></Image>
                <h3 className="font-bold text-xl mb-1">{product.title}</h3>
                <p className="text-xl font-semibold mb-4">${product.price}</p>
                <button
                  className={`${
                    isInCart(product.id)
                      ? "bg-red-600 hover:bg-red-700"
                      : "bg-[#0071E3] hover:bg-blue-700"
                  } text-white text-base font-semibold px-4 py-2 rounded-lg cursor-pointer`}
                  onClick={(e) => {
                    e.stopPropagation();
                    isInCart(product.id)
                      ? removeFromCart(product.id)
                      : addToCart(product);
                  }}
                >
                  {isInCart(product.id) ? "Remove" : "Add to Cart"}
                </button>
              </div>
            ) : (
              //Only render big card if not on mobile
              !isMobile && (
                <div
                  key={product.id}
                  onClick={() => handleProductClick(product.id)}
                  className="bg-white rounded-md px-4 pt-4 pb-6 shadow-sm text-black flex col-span-2 row-span-2 w-[384px] h-[420px] cursor-pointer hover:shadow-2xl transition-shadow"
                >
                  {/* Left Image */}
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={180}
                    height={340}
                    className="object-cover mr-4"
                  ></Image>

                  {/* Right:Details */}
                  <div className="flex flex-col flex-1 justify-between mt-8">
                    <div>
                      <h3 className="font-bold text-2xl mb-1">
                        {product.title}
                      </h3>
                      <p className="text-xl font-bold mb-2">${product.price}</p>
                      <StarRating rating={Number(product.ratings) || 0} />
                      <p className="text-md mb-4 mt-6">{product.description}</p>
                      <p className="text-md text-black mb-2">Category</p>
                      <p className="text-md text-black mb-2">
                        {product.category}
                      </p>
                    </div>
                    <button
                      className={`${
                        isInCart(product.id)
                          ? "bg-red-600 hover:bg-red-700"
                          : "bg-[#005cbf] hover:bg-blue-900"
                      } text-white text-base font-semibold px-8 py-3 rounded-lg mt-2 self-start cursor-pointer`}
                      onClick={(e) => {
                        e.stopPropagation();
                        isInCart(product.id)
                          ? removeFromCart(product.id)
                          : addToCart(product);
                      }}
                    >
                      {isInCart(product.id) ? "Remove" : "Add to Cart"}
                    </button>
                  </div>
                </div>
              )
            )
          )
        )}
      </div>
    </section>
  );
}
