"use client";

//context imports
import { useFilters } from "@/context/FilterContext";

//Custom hook to check if screen is of mobile dimensions(BigProductCard should not be displayed)
import { useIsMobile } from "@/utils/useIsMobile";

//components import
import { SmallProductCard } from "./SmallProductCard";
import { BigProductCard } from "./BigProductCard";

export default function ProductListing() {
  //contexts
  const { filteredProducts } = useFilters();

  //based on this, bigProductCard will be displayed
  const isMobile = useIsMobile();

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
              <SmallProductCard
                product={product}
                key={product.id}
              ></SmallProductCard>
            ) : (
              //Only render big card if not on mobile
              !isMobile && (
                <BigProductCard
                  product={product}
                  key={product.id}
                ></BigProductCard>
              )
            )
          )
        )}
      </div>
    </section>
  );
}
