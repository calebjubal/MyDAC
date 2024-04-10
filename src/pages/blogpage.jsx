import React, { useEffect, useRef } from "react";
import Navbar from "../components/navbar";
import { RiArrowRightLine } from "react-icons/ri";
import gsap from "gsap";

const BlogPage = () => {
  const trendingData = [
    {
      id: 1,
      imageUrl:
        "https://images.unsplash.com/photo-1532091710512-26fd3b2dcf16?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Noteworthy technology acquisitions 2021",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      id: 2,
      imageUrl:
        "https://images.unsplash.com/photo-1596344084757-b83f2081da8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SEVSQlN8ZW58MHx8MHx8fDA%3D",
      title: "Unlock the secrets of Ayurvedic supplements",
      description:
        "Our blog post explores the wisdom of Ayurveda and its profound impact on holistic wellness.",
    },
    {
      id: 3,
      imageUrl:
        "https://images.unsplash.com/photo-1604304194650-3ba3cfa752fd?q=80&w=2235&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Embark with Ayurvedic supplements",
      description:
        "Discover the science behind Ayurvedic principles and how they can support your well-being.",
    },
    
  ];

  const cardRefs = useRef([]);

  useEffect(() => {

    const tl = gsap.timeline();
    cardRefs.current.forEach((card, index) => {
      tl.fromTo(
        card,
        { scale: 0.85 },
        { scale: 1, duration: 0.3, delay: index * 0.25 } 
      );
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="section w-full p-6 md:p-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
        {trendingData.map((item, index) => (
          <div
            ref={(el) => (cardRefs.current[index] = el)} 
            key={item.id}
            className="bg-white border max-w-md border-gray-200 rounded-lg shadow"
          >
            <a href="#">
              <div className="h-80 overflow-hidden rounded-t-lg">
                <img src={item.imageUrl} alt="" className="object-cover w-full h-full" />
              </div>
            </a>
            <div className="p-4">

                <h5 className="text-xl font-semibold text-gray-800">{item.title}</h5>

              <p className="text-sm text-gray-600 mt-2">{item.description}</p>
              <a
                href="#"
                className="mt-4 px-4 py-2 flex gap-2 text-gray-500 rounded-lg hover:scale-105 transition duration-200"
              >
                Read More <RiArrowRightLine size={24} color="gray" className="my-icon" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogPage;
