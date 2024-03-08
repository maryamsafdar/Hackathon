"use client"
import { useAppDispatch } from "@/app/store/Hooks";
import React from "react";

import "react-toastify/dist/ReactToastify.css";
import { Button } from "./ui/button";
import { MdShoppingCart } from "react-icons/md";
import { addToCart } from "@/app/store/features/Cart";
import { ToastContainer, toast } from "react-toastify";


const AddToCartToast = ({cartItem}:any) => {
    const dispatch = useAppDispatch()
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
    <>
    <div className="w-fit" onClick={() => dispatch(addToCart(cartItem))}>
     
      <Button
                onClick={notify}
                className="group ml-20 bg-gray-800 hover:bg-transparent text-white hover:text-gray-700 scroll-m-20 text-xs font-semibold tracking-tight rounded-xl hover:shadow-lg  "
              >
                <MdShoppingCart className="mr-2 w-4 h-4 group-hover:text-myOrange duration 300" />
                Add To Cart
              </Button>
    
    </div>
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
    </>
  );
};

export default AddToCartToast;
