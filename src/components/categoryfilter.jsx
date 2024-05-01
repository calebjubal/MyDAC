import React, { useState } from 'react';
import { RiArrowDropRightLine } from '@remixicon/react';

const CategoryFilter = ({ handleFilter }) => {
  const categories = ["ACCESSORIES", "GYM SUPPLEMENT", "FITNESS GYM"];

  const [selectedCategory, setSelectedCategory] = useState("");

  const applyFilter = (category) => {
    setSelectedCategory(category); // Update selected category
    handleFilter(category); // Apply filter
  };

  return (
    <div className="filter-widget p-4">
      <h3 className="text-xl uppercase font-semibold tracking-tighter mb-2">Categories</h3>
      <hr className="my-2 border-gray-200" />
      <div className="space-y-1">
        {/* Category List */}
        {categories.map((category, index) => (
          <div
            key={index}
            className={` flex items-center cursor-pointer  hover:text-darkGreen ${
              selectedCategory === category ? 'text-darkGreen ' :  'text-gray-800'
            }`}
            onClick={() => applyFilter(category)}
          >
            <RiArrowDropRightLine
            size={30}
            color="green"
            className="my-icon"
            alt="category"
          />
            {category}
          </div>
        ))}
        {/* Clear Button */}
        {/* <button
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500 transition-colors duration-300"
          onClick={() => applyFilter("")}
        >
          Reset
        </button> */}
      </div>
    </div>
  );
};

export default CategoryFilter;
