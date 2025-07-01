//styling imports
import "@/styles/globals.css";

//component imports
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

//Component which contains both FilterContext and CartContext.
import { ContextProviders } from "@/components/common/ContextProviders";
//This approach is used to prevent layout.jsx file from becoming client component.

//Meta-data for each and every layout for better SEO
export const metadata = {
  title: "Ecommerce Home Page",
  description: "Product listing app built with NextJS and TailwindCSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#f4f9ff] text-gray-900">
        <ContextProviders>
          <Header></Header>
          <main className="max-w-7xl mx-auto flex-1 w-full max-w-7xl mx-auto px-4 py-14">
            {children}
          </main>
          <Footer></Footer>
        </ContextProviders>
      </body>
    </html>
  );
}
