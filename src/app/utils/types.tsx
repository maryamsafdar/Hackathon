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
    quantity:number,
    discount:number,
    uID: string | number | undefined
} 
export type Cart={
    id:number,
    title:string,
    image?:string| StaticImageData | undefined | any
    slug:string,
    price:number,
    category:string,
    size:string[],
    quantity:number,
    discount:number,
    uId:string | number | undefined
    color:string

}