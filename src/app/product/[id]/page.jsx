import ProductDetail from "@/components/product-details/ProductDetails";
import products from "@/data/products.json";

export default function ProductPage({ params }) {
  const product = products.find((p) => p.id === Number(params.id));

  if (!product) {
    return <div>Product Not Found</div>;
  }

  return <ProductDetail product={product}></ProductDetail>;
}
