import React, { useState } from 'react';

const PriceFilter = ({ handleFilter }) => {
  const minPrice = 100; // Minimum price
  const maxPrice = 1500; // Maximum price
  const step = 50; // Incremental step for slider (50 Rs)
  const initialRange = [minPrice, maxPrice]; // Initial selected price range

  const [selectedRange, setSelectedRange] = useState(initialRange);

  const applyFilter = () => {
    handleFilter(selectedRange[0], selectedRange[1]);
  };

  const handleRangeChange = (event) => {
    const newValue = parseInt(event.target.value);
    const roundedValue = Math.round(newValue / step) * step;
    setSelectedRange([minPrice, roundedValue]);
  };

  const clearFilter = () => {
    setSelectedRange(initialRange); // Reset selected range to initial values
    handleFilter(minPrice, maxPrice); // Apply filter with default range
  };

  return (
    <div className="filter-widget border-2 mt-4 p-4 rounded-md">
      <h3 className="text-2xl uppercase mt-4 font-semibold mb-6">Filter by - Price</h3>
      <hr className="my-4" />
      <div className="flex items-center space-x-4">
        {/* Price Range Slider */}
        <div className="flex-1 ">
          <label className="block text-lg  font-medium text-gray-700">
            ₹{selectedRange[0]} - ₹{selectedRange[1]}
          </label>
          <input
            type="range"
            min={minPrice}
            max={maxPrice}
            value={selectedRange[1]}
            onChange={handleRangeChange}
            step={step} // Set the step to 50 Rs
            className="w-full h-2 appearance-auto overflow-hidden outline-none"
          />
        </div>
        {/* Apply Button */}
        <button
          className="px-4 py-2  bg-blue-500 text-white rounded hover:scale-95 transition-all duration-300"
          onClick={applyFilter}
        >
          Apply
        </button>
        {/* Clear Button */}
        <button
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition-colors duration-300"
          onClick={clearFilter}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default PriceFilter;
