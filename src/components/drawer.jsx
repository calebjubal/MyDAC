import React, { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";

const Drawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <div className="text-center hidden md:block">
        <button onClick={toggleDrawer} className="focus:outline-none">
          <RiMenu3Fill
            size={32}
            color=""
            className="my-icon hover:cursor-pointer text-green-500 hover:scale-105 hover:text-green-700 transition duration-300 ease-in-out"
          />
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 z-40 h-screen p-6 overflow-y-auto bg-gray-100 w-96 transform transition-transform duration-500 ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full scale-80 opacity-80"
        }`}
      >
        <div className="drawer-content">
          {/* Drawer content */}
          <h1 className="mb-4 mt-10 font-medium leading-none tracking-tight text-gray-900 md:text-2xl lg:text-4xl ">
            Get back to health with{" "}
            <span className="text-green-600 ">Blaze #1</span>
          </h1>
          <p className="text-lg font-normal text-gray-500 lg:text-base text-justify ">
            Here at DAC, we focus on markets where technology, innovation, and
            capital can unlock long-term value and drive economic growth.
          </p>

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
