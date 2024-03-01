import React from "react";
import Image from "next/image";
const Services = () => {
  return (
    <div>
      <section className=" body-font mb-[100px] mt-[100px]">
        <div className="container px-5 mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-gray-700 scroll-m-20 text-xl font-bold tracking-tight lg:text-2xl">
              Our Services
            </h1>

            <div className="flex mt-2 justify-center">
              <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center group">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
                <Image
                  src={"/images/delivery-icon.png"}
                  alt="customer support"
                  width={300}
                  height={300}
                  className="w-30 h-30"
                />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-700 scroll-m-20 text-lg font-bold tracking-tight lg:text-xl group-hover:text-myOrange  mb-3">
                  Free Delivery                </h2>
                <p className="text-gray-500 line-clamp-2 scroll-m-20 text-base font-semibold tracking-tight group-hover:text-gray-400">
                  Free Delivery On Order Above $1000
                </p>
              </div>
            </div>

            <div className="p-4 md:w-1/3 flex flex-col text-center items-center group">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
                <Image
                  src={"/images/customer support.png"}
                  alt="customer support"
                  width={300}
                  height={300}
                  className="w-30 h-30"
                />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-700 scroll-m-20 text-lg font-bold tracking-tight lg:text-xl group-hover:text-myOrange  mb-3">
                  24/7 Customer Support
                </h2>
                <p className="text-gray-500 line-clamp-2 scroll-m-20 text-base font-semibold tracking-tight group-hover:text-gray-400">
                  For Queries and Questions Feel Free To Contact.
                </p>
              </div>
            </div>
             
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center group">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
                <Image
                  src={"/images/money-back.png"}
                  alt="money-back gurantee"
                  width={200}
                  height={200}
                  className="w-20 h-20"
                />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-700 scroll-m-20 text-lg font-bold tracking-tight lg:text-xl group-hover:text-myOrange  mb-3">
                  Money Back Gurantee
                </h2>
                <p className="text-gray-500 line-clamp-2 scroll-m-20 text-base font-semibold tracking-tight group-hover:text-gray-400">
                  Money Back Gurantee For Damage Products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
