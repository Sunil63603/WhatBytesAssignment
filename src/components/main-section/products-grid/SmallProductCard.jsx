//Context imports
import { useCart } from "@/context/CartContext";

//NextJS imports
import Image from "next/image";
import { useRouter } from "next/navigation";

export function SmallProductCard({ product }) {
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
        className="bg-white rounded-md px-4 pt-4 pb-6 shadow-sm text-black flex flex-col w-[180px] cursor-pointer hover:shadow-2xl transition-shadow"
      >
        <div className="w-[140px] h-[110px] relative mx-auto mb-4">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 640px) 100vw, 180px"
            className="object-cover"
          />
        </div>

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
    </>
  );
}
