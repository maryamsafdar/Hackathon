import {StaticImageData} from 'next/image'

export type Product={
    id:number,
    title:string,
    image?:string[] | StaticImageData | undefined | any,
    slug:string,
    price:number,
    category:string,
    description:string,
    size:string[] ,
    color:string[],
    quantity:number ,
    discount?:number | any,
    
} 
export type Cart={
    id:number,
    title:string,
    image?:string| StaticImageData | undefined | any
    slug:string,
    price:number,
    category:string,
    size:string,
    quantity:number,
    discount?:number | any,
    uID:string | number | undefined | any,
    color:string

}