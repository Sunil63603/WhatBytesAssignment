import "@/styles/globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export const metadata = {
  title: "Ecommerce Home Page",
  description: "Product listing app built with NextJS and TailwindCSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#f4f9ff] text-gray-900">
        <Header></Header>
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-6">
          {children}
        </main>
        <Footer></Footer>
      </body>
    </html>
  );
}
