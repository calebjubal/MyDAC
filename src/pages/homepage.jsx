import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Section from "../components/section";
import Feature from "../components/feature";
import Product from "../components/product";
import Pricing from "../components/pricing";
import Footer from "../components/footer";
import banner from "../assets/banner_round_bg.png";
import product from "../assets/p1.png";
import leaf from "../assets/leaf.png";

import "../../src/index.css";

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const itemRef = useRef(null);
  const itemRef2 = useRef(null);
  const itemRef3 = useRef(null);
  const imageRef = useRef(null);
  const sideImgRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    sideImgRefs.forEach((ref) => {
      gsap.fromTo(
        ref.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.5,
          scale: 1.1,
          y: 100,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 10%",
            end: "top 40%",
            scrub: 3,
          },
        }
      );
    });

    gsap.fromTo(
      itemRef.current,
      { opacity: 0.75, scale: 0.75 },
      {
        opacity: 1,
        scale: 1.05,
        duration: 0.5,
        scrollTrigger: {
          trigger: itemRef.current,
          start: "top 55%",
          end: "top 40%",
          // markers:true,
          scrub: 3,
        },
      }
    );
    // Calculate x position for itemRef2 (moving backward)
    const xPosition2 = window.innerWidth * 0.1 - window.innerWidth * 0.05 + 240; // 50% of the screen width minus 20% plus 140 pixels

    gsap.fromTo(
      itemRef2.current,
      { opacity: 0.75, scale: 0.75 },
      {
        opacity: 1,
        scale: 0.5,
        x: -xPosition2, // Move backward by the calculated distance
        yPercent: 10, // 10% of the screen height
        rotateZ: -10,
        duration: 0.5,
        scrollTrigger: {
          trigger: itemRef2.current,
          start: "top 55%",
          end: "top 40%",
          scrub: 3,
        },
      }
    );

    // Calculate x position for itemRef3 (moving forward)
    const xPosition3 = window.innerWidth * 0.1 - window.innerWidth * 0.05 + 240; // 50% of the screen width minus 20% plus 140 pixels

    gsap.fromTo(
      itemRef3.current,
      { opacity: 0.75, scale: 0.75 },
      {
        opacity: 1,
        scale: 0.5,
        x: xPosition3, // Move forward by the same calculated distance
        yPercent: 10, // 10% of the screen height
        rotateZ: 10,
        duration: 0.5,
        scrollTrigger: {
          trigger: itemRef3.current,
          start: "top 55%",
          end: "top 40%",
          scrub: 3,
        },
      }
    );

    gsap.fromTo(
      imageRef.current,
      { scale: 0.75, y: -150 },
      { duration: 0.8, scale: 1, y: 0 }
    );
  }, []);

  return (
    <>
      <Navbar />
      <div className="relative flex flex-col justify-center items-center h-screen md:mt-4 md:p-6 ">
        <div className="text-center mb-4 md:mb-12">
          <img
            ref={sideImgRefs[0]}
            src={leaf}
            alt=""
            className="w-44 hidden md:block absolute h-44 rotate-45 left-20 top-10"
          />
          <img
            ref={sideImgRefs[1]}
            src={leaf}
            alt=""
            className="w-44 hidden md:block absolute h-44 -rotate-45 right-14 bottom-20"
          />
          <img
            ref={sideImgRefs[2]}
            src={leaf}
            alt=""
            className="w-44 hidden md:block absolute h-44 -rotate-12 left-20 bottom-60"
          />
          <img
            ref={sideImgRefs[3]}
            src={leaf}
            alt=""
            className="w-44 hidden md:block absolute h-44 -rotate-12 right-14 top-40"
          />
          <p className="text-xl font-bold lowercase text-gold-100 md:text-xl">
            #Harmonize Your Being
          </p>
          <h1 className="mb-4 mt-4 text-2xl font-semibold text-slate-500 md:text-2xl lg:text-3xl uppercase">
            <span className="text-transparent  bg-clip-text bg-gradient-to-r lg:text-5xl to-green-400 from-gold-100 via-indigo-600">
              Ayurvedic Wellness Essentials..
            </span>
            <br />
            the complete health companion
          </h1>
        </div>
        <Link to="/shop" className=" md:-m-6 z-10 mb-3 px-5 py-2.5">
      <button
        type="button"
        className="text-white border-2 mb-3 border-white bg-gold-100 hover:bg-darkGreen focus:outline-none md:w-36 md:h-12 font-medium rounded-full text-sm px-5 py-2.5 md:-m-6 z-10 text-center transition duration-300 ease-in-out"
      >
        Explore Now
      </button>
    </Link>
        <img
          ref={imageRef}
          src={banner}
          alt="Banner"
          id="banner"
          className="w-auto h-auto md:w-3/4 lg:w-3/4"
        />

        <img
          ref={itemRef}
          src={product}
          title="SKU1"
          id="sku1"
          alt="P1"
          className="absolute transform -translate-x-1/2 top-1/2 left-1/2 md:h-3/6 h-52 -mt-1 md:-mt-24 cursor-pointer"
        />
        <img
          ref={itemRef2}
          src={product}
          title="SKU2"
          id="sku2"
          alt="P2"
          className="absolute transform -translate-x-1/2 top-1/2 left-1/2 md:h-3/6 hidden md:block md:-mt-24 cursor-pointer"
        />
        <img
          ref={itemRef3}
          src={product}
          title="SKU3"
          id="sku3"
          alt="P3"
          className="absolute transform -translate-x-1/2 top-1/2 left-1/2 md:h-3/6 hidden md:block md:-mt-24 cursor-pointer"
        />
      </div>

      <Section />
      <Pricing />
      <Feature />
      <Product />
      <Footer />
    </>
  );
};

export default HomePage;
