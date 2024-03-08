import React from "react";
import Image from "next/image";
import Link from "next/link";

const Categories = () => {
  return (
    <div className="mb-[100px] mt-[100px] ">
      <div className="text-center mb-10">
        <h1 className="text-gray-700 scroll-m-20 text-xl font-bold tracking-tight lg:text-2xl">
          Our Categories
        </h1>

        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 md:grid-cols-3 gap-4">
          <div className="mt-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
            <Link href={"/T-shirts"}>
              <Image
                alt="T-shirts"
                src="/images/t-shirts/2.jpg "
                width={260}
                height={260}
                className="rounded-xl duration-500 group-hover:scale-125 border group-hover:border-gray-700"
              />
              <div className="hidden lg:block absolute -bottom-24 duration-500 group-hover:bottom-2 scroll-m-20 text-xl font-bold tracking-tight lg:text-2xl bg-gray-700/70 text-center text-white w-full">
                <h1 className="uppercase">T-shirt</h1>
              </div>
              <div className="block lg:hidden absolute bottom-8  duration-500 z-[100] scroll-m-20 text-2xl font-bold tracking-tight bg-gray-700/70 text-center text-white w-full">
                <h1 className="uppercase">T-shirt</h1>
              </div>
            </Link>
          </div>
          <div className="mt-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
            <Link href={"/coats"}>
              <Image
                alt="Coat"
                src="/images/coat/Women's Blue Wool Trench Coat _ Trench Coat _ Wool Trench Coat.jpg "
                width={260}
                height={260}
                className="rounded-xl duration-500 group-hover:scale-125"
              />
               <div className="hidden lg:block absolute -bottom-24 duration-500 group-hover:bottom-2 scroll-m-20 text-xl font-bold tracking-tight lg:text-2xl bg-gray-700/70 text-center text-white w-full">
                <h1 className="uppercase">Coats</h1>
              </div>
              <div className="block lg:hidden absolute bottom-8  duration-500 z-[100] scroll-m-20 text-2xl font-bold tracking-tight bg-gray-700/70 text-center text-white w-full">
                <h1 className="uppercase">Coats</h1>
              </div>
            </Link>
          </div>
          <div className="mt-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
            <Link href={"/accessories"}>
              <Image
                alt="accessories"
                src="/images/accessories/Promise Rings_ 22 The Most Popular Ring Ideas For Your Love.jpg "
                width={260}
                height={260}
                className="rounded-xl duration-500 group-hover:scale-125"
              />
               <div className="hidden lg:block absolute -bottom-24 duration-500 group-hover:bottom-2 scroll-m-20 text-xl font-bold tracking-tight lg:text-2xl bg-gray-700/70 text-center text-white w-full">
                <h1 className="uppercase">Accessories</h1>
              </div>
              <div className="block lg:hidden absolute bottom-8  duration-500 z-[100] scroll-m-20 text-2xl font-bold tracking-tight bg-gray-700/70 text-center text-white w-full">
                <h1 className="uppercase">Accessories</h1>
              </div>
            </Link>
          </div>
          <div className="mt-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
            <Link href={"/shoes"}>
              <Image
                alt="shoes"
                src="/images/shoes/Rhinestone Decor Point Toe Back Zipper Flats.jpg "
                width={260}
                height={260}
                className="rounded-xl duration-500 group-hover:scale-125"
              />
             <div className="hidden lg:block absolute -bottom-24 duration-500 group-hover:bottom-2 scroll-m-20 text-xl font-bold tracking-tight lg:text-2xl bg-gray-700/70 text-center text-white w-full">
                <h1 className="uppercase">Shoes</h1>
              </div>
              <div className="block lg:hidden absolute bottom-8  duration-500 z-[100] scroll-m-20 text-2xl font-bold tracking-tight bg-gray-700/70 text-center text-white w-full">
                <h1 className="uppercase">Shoes</h1>
              </div>
            </Link>
          </div>
          
          <div className="mt-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
            <Link href={"purfumes"}>
              <Image
                alt="purfumes"
                src="/images/purfumes/Lady million.jpg "
                width={260}
                height={260}
                className="rounded-xl duration-500 group-hover:scale-125"
              />
              <div className="hidden lg:block absolute -bottom-24 duration-500 group-hover:bottom-2 scroll-m-20 text-xl font-bold tracking-tight lg:text-2xl bg-gray-700/70 text-center text-white w-full">
                <h1 className="uppercase">Purfumes</h1>
              </div>
              <div className="block lg:hidden absolute bottom-8  duration-500 z-[100] scroll-m-20 text-2xl font-bold tracking-tight bg-gray-700/70 text-center text-white w-full">
                <h1 className="uppercase">Purfumes</h1>
              </div>
            </Link>
          </div>
          <div className="mt-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
            <Link href={"/bags"}>
              <Image
                alt="bags"
                src="/images/bags/GUESS_ Global Lifestyle Brand for Women, Men and Kids.jpg "
                width={260}
                height={260}
                className="rounded-xl duration-500 group-hover:scale-125"
              />
              <div className="hidden lg:block absolute -bottom-24 duration-500 group-hover:bottom-2 scroll-m-20 text-xl font-bold tracking-tight lg:text-2xl bg-gray-700/70 text-center text-white w-full">
                <h1 className="uppercase">Bags</h1>
              </div>
              <div className="block lg:hidden absolute bottom-8  duration-500 z-[100] scroll-m-20 text-2xl font-bold tracking-tight bg-gray-700/70 text-center text-white w-full">
                <h1 className="uppercase">Bags</h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
