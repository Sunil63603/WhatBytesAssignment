"use client";

//icon-imports
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#002766] text-white mt-12">
      <div className="px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
        {/* Filters */}
        <div>
          <h3 className="font-semibold mb-2">Filters</h3>
          <ul className="space-y-1">
            <li className="cursor-pointer">All ElEgronk </li>
          </ul>
          <p className="mt-4 text-xs text-gray-300">© 2024 American</p>
        </div>

        {/* About Us */}
        <div>
          <h3 className="font-semibold mb-2">About Us</h3>
          <ul className="space-y-1">
            <li className="cursor-pointer">About Us</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4">
            <div className="w-8 h-8 bg-[#0053B3] rounded-full flex items-center justify-center">
              <FaFacebookF className="text-white text-[14px] cursor-pointer" />
            </div>
            <div className="w-8 h-8 bg-[#0053B3] rounded-full flex items-center justify-center">
              <FaTwitter className="text-white text-[14px] cursor-pointer" />
            </div>
            <div className="w-8 h-8 bg-[#0053B3] rounded-full flex items-center justify-center">
              <FaInstagram className="text-white text-[14px] cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
