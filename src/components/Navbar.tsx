"use client";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavigationMenuDemo } from "./NavLink";
import Image from "next/image";
import Link from "next/link";
import { useAppSelector } from "@/app/store/Hooks";
const Navbar = () => {
  const cart = useAppSelector((state) => state.cart);
  return (
    <div>
      <div className="navbar bg-myGray">
        <div className="navbar-start">
          <div className="dropdown ">
            <div
              tabIndex={0}
              role="button"
              className="p-right text-2xl lg:hidden"
            >
              <RxHamburgerMenu />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <details>
                  <summary>Women</summary>
                  <ul className="p-2">
                    <li>
                      <Link href={"/T-Shirts"}>T-Shirts</Link>
                    </li>
                    <li>
                      <Link href={"/Coats"}>Coats</Link>
                    </li>
                    <li>
                      <Link href={"/Accessories"}>Accessories/Jewelry</Link>
                    </li>
                    <li>
                      <Link href={"/Shoes"}>Shoes</Link>
                    </li>
                    <li>
                      <Link href={"/Bags"}>Bags</Link>
                    </li>
                    <li>
                      <Link href={"/Purfumes"}>Purfumes</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link href={"#"}>About</Link>
              </li>
              <li>
                <Link href={"#"}>Contact</Link>
              </li>
            </ul>
          </div>

          <Image
            alt="logo"
            src={"/images/logo1.png"}
            width={200}
            height={200}
            className="pl-4 hidden lg:block"
          />
        </div>
        <div className="navbar-center">
          <Image
            alt="logo"
            src={"/images/logo1.png"}
            width={200}
            height={200}
            className="block lg:hidden"
          />
          <div className=" hidden lg:flex">
            <NavigationMenuDemo />
          </div>
        </div>
        <div className="navbar-end">
          <Link href={"/cart"}>
            <div className="group">
              <label
                tabIndex={0}
                role="button"
                className="pr-4 cursor-pointer group  "
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 group-hover:text-myOrange duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  {cart.length > 0 && (
                    <span className="badge badge-sm indicator-item text-white bg-myRed group-hover:bg-red-700">
                      {cart.length}
                    </span>
                  )}
                 
                </div>
              </label>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
