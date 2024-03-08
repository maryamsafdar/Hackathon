import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Categories = () => {
   return (
      <div className=' body-font mb-[100px] mt-[100px]'>
         <div className="container px-5 mx-auto">
            <div className="text-center mb-10">
               <h1 className=" text-gray-700 scroll-m-20 text-xl font-bold tracking-tight lg:text-2xl">
                  Our Categories
               </h1>
               <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
               </p>
               <div className="flex mt-2 justify-center">
                  <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
               </div>
            </div>
         </div>
        
         <div className='grid grid-cols-2 lg:grid-cols-3 md:grid-cols-3 gap-4'> 
        
         <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative'>
            <Link href={"/T-shirts"}>
               <Image src="/images/t-shirts/f451baa75283c687b74c0ad0469e1179.jpg" alt="t-shirts" width={220} height={220} className='rounded-xl duration-500 group-hover:scale-125 ' />
               
               <div className=' hidden lg:block absolute -bottom-24 duration-500 group-hover:bottom-2 scroll-m-20 text-xl font-bold tracking-tight lg:text-2xl bg-gray-700/70 text-center text-white w-full'>
                  <h1  className="uppercase">T-Shirts</h1>
               </div>
               <div className='block lg:hidden absolute bottom-8  duration-500 z-[100] scroll-m-20 text-2xl font-bold tracking-tight bg-gray-700/70 text-center text-white w-full'>
                  <h1  className="uppercase">T-Shirts</h1>
               </div>
            </Link>
         </div>
         <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative'>
            <Link href={"/Coats"}>
               <Image src="/images/coat/Women's Blue Wool Trench Coat _ Trench Coat _ Wool Trench Coat.jpg" alt="coat" width={260} height={260} className='rounded-xl duration-500 group-hover:scale-125 ' />
               
               <div className=' hidden lg:block absolute -bottom-24 duration-500 group-hover:bottom-2 scroll-m-20 text-xl font-bold tracking-tight lg:text-2xl bg-gray-700/70 text-center text-white w-full'>
                  <h1  className="uppercase">Coats</h1>
               </div>
               <div className='block lg:hidden absolute bottom-8  duration-500 z-[100] scroll-m-20 text-2xl font-bold tracking-tight bg-gray-700/70 text-center text-white w-full'>
                  <h1  className="uppercase">Coats</h1>
               </div>
            </Link>
         </div>
         <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative'>
            <Link href={"/Accessories"}>
               <Image src="/images/accessories/Promise Rings_ 22 The Most Popular Ring Ideas For Your Love.jpg" alt="accessories" width={260} height={260} className='rounded-xl duration-500 group-hover:scale-125 ' />
               
               <div className=' hidden lg:block absolute -bottom-24 duration-500 group-hover:bottom-2 scroll-m-20 text-xl font-bold tracking-tight lg:text-2xl bg-gray-700/70 text-center text-white w-full'>
                  <h1  className="uppercase">Accessories</h1>
               </div>
               <div className='block lg:hidden absolute bottom-8  duration-500 z-[100] scroll-m-20 text-2xl font-bold tracking-tight bg-gray-700/70 text-center text-white w-full'>
                  <h1  className="uppercase">Accessories</h1>
               </div>
            </Link>
         </div>
         <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative'>
            <Link href={"/Shoes"}>
               <Image src="/images/shoes/Rhinestone Decor Point Toe Back Zipper Flats.jpg" alt="shoes" width={260} height={260} className='rounded-xl duration-500 group-hover:scale-125 ' />
               
               <div className=' hidden lg:block absolute -bottom-24 duration-500 group-hover:bottom-2 scroll-m-20 text-xl font-bold tracking-tight lg:text-2xl bg-gray-700/70 text-center text-white w-full'>
                  <h1  className="uppercase">Shoes</h1>
               </div>
               <div className='block lg:hidden absolute bottom-8  duration-500 z-[100] scroll-m-20 text-2xl font-bold tracking-tight bg-gray-700/70 text-center text-white w-full'>
                  <h1  className="uppercase">Shoes</h1>
               </div>
            </Link>
         </div>
         <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative'>
            <Link href={"Purfumes"}>
               <Image src="/images/purfumes/Lady million.jpg" alt="purfume" width={260} height={260} className='rounded-xl duration-500 group-hover:scale-125 ' />
               
               <div className=' hidden lg:block absolute -bottom-24 duration-500 group-hover:bottom-2 scroll-m-20 text-xl font-bold tracking-tight lg:text-2xl bg-gray-700/70 text-center text-white w-full'>
                  <h1  className="uppercase">Purfumes</h1>
               </div>
               <div className='block lg:hidden absolute bottom-8  duration-500 z-[100] scroll-m-20 text-2xl font-bold tracking-tight bg-gray-700/70 text-center text-white w-full'>
                  <h1  className="uppercase">Purfumes</h1>
               </div>
            </Link>
         </div>
         <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative'>
            <Link href={"/Bags"}>
               <Image src="/images/bags/GUESS_ Global Lifestyle Brand for Women, Men and Kids.jpg" alt="bag" width={260} height={260} className='rounded-xl duration-500 group-hover:scale-125 ' />
               
               <div className=' hidden lg:block absolute -bottom-24 duration-500 group-hover:bottom-2 scroll-m-20 text-xl font-bold tracking-tight lg:text-2xl bg-gray-700/70 text-center text-white w-full'>
                  <h1  className="uppercase">Bags</h1>
               </div>
               <div className='block lg:hidden absolute bottom-8  duration-500 z-[100] scroll-m-20 text-2xl font-bold tracking-tight bg-gray-700/70 text-center text-white w-full'>
                  <h1  className="uppercase">Bags</h1>
               </div>
            </Link>
         </div>
         
        
        
         </div>
         <div />
         <div />
         <div />
         <div />
      </div>
   )
}
export default Categories