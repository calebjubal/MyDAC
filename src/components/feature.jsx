import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Feature = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (section) {
        gsap.fromTo(
          section,
          { 
            opacity: 1, 
          },
        {
          opacity: 1, // Final opacity
          backgroundColor:'#FAA432',
          color:'gray',
          duration:1,
          scrollTrigger: {
            trigger: section,
            start: "top center+=140",
            end: "top center-=200",
            scrub: 3,

          }
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} className="body-font text-white -mt-8 ">
      <div className="container px-5 py-20 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-xl font-medium  title-font mb-2 text-white">
              Ayurvedic Supplements? Why Not..
            </h1>
            <div className="h-1 w-20 bg-white rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-justify text-white">
            Enhance your health and wellness journey with our high-quality Ayurvedic supplements. Carefully formulated from natural ingredients and time-honored recipes, our supplements provide a variety of benefits to nurture your holistic well-being.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="bg-gray-100 h-full p-6 rounded-lg flex flex-col">
              <img
                className="h-48 rounded w-full object-cover object-center mb-6"
                src="https://dummyimage.com/720x400"
                alt="content"
              />
              <h3 className="tracking-widest text-darkGreen text-xs font-medium title-font">
                IMMUNE SUPPORT
              </h3>
              <h2 className="text-lg font-medium title-font mb-4">
                Herbal Immunity Booster
              </h2>
              <p className="leading-relaxed text-base flex-grow text-justify">
                Strengthen your immune system with our herbal immunity
                booster. Packed with natural antioxidants and immune-boosting
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="bg-gray-100 h-full p-6 rounded-lg flex flex-col">
              <img
                className="h-48 rounded w-full object-cover object-center mb-6"
                src="https://dummyimage.com/721x401"
                alt="content"
              />
              <h3 className="tracking-widest text-darkGreen text-xs font-medium title-font">
                DIGESTIVE HEALTH
              </h3>
              <h2 className="text-lg  font-medium title-font mb-4">
                Digestive Enzyme Complex
              </h2>
              <p className="leading-relaxed text-base flex-grow text-justify">
                Support healthy digestion with our digestive enzyme complex.
                Formulated with potent enzymes and Ayurvedic herbs,
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="bg-gray-100 h-full p-6 rounded-lg flex flex-col">
              <img
                className="h-48 rounded w-full object-cover object-center mb-6"
                src="https://dummyimage.com/722x402"
                alt="content"
              />
              <h3 className="tracking-widest text-darkGreen text-xs font-medium title-font">
                STRESS RELIEF
              </h3>
              <h2 className="text-lg  font-medium title-font mb-4">
                Ashwagandha Stress Relief
              </h2>
              <p className="leading-relaxed text-base flex-grow text-justify">
                Manage stress and anxiety naturally with our Ashwagandha stress
                relief supplement. It helps calm the mind, promote relaxation,
              </p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4"></div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
