import React, { useState } from "react";
import Navbar from "../components/navbar";
import PriceFilter from "../components/pricefilter";
import { RiStarFill } from "react-icons/ri";

const ShopPage = ({ shops }) => {
  const [filteredShops, setFilteredShops] = useState(shops.data);
  const handlePriceFilter = (min, max) => {

    const filtered = shops.data.filter(
      (shop) => shop.attributes.productPrice >= min && shop.attributes.productPrice <= max
    );
    setFilteredShops(filtered);
  };

  return (
    <>
      <Navbar />
      <div className="w-full section flex relative p-4 gap-4 py-10 items-start">
        <div className="left-panel w-1/3 sticky top-24 left-0">
          <PriceFilter handleFilter={handlePriceFilter} />
        </div>
        <div className="right-panel w-3/4 p-4">
          <div className="grid grid-cols-3 gap-4">

            {filteredShops.length > 0 ? (
              filteredShops.map((shop) => (
                <div key={shop.id} className="product-card md:w-[18rem] border-green-100 border-2 rounded-2xl">
                  <img
                    className="p-4 rounded-t-lg hover:scale-[1.025] transition-all duration-300"
                    src={`http://localhost:1337${shop.attributes.productImage.data.attributes.url}`}
                    alt={shop.attributes.productName}
                  />
                  <div className="pb-4">
                    <a href="#">
                      <h5 className="text-xl uppercase text-center font-semibold tracking-tight text-gray-700 hover:text-gold-100 transition-colors duration-300">
                        {shop.attributes.productName}
                      </h5>
                    </a>
                    <div className="mt-2 gap-1 rating flex flex-row justify-center items-center">
                      {/* Display product ratings */}
                      {Array.from({ length: shop.attributes.productRating }).map((_, index) => (
                        <RiStarFill
                          key={index}
                          size={16}
                          color="gold"
                          className="my-icon hover:cursor-pointer hover:scale-90 transition duration-300 ease-in-out"
                        />
                      ))}
                    </div>
                    <div className="flex items-center flex-col gap-2 mt-4 justify-around">

                      <span className="text-2xl font-bold text-gray-700">₹ {shop.attributes.productPrice}</span>
                      <button className="CartBtn">
                        <span className="IconContainer">

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 576 512"
                            fill="rgb(255, 255, 255)"
                            className="cart"
                            color="white"
                          >
                            <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
                          </svg>
                        </span>
                        <p className="cartText">Add to Cart</p>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No shops found.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopPage;
