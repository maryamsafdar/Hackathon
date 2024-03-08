"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [

  {
    title: "T-Shirts",
    href: "/T-Shirts",
    description:
      "From classic tees to trendy prints, find your perfect style staple for every occasion.",
  },
  {
    title: "Coats",
    href: "/Coats",
    description:
      "Stay cozy and chic with our collection of coats, blending warmth with timeless elegance.",
  },
  {
    title: "Accessories/Jewelry",
    href: "/Accessories",
    description:
      "Add the finishing touch to your ensemble with our exquisite accessories and dazzling jewelry, designed to make you sparkle.",
  },
  {
    title: "Shoes",
    href: "/Shoes",
    description:
      "Step into style with our curated selection of footwear, where comfort meets fashion-forward flair.",
  },
  {
    title: "Bags",
    href: "/Bags",
    description:
      "Carry your essentials in luxury and style with our collection of chic and versatile bags, designed to complement your on-the-go lifestyle.",
  },
  {
    title: "Purfumes",
    href: "/Purfumes",
    description:
      "Indulge your senses with our enchanting array of perfumes, each scent crafted to captivate and leave a lasting impression.",
  },


  
]

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
       
         
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()} >
              Home
            </NavigationMenuLink>
            
          </Link>
        </NavigationMenuItem>
    
        <NavigationMenuItem>
          <NavigationMenuTrigger>Women</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-myGray ">
              {components.map((component) => (
                <Link  key={component.title}
                 
                href={component.href} legacyBehavior passHref>
                <ListItem
                 
                  title={component.title}
                >
                  {component.description}
                </ListItem></Link>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About
            </NavigationMenuLink>
            
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact
            </NavigationMenuLink>
            
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none group hover:text-myOrange duration-500">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground hover:text-myBlue duration-300 ">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
