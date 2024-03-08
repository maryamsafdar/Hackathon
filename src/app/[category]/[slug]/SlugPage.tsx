"use client";
import { Button } from "@/components/ui/button";
import { IoIosHeart } from "react-icons/io";
import { MdShoppingCart } from "react-icons/md";
import { LuMinus, LuPlus } from "react-icons/lu";
import SlugComponent from "@/components/SlugComponent";
import { useAppDispatch, useAppSelector } from "@/app/store/Hooks";
import { useState } from "react";
import { addToCart } from "@/app/store/features/Cart";
import AddToCartToast from "@/components/AddToCartToast";

const SlugPage = ({ params }: { params: { slug: string } }) => {
  const product = useAppSelector((state) => state.products);
  const slug = product.filter((val) => val.slug == params.slug);
  const dispatch = useAppDispatch();
  const [cartItem, setcartItem] = useState({
    id: slug[0].id,
    title: slug[0].title,
    image: slug[0].image[0],
    slug: slug[0].slug,
    price: slug[0].price,
    category: slug[0].category,
    description: slug[0].description,
    size: slug[0].size[0],
    color: slug[0].color[0],
    quantity: slug[0].quantity,
    discount: slug[0].discount,
  });
 

  return (
    <div>
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <SlugComponent image={slug[0].image} />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="scroll-m-20 text-sm font-semibold text-gray-500 tracking-widest uppercase">
              {slug[0].category}
            </h2>
            <h1 className=" mt-3 text-gray-700 scroll-m-20 text-2xl font-semibold tracking-tight mb-1">
              {slug[0].title}
            </h1>

            <div className="rating rating-sm mt-2">
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-myOrange"
                checked
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-myOrange"
                checked
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-myOrange"
                checked
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-myOrange"
                checked
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-myOrange"
                checked
              />
            </div>

            <p className="mt-2 leading-normal text-justify scroll-m-20 text-base font-normal tracking-tight mb-1 text-gray-800 ">
              {slug[0].description}
            </p>
            <div className="flex mt-6 items-center pb-5 mb-5">
              <div className="flex">
                <span className="mr-3 scroll-m-20 text-base font-semibold tracking-tight text-gray-800">
                  Color
                </span>
                {slug[0].color.map((item: any, i: number) => (
                  <button
                    key={i}
                    onClick={() => setcartItem({ ...cartItem, color: item })}
                    className="border-2 border-gray-300 mr-1  rounded-full w-6 h-6 focus:outline-none active:border-black focus:border-black"
                    style={{ backgroundColor: item }}
                  />
                ))}
              </div>
              <div className="flex ml-6 items-center">
                <span className="mr-3 scroll-m-20 text-base font-semibold tracking-tight text-gray-800">
                  Size
                </span>

                <div className="form-control w-full max-w-xs">
                  <select
                    onChange={(e) =>
                      setcartItem({ ...cartItem, size: e.target.value })
                    }
                    className="select select-bordered"
                  >
                    <option disabled value="Select Size">
                      Select Size
                    </option>
                    {slug[0].size.map((item: any, i: number) => (
                      <option key={i} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <span className="mr-3 scroll-m-20 text-base font-semibold tracking-tight text-gray-800">
                Quantity
              </span>
              <Button className="group hover:shadow-xl bg-gray-800 text-white w-fit h-fit rounded-xl text-sm duration-300">
                <LuMinus
                  onClick={() =>
                    setcartItem({
                      ...cartItem,
                      quantity:
                        cartItem.quantity <= 1 ? 1 : --cartItem.quantity,
                    })
                  }
                  className="w-3 h-3 group-hover:text-gray-800"
                />
              </Button>
              <div className="ml-2 mr-2 text-sm font-semibold text-gray-800/80 tracking-tight">
                {cartItem.quantity}
              </div>
              <Button className="group hover:shadow-xl bg-gray-800 text-red w-fit h-fit rounded-xl text-sm duration-300">
                <LuPlus
                  onClick={() =>
                    setcartItem({ ...cartItem, quantity: ++cartItem.quantity })
                  }
                  className="w-3 h-3 group-hover:text-gray-800 text-white"
                />
              </Button>
            </div>
            <div className="divider"></div>
            <div className="flex items-center justify-between">
              <div>
                <span
                  className={`mt-2 scroll-m-20 text-base font-semibold tracking-tight text-gray-700 
                  ${
                    cartItem.discount > 0 &&
                    "line-through decoration-2 decoration-red-600/70"
                  }`}
                >
                  ${cartItem.price * cartItem.quantity}
                </span>

                {cartItem.discount > 0 && (
                  <span className="ml-3 scroll-m-20 text-2xl font-semibold tracking-tight text-gray-800">
                    $
                    {(cartItem.price -
                      (cartItem.price * cartItem.discount) / 100) *
                      cartItem.quantity}
                  </span>
                )}
              </div>

             {/* <Button
                onClick={() => dispatch(addToCart(cartItem))}
                className="group bg-gray-800 hover:bg-transparent text-white hover:text-gray-700 scroll-m-20 text-xs font-semibold tracking-tight rounded-xl hover:shadow-lg  "
              >
                <MdShoppingCart className="mr-2 w-4 h-4 group-hover:text-myOrange duration 300" />
                Add To Cart
              </Button>*/}
              <AddToCartToast cartItem={cartItem} className="ml-5"/>
            </div>
            <Button className="mt-2 w-full group bg-gray-800 hover:bg-transparent text-white hover:text-gray-700 scroll-m-20 text-xs font-semibold tracking-tight rounded-xl hover:shadow-lg ">
              <IoIosHeart className="mr-2 w-4 h-4 group-hover:text-myOrange duration 300" />
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlugPage;
