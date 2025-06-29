"use client";

import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#002766] text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
        {/* Filters */}
        <div>
          <h3 className="font-semibold mb-2">Filters</h3>
          <ul className="space-y-1">
            <li>All</li>
            <li>Electronics</li>
          </ul>
          <p className="mt-4 text-xs text-gray-300">© 2024 American</p>
        </div>

        {/* About Us */}
        <div>
          <h3 className="font-semibold mb-2">About Us</h3>
          <ul className="space-y-1">
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4">
            {/* Facebook */}
            <div className="w-8 h-8 bg-[#0053B3] rounded-full flex items-center justify-center">
              <Facebook className="w-4 h-4 text-white"></Facebook>
            </div>

            {/* twitter */}
            <div className="w-8 h-8 bg-[#0053B3] rounded-full flex items-center justify-center">
              <Twitter className="w-4 h-4 text-white"></Twitter>
            </div>

            {/* Instagram */}
            <div className="w-8 h-8 bg-[#0053B3] rounded-full flex items-center justify-center">
              <Instagram className="w-4 h-4 text-white"></Instagram>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
