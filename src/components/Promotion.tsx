import React from "react";
import { Button } from "./ui/button";
import { AiFillShopping } from "react-icons/ai";

const Promotion = () => {
  return (
    <div className="mb-[100px] mt-[100px]">
      <div className="text-center mb-10">
        <h1 className="text-gray-700 scroll-m-20 text-xl font-bold tracking-tight lg:text-2xl">
          Our Promotions
        </h1>

        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
        <div></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div
          className="hero h-[20rem] rounded-xl"
          style={{ backgroundImage: "url(/images/Promotion-Banner.png)" }}
        >
          <div className="hero-overlay bg-opacity-40 rounded-xl"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-3 scroll-m-20 text-2xl font-semibold tracking-tight uppercase">
                Unlock up to{" "}
                <span className="text-myOrange">60% </span>off!🎉
              </h1>
              <p className="mb-5 scroll-m-20 text-medium font-semibold tracking-tight">
                {" "}
                Don't miss our flash sale on seasonal favorites!
              </p>
              
            </div>
          </div>
        </div>
        <div
          className="hero h-[20rem] rounded-xl"
          style={{ backgroundImage: "url(/images/Promotion-Banner1.png)" }}
        >
          <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-3 scroll-m-20 text-2xl font-semibold tracking-tight uppercase">
              Explore New Jewelry {" "}
                <span className="text-myOrange">30%</span> Off!" 🌟💍
              </h1>
              <p className="mb-5 scroll-m-20 text-medium font-semibold tracking-tight">
                {" "}
                Elevate Your Glamour, Embrace Unbeatable Deals. 
              </p>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
