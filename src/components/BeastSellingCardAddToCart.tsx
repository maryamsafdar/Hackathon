"use client"
import React, { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { MdShoppingCart } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "@/app/store/Hooks";

import { addToCart } from "@/app/store/features/Cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BestSellingCardAddToCart = ({slug}:{slug:string}) => {
const product = useAppSelector((state) => state.products).find((value)=>value.slug==slug);
const dispatch = useAppDispatch()
const [cartItem, setcartItem] = useState({
  id: product?.id,
  title: product?.title,
  image: product?.image[0],
  slug: product?.slug,
  price: product?.price,
  category: product?.category,
  description: product?.description,
  size: product?.size[0],
  color: product?.color[0],
  quantity: product?.quantity,
  discount: product?.discount,
});
const notify = () => toast.success("Product Added Successfully", {
  position: "top-left",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
});


  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button className="group bg-gray-800 hover:bg-transparent text-white hover:text-gray-700 scroll-m-20 text-xs font-semibold tracking-tight rounded-xl bottom-2 absolute right-2 hover:shadow-lg ">
            <MdShoppingCart className="mr-2 w-4 h-4 group-hover:text-myOrange duration 300" />
            Add To Cart
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[15rem] bg-white rounded-xl">
        <div className="flex items-center">
            <span className="mr-3 scroll-m-20 text-base font-semibold tracking-tight text-gray-800">
              Size
            </span>

            <div className="form-control w-full max-w-xs">
              <select
                onChange={(e) =>
                   setcartItem({ ...cartItem, size: e.target.value })
                  }
                className="select select-bordered bg-white text-gray-700"
              >
                <option disabled value="Select Size">
                  Select Size
                </option>
                 {product?.size.map((item: any, i: any) => (
                
                  <option key={i}>{item}</option>
                  
                
                ))}
              </select>
            </div>
          </div>
          <div className="flex mt-5">
                <span className="mr-3  scroll-m-20 text-base font-semibold tracking-tight text-gray-800">
                  Color
                </span>
               {product?.color.map((item: any, i: any) => (
                  <button
                 key={i}
  onClick={() => setcartItem({ ...cartItem, color: item })}
                    className="border-2 border-gray-300 mr-1  bg-yellow-300 rounded-full w-6 h-6 focus:outline-none active:border-black focus:border-black"
              style={{ backgroundColor: item }}
                  />
                 
                ))}
              </div>
              <div className="w-fit"  onClick={notify}>
              <Button
              onClick={() => dispatch(addToCart(cartItem))} 
              className="group mt-5 w-full items-center bg-gray-800 hover:bg-transparent text-white hover:text-gray-700 scroll-m-20 text-xs font-semibold tracking-tight rounded-xl  hover:shadow-lg ">
            <MdShoppingCart className="mr-2 w-4 h-4 group-hover:text-myOrange duration 300" />
            Add To Cart
          </Button>
          </div>
      

        </PopoverContent>
      </Popover>
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default BestSellingCardAddToCart;
