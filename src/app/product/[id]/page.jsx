//component imports
import ProductDetail from "@/components/product-details/ProductDetails";

//static JSON files
import products from "@/data/products.json";

export default function ProductPage({ params }) {
  const product = products.find((p) => p.id === Number(params.id));

  //error handling
  if (!product) {
    return <div>Product Not Found</div>;
  }

  return <ProductDetail product={product}></ProductDetail>;
}
