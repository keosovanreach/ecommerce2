import React from "react";

function Footer() {
  return (
    <div className="w-full bg-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main footer content grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          {/* TechStore Info */}
          <div className="text-gray-400">
            <h2 className="text-white font-semibold mb-3">TechStore</h2>
            <p className="text-sm">Your one stop shop for all things tech.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-white font-semibold mb-3">Quick Links</h2>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li className="cursor-pointer hover:text-white transition">
                Home
              </li>
              <li className="cursor-pointer hover:text-white transition">
                Shop
              </li>
              <li className="cursor-pointer hover:text-white transition">
                About Us
              </li>
              <li className="cursor-pointer hover:text-white transition">
                Contact
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h2 className="text-white font-semibold mb-3">Categories</h2>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li className="cursor-pointer hover:text-white transition">
                Electronics
              </li>
              <li className="cursor-pointer hover:text-white transition">
                Clothing
              </li>
              <li className="cursor-pointer hover:text-white transition">
                Home & Kitchen
              </li>
              <li className="cursor-pointer hover:text-white transition">
                Books
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-1">
            <h2 className="text-white font-semibold mb-3">Newsletter</h2>
            <p className="text-gray-400 text-sm mb-3">
              Subscribe for updates and offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter email"
                className="flex-1 px-3 py-2 rounded-l-md outline-none text-gray-100 border border-gray-300 focus:border-blue-500 transition text-sm"
              />
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-md transition text-sm whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h2 className="text-white font-semibold mb-3">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fa-brands fa-telegram"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar with copyright and legal links */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm text-center md:text-left mb-4 md:mb-0">
            © 2025 Your E-commerce Store. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
