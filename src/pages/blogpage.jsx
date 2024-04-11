/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import Navbar from "../components/navbar";
import { RiArrowRightLine } from "react-icons/ri";
import gsap from "gsap";

// eslint-disable-next-line react/prop-types
const BlogPage = ({blogs}) => {
  console.log("BlogPage")
  console.log(blogs)

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
        {blogs.data.map((blog)=> 
          <div
            key={blog.id}
            className="bg-white border max-w-md border-gray-200 rounded-lg shadow"
          >
            <a href="#">
              <div className="h-80 overflow-hidden rounded-t-lg">
                <img src={`http://localhost:1337${blog.attributes.blogCover.data.attributes.url}`} alt="" className="object-cover w-full h-full" />
              </div>
            </a>
            <div className="p-4">

                <h5 className="text-xl font-semibold text-gray-800">{blog.attributes.blogTitle}</h5>

              <p className="text-sm text-gray-600 mt-2">{blog.attributes.blogContent}</p>
              <a
                href="#"
                className="mt-4 px-4 py-2 flex gap-2 text-gray-500 rounded-lg hover:scale-105 transition duration-200"
              >
                Read More <RiArrowRightLine size={24} color="gray" className="my-icon" />
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default BlogPage;
