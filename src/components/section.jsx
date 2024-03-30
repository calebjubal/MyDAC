import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import backImg1 from "../assets/bg2.png";
import {
  RiMentalHealthLine,
  RiLeafLine,
  RiHeart2Line,
} from "@remixicon/react";

const Section = () => {
  const sectionStyle = {
    backgroundImage: `url(${backImg1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const imageRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      imageRef.current,
      { scale: 0.5, opacity: 0.3, borderRadius: "50%" }, // Initial state including borderRadius
      {
        scale: 1,
        opacity: 1,
        borderRadius: "50%", // Maintaining circular border radius
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top center+=100",
          end: "bottom center-=100",
          scrub: 5,
          // markers:true,
        },
      }
    );
  }, []);

  return (
    <>
      <div className="flex flex-col items-center line text-3xl text-gray-500 mt-2 mb-6 uppercase">
        Our Product Is Trusted By
        <span className="bg-gradient-to-r from-purple-500 to-red-500 text-transparent font-semibold bg-clip-text">
          50+ Institutions
        </span>
      </div>
      <section className="text-white mt-10 body-font relative" style={sectionStyle}>
        <div className="container  mx-auto flex px-5 py-24 md:flex-row flex-col">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-justify">
            <h1 className="title-font mt-6 sm:text-4xl text-3xl mb-4 font-semibold ">
              Discover the Power of Ayurveda
            </h1>
            <p className="mb-8 leading-relaxed">
              Elevate your well-being with our premium Ayurvedic supplements.
              Crafted from natural ingredients, our supplements are designed to
              promote balance and vitality in your life.
            </p>
            <div className="flex justify-around mt-4 gap-6 w-full">
              <div className="text">
                <RiHeart2Line
                  size={56}
                  color="white"
                  className="my-icon hover:cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
                />
                <p className="text-md mt-4">Heart Health</p>
                <p className="text-xs text-white mt-1">
                  Support cardiovascular wellness with our heart-boosting
                  supplements.
                </p>
              </div>
              <div className="text">
                <RiLeafLine
                  size={56}
                  color="white"
                  className="my-icon hover:cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
                />
                <p className="text-md mt-4">Natural Ingredients</p>
                <p className="text-xs text-white mt-1">
                  Harness the power of nature with our carefully selected
                  natural ingredients.
                </p>
              </div>
              <div className="text">
                <RiMentalHealthLine
                  size={56}
                  color="white"
                  className="my-icon hover:cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
                />
                <p className="text-md mt-4">Mental Well-being</p>
                <p className="text-xs text-white mt-1">
                  Nurture your mind and spirit with our supplements for mental
                  wellness.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-2/6 md:w-1/2 w-5/6 rounded-full overflow-hidden">
            <img
              ref={imageRef}
              className="object-cover object-center w-full h-full"
              alt="hero"
              src="https://dummyimage.com/720x720" // Ensure equal width and height
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Section;
