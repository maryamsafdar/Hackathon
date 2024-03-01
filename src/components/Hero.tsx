import { AiFillShopping } from "react-icons/ai";
import { Button } from "./ui/button";
const Hero = () => {
  return (
    <div className="mb-[100px]">
      <div
        className="hero min-h-[80vh] custom-img bg-center no-repeat"
        style={{ backgroundImage: "url(/images/banner.png)" }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl"> Futuristic    <span className="text-myOrange">Clothes</span></h1>
            <p className="mb-5 scroll-m-20 text-xl font-semibold tracking-tight">
              Upgrade your wardrobe with Sleek & Stylish Apparels and Top-Notch
              Shoes.
            </p>
            <Button className=" text-white py-2 px-6 outline outline-offset-2 outline-1 outline-white  group hover:outline-myOrange duration-300 hover:rounded-3xl">
              <AiFillShopping className="mr-2 h-6 w-6 text-base group-hover:text-myOrange group-hover:animate-bounce" /> Shop Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
