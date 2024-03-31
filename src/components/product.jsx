import { Link } from "react-router-dom";
import pr1_img from "../assets/ingredients_img.png"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Product = () => {
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
            backgroundColor:'#0D9B4D',
            color:'gray',
            duration:1,
            scrollTrigger: {
              trigger: section,
              start: "top center+=120",
              end: "top center-=200",
              scrub: 3,
  
            }
          }
        );
      }
    }, []);
  
    return (
    <section ref={sectionRef} className="body-font text-white -mt-8 justify-center items-center">
        <div className="lg:flex-grow lg:pr-56 md:pr-16 flex flex-col md:items-start md:text-left mb-16 container px-5 py-20 mx-auto">
            <Link to="#" className="flex flex-col items-center shadow md:flex-row rounded-lg md:max-w-xl text-black hover:bg-black hover:text-white dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-[130px]">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={ pr1_img } alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-white">SERIOUR MASS</h5>
                    <p className="mb-3 font-normal dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>
            </Link>
            <Link to="#" className="flex flex-col items-center shadow md:flex-row rounded md:max-w-xl text-black hover:bg-black hover:text-white dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-[130px]">
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-white">PROTEIN WHEY</h5>
                    <p className="mb-3 font-normal dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>
                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={pr1_img} alt="" />
            </Link>
            <Link to="#" className="flex flex-col items-center shadow md:flex-row rounded-lg md:max-w-xl text-black hover:bg-black hover:text-white dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-[130px]">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={pr1_img} alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-white">MAX MASS 3XL</h5>
                    <p className="mb-3 font-normal dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>
            </Link>
        </div>
      </section>
    );
  };
  
export default Product
