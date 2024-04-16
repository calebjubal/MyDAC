import item1 from "../assets/item1.png";
import item2 from "../assets/item2.png";
import item3 from "../assets/item3.png";

const Pricing = () => {
  const cardData = [
    {
      image: item1,
      title: "Basic Pack",
      price: "$29",
      features: ["30 Capsules", "Immune Boosting Formula", "Free Shipping"],
    },
    {
      image: item2,
      title: "Standard Pack",
      price: "$49",
      features: ["60 Capsules", "Extra Strength Formula", "Free Shipping"],
    },
    {
      image: item3,
      title: "Premium Pack",
      price: "$79",
      features: ["90 Capsules", "Premium Grade Formula", "Free Shipping"],
    },
  ];
  return (
    <>
<h1 className="text-center mt-12 mb-6 text-4xl font-extrabold leading-none tracking-tight text-gray-500 md:text-5xl lg:text-6xl">
  Enhance your wellness journey with{" "}
  <span className="text-green-500 dark:text-gold-100">Nature's remedies</span>{" "}
  for a healthier life.
</h1>
<p className="text-lg text-center font-normal text-gray-500 lg:text-xl dark:text-gray-500">
  Welcome to our Ayurvedic supplement store, where we harness the power of
  traditional herbs and natural ingredients to support your well-being.
  <br />Explore our range of products crafted with care to promote holistic health
  and vitality.
</p>

      <div className="w-full py-[4rem] px-2 bg-white">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 hover:cursor-pointer">
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`w-full text-gray-700 border-darkGreen border-2 shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300`}
            >
              <img
                className="w-20 mx-auto mt-[-3rem] bg-white"
                src={card.image}
                alt="/"
              />
              <h2 className="text-2xl font-bold text-center py-8">
                {card.title}
              </h2>
              <p className="text-center text-3xl font-semibold">{card.price}</p>
              <div className="text-center font-medium">
                {card.features.map((feature, index) => (
                  <p
                    key={index}
                    className={`py-2 border-b mx-8 ${
                      index === 0 ? "mt-8" : ""
                    }`}
                  >
                    {feature}
                  </p>
                ))}
              </div>
              <button
                className={`bg-darkGreen text-white hover:border-2 hover:bg-white hover:text-gray-700 border-green-500 duration-150 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3`}
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Pricing;
