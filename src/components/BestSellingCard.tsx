import React from "react";
import { Button } from "./ui/button";
import { MdShoppingCart } from "react-icons/md";
import { IoIosHeart } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import BestSellingCardAddToCart from "./BestSellingCardAddToCart";


const BestSellingCard = ({
  src,
  alt,
  title,
  description,
  price,
  category,
  slug,
  discount,
}: {
  src: string;
  alt: string;
  title: string;
  description: string;
  price: number;
  category: string;
  slug: string;
  discount: number;
}) => {
  return (
    <div>
      <div className="max-w-[350px] h-[35rem] p-4 mx-auto rounded-xl shadow-md relative group">
        <Link href={`/${category}/${slug}`}>
          <div className="block rounded-xl overflow-hidden h-[23rem] items-center justify-center">
            <Image alt={alt} src={src} width={400} height={400} />
          </div>
          <div className="mt-4">
            {title && (
              <h2 className="mt-2 scroll-m-20 pb-2 text-lg font-semibold tracking-tight first:mt-0 text-gray-700 line-clamp-1">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-2 scroll-m-20 text-sm font-semibold tracking-tight text-gray-800 line-clamp-1">
                {description}
              </p>
            )}
            {price && (
              <div>
                <p
                  className={`mt-2 scroll-m-20 text-base font-semibold tracking-tight text-gray-700 line-clamp-1 
                  ${
                    discount > 0 &&
                    "line-through decoration-2 decoration-red-600/70"
                  }`}
                >
                  ${price}
                </p>
                {discount > 0 && (
                  <p className="mt-2 scroll-m-20 text-base font-semibold tracking-tight text-gray-700 line-clamp-1">
                    ${price -(price*discount)/100}
                  </p>
                )}
              </div>
            )}
          </div>
        </Link>
        <div>
          <div className=" bottom-2 absolute right-2 "><BestSellingCardAddToCart slug={slug}/></div>
         
          <Button className="group bg-gray-800 hover:bg-transparent text-white hover:text-gray-700 scroll-m-20 text-xs font-semibold tracking-tight rounded-xl bottom-2 absolute left-2 hover:shadow-lg ">
            <IoIosHeart className="mr-2 w-4 h-4 group-hover:text-myOrange duration 300" />
            Buy Now
          </Button>
          <div>
            {discount >0 && (
              <div className="scroll-m-20 border-b pb-2 text-xs font-semibold tracking-tight first:mt-0 text-white bg-myOrange absolute top-0 left-2 w-[87px] p-2 text-center rounded-tl-xl rounded-bl myDiscount ">{`${discount}% OFF`}</div>
            )}
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellingCard;
