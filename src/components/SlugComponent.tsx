"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";

const SlugCompnent = ({ image }: string | string[] | StaticImageData | any) => {
  const [path, setpath] = useState("");

  return (
    <div>
      <Image
        src={path ? path : image[0]}
        alt="e-commerece"
        width={400}
        height={400}
      />
      <div className="flex items-center justify-evenly mx-auto mt-2">
        {image.map((item: string, i: number) => (
          
            <div key={i} className="cursor-pointer w-16 h-16">
              <Image
                alt="abc"
                src={item}
                width={60}
                height={60}
                onClick={() => setpath(item)}
              />
            </div>
           
         
        ))}
      </div>
    </div>
  );
};

export default SlugCompnent;
