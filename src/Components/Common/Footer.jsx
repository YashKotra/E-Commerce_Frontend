import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed with ${email}`);
    setEmail("");
  };

  return (
    <footer className="border-t py-12 bg-white">
      <div className="container mx-auto max-w-7xl px-4 lg:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8">
        {/* Newsletter */}
        <div>
          <h3 className="text-lg text-gray-800 font-semibold mb-4">
            Newsletter
          </h3>
          <p className="text-gray-500 mb-2">
            Be the first to hear about our products, exclusive events, and
            online offers.
          </p>
          <p className="text-gray-800 mb-4">
            Sign up and get 10% off your first order.
          </p>
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0 max-w-md"
          >
            <input
              type="email"
              placeholder="Your email address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 w-full text-sm border-t border-l border-b border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Shop */}
        <div className="min-w-[150px]">
          <h3 className="text-lg font-semibold mb-4">Shop</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <a href="#" className="hover:text-blue-600 transition">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition">
                Men's Top Wear
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition">
                Women's Top Wear
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition">
                Men's Bottom Wear
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition">
                Women's Bottom Wear
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div className="min-w-[150px]">
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <a href="#" className="hover:text-blue-600 transition">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition">
                Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition">
                Order Status
              </a>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div className="min-w-[150px]">
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-gray-600">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-blue-600 transition"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-blue-600 transition"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-blue-600 transition"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-blue-600 transition"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 border-t border-gray-300 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Designed By Yash Kotra. All rights
        reserved.
      </div>
    </footer>
  );
}
