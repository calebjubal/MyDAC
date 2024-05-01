import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import Footer from './footer'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductSlider = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:1337/api/shops?populate=*');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const responseData = await response.json();
        console.log(responseData)
        if (Array.isArray(responseData.data)) {

          const formattedProducts = responseData.data.map(item => ({

            id: item.id,
            name: item.attributes.productName,
            imageUrl: item.attributes.productImage.data.attributes.url,
            price: item.attributes.productPrice,
            rating: item.attributes.productRating,
          }));
          setProducts(formattedProducts);
        } else {
          console.error('API response data is not an array:', responseData.data);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []); 

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0
        }
      }
    ]
  };

  // Render the Slider component with products
  return (
    <>
    <div className="container w-3/5 p-8 mx-auto py-8 ">
      {products.length > 0 ? (
        <Slider {...sliderSettings}>
          {products.map(product => (
            <div key={product.id} className="product-card h-full border-none border-2 p-4 rounded-2xl">
              <img
                className="p-4 hover:scale-[1.025] w-44 h-44 transition-all duration-300"
                src={`http://localhost:1337${product.imageUrl}`}
                alt={product.name}
              />
              <div className="pb-4">
                <h5 className="text-xl uppercase text-center font-semibold tracking-tight text-gray-700 hover:text-gold-100 transition-colors duration-300">
                  {product.name}
                </h5>
                <div className="flex items-center flex-col gap-2 mt-4 justify-around">
                  <span className="text-2xl font-bold text-gray-700">
                    ₹ {product.price}
                  </span>
                  <button className="CartBtn">
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
          ))}
        </Slider>
      ) : (
        <p className="text-center text-gray-500">Loading...</p>
      )}
    </div>
    <Footer/>
    </>
  );
};

export default ProductSlider;
