import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { LuMinus, LuPlus } from "react-icons/lu";
import { FaTrash } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/app/store/Hooks";
import { addCart, deleteItem, subtractCart } from "@/app/store/features/Cart";

const CartCard = () => {
  const cartArray = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  
  return (
    <>
      {cartArray.length >= 1 &&
        cartArray.map((item: any, i:any) => (
          <div key={i} className="flex px-10 py-3">
            <Image
              src={item.image}
              alt={item.title}
              width={80}
              height={80}
              className="w-[100px] h-[100px]"
            />
            <div className="flex justify-between items-center w-full px-5">
              <div>
                {" "}
                <h1 className="text-sm font-semibold leading-none line-clamp-1 text-gray-700">
                  {item.title}
                </h1>
                <p className="text-sm mt-2 leading-none text-gray-800 font-semibold ">
                  Size: &nbsp;<span>{item.size}</span>
                </p>
                <p className="text-sm mt-2 leading-none text-gray-800 font-semibold ">
                  Color: &nbsp;
                  <span>
                    {" "}
                    <button
                      className="border-2 border-gray-300 mr-1  rounded-full w-[15px] h-[15px] focus:outline-none active:border-none focus:border-none"
                      style={{ backgroundColor: item.color }}
                    />
                  </span>
                </p>
                <div className="flex mt-2 items-center">
                  <Button className="group hover:shadow-xl bg-gray-800 text-white w-fit h-fit rounded-xl text-sm duration-300">
                    <LuMinus 
                    onClick={()=>dispatch(subtractCart(item))}
                    className="w-3 h-3 group-hover:text-gray-800" />
                  </Button>
                  <div className="ml-2 mr-2 text-sm font-semibold text-gray-800/80 tracking-tight">
                   {item.quantity}
                  </div>
                  <Button 
                  onClick={()=>dispatch(addCart(item))}
                  className="group hover:shadow-xl bg-gray-800 text-red w-fit h-fit rounded-xl text-sm duration-300">
                    <LuPlus className="w-3 h-3 group-hover:text-gray-800 text-white" />
                  </Button>
                </div>
                <div 
                
                className="lg:hidden flex-col items-end gap-5">
                  <h3 className="mt-2 font-semibold text-sm leading-none text-gray-800">
                    <span>Price:&nbsp;</span>&#36;
                    {item.discount > 0
                      ? (item.price - ((item.price * item.discount) / 100))  *
                        item.quantity
                      : item.price * item.quantity}
                  </h3>
                  <FaTrash 
                    onClick={() => dispatch(deleteItem(item.uID))}
                  className="mt-2 text-base font-semibold leading-none line-clamp-1 text-red-600 cursor-pointer" />
                </div>
              </div>
            </div>
            <div 
             
            className="hidden lg:flex flex-col items-end gap-5">
              <h3 className="font-semibold text-sm leading-none text-gray-800">
                <span>Price:&nbsp;</span>&#36;
                {item.discount > 0
                  ? (item.price - (item.price * item.discount) / 100) *
                    item.quantity
                  : item.price * item.quantity}
              </h3>
              <FaTrash
               onClick={() => dispatch(deleteItem(item.uID))}
                className=" text-base font-semibold leading-none line-clamp-1 text-red-600 cursor-pointer"
              />
            </div>
          </div>
        ))}
    </>
  );
};

export default CartCard;
