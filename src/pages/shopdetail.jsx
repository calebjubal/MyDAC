import React from "react";
import Navbar from "../components/navbar";
import Slider from "../components/slider";
import { useParams } from "react-router-dom";
import { RiStarFill } from "@remixicon/react";

const ShopDetail = ({ shops }) => {
  const { id } = useParams();
  const shop = shops.data.find((shop) => shop.id.toString() === id);

  if (!shop) {
    return <p>shop post not found for ID: {id}</p>;
  }
  return (
    <>
      <Navbar />
      <section class="text-gray-60  body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap relative">
            <img
              alt="ecommerce"
              class="lg:w-1/3 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={`http://localhost:1337${shop.attributes.productImage.data.attributes.url}`}
            />
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 class="text-md title-font text-gray-500 tracking-widest">
                CATEGORY
              </h2>
              <h1 class="text-gray-900 text-4xl title-font font-medium mb-1">
                {shop.attributes.productName}
              </h1>
              <div className="mt-2 gap-1 rating flex" title="Product Rating">
                {/* Display product ratings */}
                {Array.from({
                  length: shop.attributes.productRating,
                }).map((_, index) => (
                  <RiStarFill
                    key={index}
                    size={24}
                    color="gold"
                    className="my-icon hover:cursor-pointer hover:scale-110 transition duration-100 ease-in-out"
                  />
                ))}
              </div>
              <p class="leading-relaxed text-justify mt-4 mb-4">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
                juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
                seitan poutine tumeric. Gastropub blue bottle austin listicle
                pour-over, neutra jean shorts keytar banjo tattooed umami
                cardigan.
              </p>
              <hr />
              <div class="flex mt-4">
                <span class="title-font font-medium text-3xl text-gray-900">
                  ₹ {shop.attributes.productPrice}
                </span>

                <button className="CartBtn flex ml-auto py-2 px-6">
                  <span className="IconContainer">
                    {/* Placeholder for cart icon */}
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
          <div className="pictures md:w-2/3  flex gap-2 mt-8 mx-auto justify-center items-start ">
            <div className="img-box h-48 w-48 border-gray-100 p-2">
              <img
                src="https://www.keshking.com/cdn/shop/files/kesh-king-organic-onion-oil-100ml-onion-shampoo-300ml-combo-pack.png?v=1693387361&width=360"
                alt="image description" className="hover:scale-125 transition-transform duration-300 cursor-pointer"
              />
            </div>
            <div className="img-box h-48 w-48 border-gray-100 p-2">
              <img
                src="https://www.keshking.com/cdn/shop/files/kesh-king-organic-onion-shampoo-600ml.png?v=1693387855&width=360"
                alt="image description" className="hover:scale-125 transition-transform duration-300 cursor-pointer"
              />
            </div>
            <div className="img-box h-48 w-48 border-gray-100 p-2">
              <img
                src="https://www.keshking.com/cdn/shop/files/kesh-king-ayurvedic-anti-hair-fall-shampoo-600ml.png?v=1693386050&width=360"
                alt="image description" className="hover:scale-125 transition-transform duration-300 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </section>
      <Slider />
    </>
  );
};

export default ShopDetail;
