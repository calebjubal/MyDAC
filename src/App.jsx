import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import BlogPage from "./pages/blogpage";
import useFetch from "./hooks/useFetch";

const App = () => {
  let {loading, data, error} =useFetch('http://localhost:1337/api/blogs?populate=*')
  if(loading) return <p>Loading...</p>
  if(error) return <p>Error!</p>
  console.log(data)

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog" element={<BlogPage />} />
    </Routes>
  );
};

export default App;
