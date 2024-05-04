import { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import PriceFilter from "../components/pricefilter";
import Footer from "../components/footer";
import { RiStarFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import CategoryFilter from "../components/categoryfilter";
import { RiArrowRightDoubleLine, RiArrowLeftDoubleLine } from "@remixicon/react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartReducer";

const ShopPage = ({ shops }) => {
  const [filteredShops, setFilteredShops] = useState(shops.data);
  const [sortBy, setSortBy] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [shopsPerPage] = useState(6);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setFilteredShops(shops.data);
  }, [shops]);

  const indexOfLastShop = currentPage * shopsPerPage;
  const indexOfFirstShop = indexOfLastShop - shopsPerPage;
  const currentShops = filteredShops.slice(indexOfFirstShop, indexOfLastShop);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handlePriceFilter = (min, max) => {
    const filtered = shops.data.filter(
      (shop) =>
        shop.attributes.productPrice >= min &&
        shop.attributes.productPrice <= max
    );
    if (selectedCategory) {
      const categoryFiltered = filtered.filter(shop =>
        shop.attributes.productCategory.toLowerCase().includes(selectedCategory)
      );
      setFilteredShops(categoryFiltered);
    } else {
      setFilteredShops(filtered);
    }
  };

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category.toLowerCase());
    const filtered = shops.data.filter(shop =>
      shop.attributes.productCategory.toLowerCase().includes(category.toLowerCase())
    );
    if (sortBy !== "") {
      handleSortChange({ target: { value: sortBy } });
    } else {
      setFilteredShops(filtered);
    }
  };

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortBy(value);
    let sortedShops = [...filteredShops];
    if (value === "lowToHighPrice") {
      sortedShops.sort((a, b) => a.attributes.productPrice - b.attributes.productPrice);
    } else if (value === "highToLowPrice") {
      sortedShops.sort((a, b) => b.attributes.productPrice - a.attributes.productPrice);
    } else if (value === "lowToHighRating") {
      sortedShops.sort((a, b) => a.attributes.productRating - b.attributes.productRating);
    } else if (value === "highToLowRating") {
      sortedShops.sort((a, b) => b.attributes.productRating - a.attributes.productRating);
    }
    setFilteredShops(sortedShops);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  // Handle search input change
  const handleSearch = (value) => {
    setSearchInput(value);
    const filtered = shops.data.filter(shop =>
      shop.attributes.productName.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredShops(filtered);
  };

  const dispatch = useDispatch()

  return (
    <>
      <Navbar />
      <div className="coverImg flex flex-col justify-center items-center h-[500px] w-full bg-cover">
        <h1 className="text-6xl m-2 uppercase font-semibold text-white">Our <span className="text-gray-700">Shop</span></h1>
        <h1 className="text-3xl uppercase font-light text-gray-700">Explore Our Collection</h1>
      </div>
      <div className="w-full section flex flex-col md:flex-row-reverse relative p-8 gap-4 py-10 items-start">
        <div className="left-panel bg-gray-50 mt-10 md:w-1/3 w-full justify-center  flex p-8 items-center md:block sticky top-28 left-0">
          <h1 className="text-2xl uppercase text-center mb-2">Build <span className="text-gold-100 font-semibold">yourself strong </span>with us</h1>
          <h1 className="text-3xl uppercase text-center mb-2">Get All <span className="text-darkGreen font-semibold">As Per Need</span></h1>

          <CategoryFilter handleFilter={handleCategoryFilter} handleSearch={handleSearch} />

          <PriceFilter handleFilter={handlePriceFilter} />
        </div>
        <div className="right-panel md:w-4/5 w-full p-8">
          <div className="m-2 mb-4  w-full border-2 h-12 flex items-center justify-between p-2">
            <label htmlFor="sortBy" className="mr-2">
              Showing {currentShops.length} of {shops.data.length} results
            </label>
            <select id="sortBy" value={sortBy} onChange={handleSortChange}>
              <option value="">Default Sorting</option>
              <option value="lowToHighPrice">Price: Low to High</option>
              <option value="highToLowPrice">Price: High to Low</option>
              <option value="lowToHighRating">Rating: Low to High</option>
              <option value="highToLowRating">Rating: High to Low</option>
            </select>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
            {currentShops.length > 0 ? (
              currentShops.map((shop) => (
                <div
                  key={shop.id}
                  className="product-card md:w-[20rem] shadow-slate-100 shadow-lg border-gray-100 border-2 rounded-md p-2 m-2 flex flex-col justify-between"
                >
                  <Link to={`/shop/${shop.id}`}>
                    <img
                      className="p-4 rounded-t-lg mx-auto hover:scale-[1.1] transition-all aspect-w-16 aspect-h-9 duration-300 object-cover object-center"
                      src={`http://localhost:1337${shop.attributes.productImage.data.attributes.url}`}
                      alt={shop.attributes.productName}
                    />
                  </Link>
                  <div className="flex flex-col gap-2 justify-around p-4">
                    <span className="text-sm font-semibold  uppercase text-gray-500">
                      {shop.attributes.productCategory}
                    </span>
                    <Link to={`/shop/${shop.id}`}>
                      <h5 className="text-xl uppercase font-semibold tracking-tight text-black hover:text-gold-100 transition-colors duration-300">
                        {shop.attributes.productName}
                      </h5>
                    </Link>
                    <div className="flex flex-col items-start gap-2">
                      <span className="text-2xl font-bold text-black">
                        ₹{shop.attributes.productPrice}
                      </span>
                      <div className="rating flex flex-row justify-start gap-1 mt-2 items-start">
                        {Array.from({
                          length: shop.attributes.productRating,
                        }).map((_, index) => (
                          <RiStarFill
                            key={index}
                            size={22}
                            color="orange"
                            className="my-icon hover:cursor-pointer hover:scale-90 transition duration-300 ease-in-out"
                          />
                        ))}
                      </div>
                    </div>
                    <button onClick={() => setQuantity((prev) => prev === 1 ? 1 : prev - 1)}>-</button>
                    {quantity}
                    <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
                    <button className="CartBtn mt-2 " onClick={() => dispatch(addToCart({
                      id: shop.id,
                      name: shop.attributes.productName,
                      price: shop.attributes.productPrice,
                      img: shop.attributes.productImage.data.attributes.url,
                      desc: shop.attributes.productDescription,
                      quantity: quantity
                    }))}>
                      <span className="IconContainer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="1em"
                          viewBox="0 0 576 512"
                          fill="rgb(255, 255, 255)"
                          className="cart"
                          color="white"
                        >
                          <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c-2.2 11.3-12.1 19.5-23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
                        </svg>
                      </span>
                      <p className="cartText">Add to Cart</p>
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-3xl">Nothing Seems Here :/</p>
            )}
          </div>
          <ul className="pagination flex justify-start gap-4 mt-10">
            <li className={`page-item ${currentPage === 1 ? '' : ''}`}>
              <button onClick={prevPage} className="page-link text-xl w-10 h-10 justify-center flex items-center border-2">
                <RiArrowLeftDoubleLine
                  size={24}
                  color="black"
                  className="my-icon hover:cursor-pointer hover:scale-90 transition duration-300 ease-in-out"
                  alt="page"
                />
              </button>
            </li>
            {Array.from({ length: Math.ceil(filteredShops.length / shopsPerPage) }).map((_, index) => (
              <li key={index} className={`page-item ${currentPage === index + 1 ? 'bg-darkGreen text-white' : 'bg-white border-2 text-black'}`}>
                <button onClick={() => paginate(index + 1)} className="page-link text-xl w-10 h-10">
                  {index + 1}
                </button>
              </li>
            ))}
            <li className={`page-item ${currentPage === Math.ceil(filteredShops.length / shopsPerPage) ? '' : ''}`}>
              <button onClick={nextPage} className="page-link text-xl w-10 h-10 justify-center flex items-center border-2">
                <RiArrowRightDoubleLine
                  size={24}
                  color="black"
                  className="my-icon hover:cursor-pointer hover:scale-90 transition duration-300 ease-in-out"
                  alt="page"
                />
              </button>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShopPage;
