'use client'
import CartCard from "@/components/CartCard";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "../store/Hooks";

const CartPage = () => {
    const cartArray = useAppSelector((state) => state.cart);
    const total = cartArray.reduce((total,arr)=>{
      return  total+(arr.price-(arr.price*arr.discount)/100)*arr.quantity
    },0)
  return (
    <div>
         <div className="grid lg:grid-cols-2 grid-cols-1">
        <div className="cols-span-2">
          <CartCard/>
          
        </div>
        <div className="">
          <div className="bg-gray-700/5 p-5 rounded-xl ">
            <h2 className="flex scroll-m-20 text-lg font-semibold tracking-tight uppercase text-gray-700">
              Order Summary
            </h2>
            <div className="divider mt-0 mb-1"></div>
            <div className="text-sm font-medium tracking-tight text-gray-700 ">
              <div className="flex items-center justify-between capitalize">
                <h2>Sub total</h2>
                <h1>${total}</h1>
              </div>
              <div className="flex items-center justify-between capitalize">
                <h2>Delivery Charges</h2>
                <h1>TBD</h1>
              </div>
              <div className="flex items-center justify-between capitalize">
                <h2>Sales Tax</h2>
                <h1>TBD</h1>
              </div>
            </div>
            <div className='divider mt-0 mb-1'></div>
            <div className="flex items-center justify-between uppercase tracking-tight text-sm font-semibold text-gray-700">
                <h2>Estimated total</h2>
                <h1>${total}</h1>
              </div>
              <div className='divider mt-0 mb-1'></div>
              <div className="flex items-center justify-center w-full"><Button className="bg-gray-700 hover:bg-transparent duration-300 text-white hover:text-gray-700 scroll-m-20 text-xs font-semibold tracking-tight hover:shadow-md rounded-xl uppercase">Proceed To Checkout</Button></div> 
              <div className='divider mt-0 mb-1'></div>
              <p className="text-xs font-semibold tracking-tight text-gray-700 w-[97%] text-center italic capitalize"> {`*Delivery Charges and the sales tax will be calculated in the checkout page.`}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage