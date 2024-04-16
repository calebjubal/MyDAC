import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Drawer from './drawer';
import logo from '../assets/logo.png';
import { RiSearch2Line } from '@remixicon/react';

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white mt-6 sticky top-0 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center rtl:space-x-reverse">
          <img src={logo} className="h-12" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Your Brand
          </span>
        </Link>

        <div className="flex md:order-2 space-x-10 rtl:space-x-reverse">
          <RiSearch2Line
            size={32}
            color="gray"
            className="my-icon hover:cursor-pointer hover:scale-90 transition duration-300 ease-in-out"
          />
          <Drawer />
          <button
            onClick={toggleMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            menuOpen ? 'block' : 'hidden'
          }`}
          id="navbar-cta"
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 md:border-0 font-semibold md:bg-white">
            <NavItem to="/" text="Home" isActive={isActive} />
            <NavItem to="/shop" text="Shop" isActive={isActive} />
            <NavItem to="/blog" text="Blog" isActive={isActive} />
            <NavItem to="/contact" text="Contact" isActive={isActive} />
          </ul>
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ to, text, isActive }) => {
  return (
    <li>
      <Link
        to={to}
        className={`block py-2 px-3 md:p-0 rounded transition duration-300 ease-in-out ${
          isActive(to) ? 'text-gold-100' : 'text-gray-600'
        }`}
        aria-current={isActive(to) ? 'page' : undefined}
      >
        {text}
      </Link>
    </li>
  );
};

export default Navbar;
