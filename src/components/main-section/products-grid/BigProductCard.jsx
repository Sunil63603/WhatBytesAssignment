//context imports
import { useCart } from "@/context/CartContext";

//NextJS imports
import Image from "next/image";
import { useRouter } from "next/navigation";

//component imports
import { StarRating } from "@/components/main-section/products-grid/StarRating";

export function BigProductCard({ product }) {
  const { addToCart, removeFromCart, isInCart } = useCart();

  const router = useRouter();

  //changing route to display '/product/id'
  const handleProductClick = (productId) => {
    router.push(`/product/${productId}`);
  };

  return (
    <>
      <div
        key={product.id}
        onClick={() => handleProductClick(product.id)}
        className="bg-white rounded-md px-4 pt-4 pb-6 shadow-sm text-black flex col-span-2 row-span-2 w-[384px] h-[420px] cursor-pointer hover:shadow-2xl transition-shadow"
      >
        {/* Left Image */}
        <div className="w-[180px] h-[340px] relative mr-4">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, 180px"
            className="object-cover"
          />
        </div>

        {/* Right:Details */}
        <div className="flex flex-col flex-1 justify-between mt-8">
          <div>
            <h3 className="font-bold text-2xl mb-1">{product.title}</h3>
            <p className="text-xl font-bold mb-2">${product.price}</p>
            <StarRating rating={Number(product.ratings) || 0} />
            <p className="text-md mb-4 mt-6">{product.description}</p>
            <p className="text-md text-black mb-2">Category</p>
            <p className="text-md text-black mb-2">{product.category}</p>
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
    </>
  );
}
