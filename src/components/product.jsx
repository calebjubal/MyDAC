import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import product1 from "../assets/p1.png";

const products = [
  {
    title: "MuscleMax Ayurvedic Whey Mass",
    description:
      "Introducing MuscleMax Ayurvedic Whey Mass, a natural blend formulated with the goodness of Ayurveda. Crafted to provide a holistic approach to muscle building, this supplement combines traditional Ayurvedic herbs with high-quality whey protein. Boost your workouts and support muscle",
    price: "$49.99",
  },
  {
    title: "StrengthBlend Ayurvedic Whey Mass",
    description:
      "Discover the power of StrengthBlend Ayurvedic Whey Mass, a premium supplement designed to enhance your fitness journey. Enriched with the essence of Ayurveda, this unique blend harnesses the benefits of traditional herbs and pure whey protein. Elevate your workouts and promote muscle recovery",
    price: "$59.99",
  },
  {
    title: "VitalPro Ayurvedic Whey Mass",
    description:
      "Experience the fusion of tradition and modernity with VitalPro Ayurvedic Whey Mass. Carefully crafted using ancient Ayurvedic principles and advanced nutritional science, this supplement is your companion in achieving peak fitness. Fuel your workouts and optimize muscle growth",
    price: "$69.99",
  },
  
];

const Product = () => {
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    products.forEach((_, index) => {
      gsap.to(`#product-img-${index}`, {
        opacity: 1,
        scrollTrigger: {
          trigger: `#product-img-${index}`,
          start: "top bottom-=100",
          end: "bottom center",
          scrub: 3,
        },
      });
    });
  }, []);

  return (
    <>
      <section className="text-black-100 body-font mt-10">
        
<h1 class="mb-8 mt-4 text-4xl font-extrabold leading-none text-center tracking-tight text-black-100 md:text-5xl lg:text-6xl ">We think for the <span class="underline underline-offset-3 decoration-8 decoration-darkGreen">buyer’s potential</span></h1>


        {products.map((product, index) => (
          <div
            key={index}
            className={`container px-5 mx-auto flex flex-row items-center ${
              index % 2 === 0 ? "flex-row-reverse" : ""
            }`}
          >
            <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 mt-4 ">
              <h1 className="title-font font-medium text-3xl text-gray-700">
                {product.title}
              </h1>
              <p className="leading-relaxed text-justify mt-4">
                {product.description}
              </p>
              <div className="flex items-center gap-6 mt-3">
                <p className="text-2xl font-semibold text-black-100">
                  {product.price}
                </p>
                <button
                  type="button"
                  className="text-white border-2 border-white bg-gold-100 hover:bg-darkGreen focus:outline-none font-medium rounded-full text-sm px-4 h-10  py-2 text-center transition duration-300 ease-in-out"
                >
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="lg:w-2/5 md:w-1/2 rounded-lg p-8 flex flex-col md:ml-auto mt-4 md:mt-0 items-center">
              <img
                id={`product-img-${index}`}
                src={product1}
                alt=""
                className="w-1/2 h-auto mb-4 rounded-lg object-fit opacity-0"
              />
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Product;
