import React, { useState, useEffect } from "react";
import { RiShoppingCartLine } from "react-icons/ri";

const Drawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isDrawerOpen]);

  return (
    <>
      <div className="text-center">
        <button onClick={toggleDrawer} className="focus:outline-none">
          <RiShoppingCartLine
            size={32}
            color="gray"
            className="my-icon hover:cursor-pointer hover:scale-90 transition duration-300 ease-in-out"
          />
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 z-40 h-screen p-6 overflow-y-auto bg-gray-100 w-96 transform transition-transform duration-300 ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full scale-80 opacity-80"
        }`}
      >
        <div className="drawer-content">
          <h1 className="font-medium absolute top-2.5 start-3 flex items-center justify-center text-black-100 md:text-lg lg:text-xl ">
            Shopping Cart
          </h1>
          <button
            type="button"
            onClick={toggleDrawer}
            className="text-gray-500 bg-transparent hover:scale-90 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close menu</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Drawer;
