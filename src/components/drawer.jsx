import React, { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";

const Drawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <div className="text-center">
        <button onClick={toggleDrawer} className="focus:outline-none">
          <RiMenu3Fill
            size={32}
            color="green"
            className="my-icon hover:cursor-pointer"
          />
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        } bg-gray-100 w-96`}
      >
        <div className="drawer-content">
          {/* Drawer content */}
          <h5 className="text-base font-semibold text-gray-300">Info</h5>
          <button
            type="button"
            onClick={toggleDrawer}
            className="text-gray-900 bg-transparent hover:bg-gray-200  rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center"
          >
            <svg
              className="w-3 h-3"
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
          <p className="mb-6 text-sm text-gray-500">
            Supercharge your hiring by taking advantage of our{" "}
            <a href="#" className="text-blue-600 underline hover:no-underline">
              limited-time sale
            </a>{" "}
            for Flowbite Docs + Job Board. Unlimited access to over 190K
            top-ranked candidates and the #1 design job board.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <a
              href="#"
              className="px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
            >
              Learn more
            </a>
            <a
              href="#"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none"
            >
              Get access{" "}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Drawer;
