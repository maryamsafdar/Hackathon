'use client'
import React from "react";
import BestSellingCard from "./BestSellingCard";
import { useAppSelector } from "@/app/store/Hooks";
const BestSelling = () => {
  const product = useAppSelector((state) => state.products);

  const bestSell = product.slice(0,6);
  
  
  return (
    <div className="mb-[100px] mt-[100px] ">
      <div className="items-center justify-center text-center mb-10">
        <h1 className="text-gray-700 scroll-m-20 text-xl font-bold tracking-tight lg:text-2xl">
          Best Selling Products
        </h1>

        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center text-center gap-5">
        {bestSell.map((items:any, i:any) => (
          <BestSellingCard
            key={i}
            src={items.image[0]}
            alt={items.title}
            title={items.tilte}
            description={items.description}
            price={items.price}
            category={items.category}
            slug={items.slug} 
            discount={items.discount} // Use this line
          />
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default BestSelling;