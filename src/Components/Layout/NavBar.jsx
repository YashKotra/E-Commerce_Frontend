import React, { useState } from "react";
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiOutlineMagnifyingGlass,
  HiBars3BottomRight,
} from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import Searchbar from "../Common/SearchBar";
import CartDrawer from "./CartDrawer";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);

  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const toggleNavDrawer = () => {
    setNavDrawerOpen(!navDrawerOpen);
  };
  return (
    <div className="container mx-auto flex px-6 py-4 justify-between items-center">
      <Link to="/" className="text-2xl font-bold italic">
        Clothing.
      </Link>

      {/* Center - Navigation Links */}
      <div className="hidden md:flex space-x-6">
        <Link
          to="/collections/all"
          className="text-gray-700 hover:text-black text-sm font-medium uppercase"
        >
          MEN
        </Link>
        <Link
          to="#"
          className="text-gray-700 hover:text-black text-sm font-medium uppercase"
        >
          WOMEN
        </Link>
        <Link
          to="#"
          className="text-gray-700 hover:text-black text-sm font-medium uppercase"
        >
          TOP WEAR
        </Link>
        <Link
          to="#"
          className="text-gray-700 hover:text-black text-sm font-medium uppercase"
        >
          BOTTOM WEAR
        </Link>
      </div>

      {/* Right Icons */}
      <div className="flex items-center space-x-4">
        <Link
          to="/admin"
          className="block bg-gray-800 text-white px-2 rounded-sm"
        >
          Admin
        </Link>
        <Link to="/profile" className="text-gray-700 hover:text-black">
          <HiOutlineUser className="h-6 w-6" />
        </Link>

        <button
          onClick={toggleCartDrawer}
          className="relative text-gray-700 hover:text-black"
        >
          <HiOutlineShoppingBag className="h-6 w-6" />
          <span className="absolute -top-1 -right-2 bg-rabbit-red text-white text-xs rounded-full px-2 py-0.5">
            4
          </span>
        </button>

        <Searchbar />

        <button onClick={toggleNavDrawer} className="md:hidden">
          <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
        </button>
      </div>

      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          navDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleNavDrawer}>
            <IoMdClose className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Menu</h2>

          <nav className="space-y-4">
            <Link
              to="#"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover: text-black"
            >
              Men
            </Link>
            <Link
              to="#"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover: text-black"
            >
              Men
            </Link>
            <Link
              to="#"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover: text-black"
            >
              Women
            </Link>
            <Link
              to="#"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover: text-black"
            >
              Kids
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
