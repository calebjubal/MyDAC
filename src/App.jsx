import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import BlogPage from "./pages/blogpage";
import BlogPost from "./pages/blogpost";
import ShopPage from "./pages/shoppage";
import ShopDetail from "./pages/shopdetail";
import useFetch from "./hooks/useFetch";
import NotFoundPage from "./pages/404";
import Loader from "./components/loader";

const App = () => {
  const { loading: blogLoading, data: blogData, error: blogError } = useFetch(
    "http://localhost:1337/api/blogs?populate=*"
  );
  const { loading: shopLoading, data: shopData, error: shopError } = useFetch(
    "http://localhost:1337/api/shops?populate=*"
  );


  if (blogLoading || shopLoading) return <Loader/>;
  if (blogError || shopError) return <NotFoundPage />;

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog" element={<BlogPage blogs={blogData ? blogData : []} />} />
      <Route path="/blog/:id" element={<BlogPost blogs={blogData ? blogData : []} />} />
      <Route path="/shop" element={<ShopPage shops={shopData ? shopData : []} />} />
      <Route path="/shop/:id" element={<ShopDetail shops={shopData ? shopData : []} />} />
    </Routes>
  );
};

export default App;
