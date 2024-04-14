import React from "react";
import { useParams } from "react-router-dom";

const BlogPost = ({ blogs }) => {
  const { id } = useParams();
  const blog = blogs.data.find(blog => blog.id.toString() === id);

  if (!blog) {
    return <p>Blog post not found for ID: {id}</p>;
  }

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="Blog Cover"
                className="object-contain object-center h-full w-full"
                src={`http://localhost:1337${blog.attributes.blogCover.data.attributes.url}`}
              />
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <img src={`http://localhost:1337${blog.attributes.blogCover.data.attributes.url}`} alt="" className="w-full h-full object-cover" srcset="" />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    {blog.attributes.authorName} {/* Use actual author name attribute */}
                  </h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  {/* Use author description or placeholder */}
                  <p className="text-base">
                    Placeholder author description or bio...
                  </p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg text-justify mb-4">
                  {blog.attributes.blogDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPost;
