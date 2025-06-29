import Sidebar from "@/components/main-section/Sidebar";
import CacyroySidebar from "@/components/main-section/CacyroySidebar";

import ProductListing from "@/components/main-section/ProductListing";

export default function HomePage() {
  return (
    <div className="w-full flex flex-row lg:flex lg:flex-row items-start gap-6">
      {/* Left Sidebar */}
      <aside className="w-full lg:w-1/4 xl:w-1/5 space-y-6">
        <Sidebar></Sidebar>
        <CacyroySidebar></CacyroySidebar>
      </aside>

      {/* Product Grid */}
      <section className="w-full lg:w-3/4 xl:w-4/5">
        <ProductListing></ProductListing>
      </section>
    </div>
  );
}
