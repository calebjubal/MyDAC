import React from "react";
import { Link } from "react-router-dom";
import { RiShoppingCartLine } from "@remixicon/react";
import { RiSearch2Line } from "@remixicon/react";
import Drawer from "./drawer";
import logo from "../assets/logo.png" 

const Navbar = () => {
  return (
    <nav className="bg-white mt-6">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center rtl:space-x-reverse">
        <img src={logo} class="h-12" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
        </Link>
        <div className="flex md:order-2 space-x-6  rtl:space-x-reverse">
        <RiShoppingCartLine    
            size={32} 
            color="gray" 
            className="my-icon hover:cursor-pointer" 
        />
        <RiSearch2Line 
            size={32} 
            color="gray" 
            className="my-icon hover:cursor-pointer hover:scale-95" // add custom class name
        />
        <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-cta" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        <Drawer/>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li>
              <Link to="/" className="block py-2 px-3 md:p-0 text-white  rounded md:bg-transparent md:text-yellow-600" aria-current="page">Home</Link>
            </li>
            <li>
              <Link to="/about" className="block py-2 px-3 md:p-0 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-600" >Product</Link>
            </li>
            <li>
              <Link to="/services" className="block py-2 px-3 md:p-0 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-600">Shop</Link>
            </li>
            <li>
              <Link to="/services" className="block py-2 px-3 md:p-0 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-600">Blog</Link>
            </li>
            <li>
              <Link to="/contact" className="block py-2 px-3 md:p-0 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-600">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
