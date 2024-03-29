import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../components/navbar";
import Section from "../components/section";
import banner from "../assets/banner_round_bg.png";
import product from "../assets/p1.png";


gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const productRef = useRef(null);
  const productRef2 = useRef(null);
  const productRef3  = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(productRef.current,{ opacity: 0.75, scale: 0.75 }, 
      {
        opacity: 1,
        scale: 1.05,
        duration: .5,
        scrollTrigger: {
          trigger: productRef.current,
          start: "top 55%",
          end: "top 40%",
          // markers:true,
          scrub: 3, 
        },
      }
    );
    gsap.fromTo(productRef2.current,{ opacity: 0.75, scale: 0.75 }, 
      {
        opacity: 1,
        scale:0.5,
        x:140,
        y:50,
        rotateZ:-10,
        duration: .5,
        scrollTrigger: {
          trigger: productRef2.current,
          start: "top 55%",
          end: "top 40%",
          scrub: 3, 
        },
      }
    );
    gsap.fromTo(productRef3.current,{ opacity: 0.75, scale: 0.75 }, 
      {
        opacity: 1,
        scale:0.5,
        x:-400,
        y:50,
        rotateZ:10,
        duration: .5,
        scrollTrigger: {
          trigger: productRef3.current,
          start: "top 55%",
          end: "top 40%",
          scrub: 3, 
        },
      }
    );

    gsap.fromTo(imageRef.current, { scale: 0.75, y:-150 }, { duration: .8, scale: 1, y:0  });
  }, []);

  return (
    <>
      <Navbar />
    
      <div className="relative flex flex-col justify-center items-center h-screen mt-4 p-6">
        <div className="text-center mb-12">
          <p className="text-sm font-bold lowercase text-gold-100 lg:text-xl">
          #Harmonize Your Being 
          </p>
          <h1 className="mb-4 mt-4 text-xl font-semibold text-slate-500 md:text-2xl lg:text-3xl uppercase">
            <span className="text-transparent bg-clip-text bg-gradient-to-r lg:text-5xl  to-green-400 from-gold-100">
              Ayurvedic Wellness Essentials..
            </span>
            <br />
            the complete health companion
          </h1>
        </div>
        <button type="button" className="text-white border-2 border-white bg-gold-100 hover:bg-darkGreen focus:outline-none w-36 h-12 font-medium rounded-full text-sm px-5 py-2.5 -m-6 z-10  text-center transition duration-300 ease-in-out">
          Explore Now
        </button>
        <img ref={imageRef} src={banner} alt="Banner" className="filter drop-shadow-lg w-auto h-auto md:w-3/4 lg:w-3/4"/>

        <img ref={productRef} src={product} title="Prodocut SKU1" alt="Product" className="absolute transform -translate-x-1/2 top-1/2 left-1/2 h-3/6 -mt-24 cursor-pointer"/>
        <img ref={productRef2} src={product} title="Prodocut SKU2" alt="Product" className="absolute transform -translate-x-1/2 top-1/2 left-1/2 h-3/6 -mt-24 cursor-pointer"/>
        <img ref={productRef3} src={product} title="Prodocut SKU3" alt="Product" className="absolute transform -translate-x-1/2 top-1/2 left-1/2 h-3/6 -mt-24 cursor-pointer"/>


      </div>
     
      <Section />
    </>
  );
};

export default HomePage;
