import React from "react";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-5 mx-auto">
          <div className="flex flex-wrap md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="scroll-m-20 border-b pb-2 text-lg text-gray-700 font-semibold tracking-tight first:mt-0">
                Comapny
              </h2>
              
              <nav className="list-none mb-10">
                <li>
                  <Link
                    href={"/"}
                    className="text-base text-gray-700 hover:text-gray-500 tracking-tight "
                  >
                    Home
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    href={"#"}
                    className="text-base text-gray-700 hover:text-gray-500 tracking-tight "
                  >
                    About
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    href={"#"}
                    className="text-base text-gray-700 hover:text-gray-500 tracking-tight "
                  >
                    Contact Us
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="scroll-m-20 border-b pb-2 text-lg text-gray-700 font-semibold tracking-tight first:mt-0">
                Services
              </h2>
              <nav className="list-none mb-10">
              <li>
                  <Link
                    href={"/"}
                    className="text-base text-gray-700 hover:text-gray-500 tracking-tight "
                  >
                    Branding
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="text-base text-gray-700 hover:text-gray-500 tracking-tight "
                  >
                    Design
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="text-base text-gray-700 hover:text-gray-500 tracking-tight "
                  >
                    Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="text-base text-gray-700 hover:text-gray-500 font-semibold tracking-tight "
                  >
                    Advertisement
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="scroll-m-20 border-b pb-2 text-lg text-gray-700 font-semibold tracking-tight first:mt-0">
                Legal
              </h2>
              <nav className="list-none mb-10">
              <li>
                  <Link
                    href={"/"}
                    className="text-base text-gray-700 hover:text-gray-500 tracking-tight "
                  >
                    Terms Of Use
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="text-base text-gray-700 hover:text-gray-500 tracking-tight "
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="text-base text-gray-700 hover:text-gray-500 tracking-tight "
                  >
                    Cookie Policy
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="scroll-m-20 border-b pb-2 text-lg text-gray-700 font-semibold tracking-tight first:mt-0">
                Subscribe
              </h2>
              <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                  <label
                    htmlFor="footer-field"
                    className="text-xs text-gray-700 hover:text-gray-500 font-semibold tracking-tight"
                  >
                    Your Email Here
                  </label>
                  <input
                    type="text"
                    id="footer-field"
                    name="footer-field"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-indigo-200  focus:border-black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded">
                  Get Notified
                </button>
              </div>
              <p className="text-xs py-2 text-gray-700 hover:text-gray-500 font-semibold tracking-tight">
                Please provide us your email
                <br className="lg:block hidden" />
                to get notified for exciting promos.
              </p>
            </div>
          </div>
        </div>
        <div>
          
          <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <Image alt="logo" src={'/images/logo.png'} width={150} height={150}  />
          
            <p className="text-base  sm:ml-6 sm:mt-0 mt-4 text-black px-15 ">
              © 2024 <b> MF Market </b>
            </p>
            <p className="text-base text-gray-700 px-40">
              Code by:{" "}
              <b className="text-base text-gray-800">maryamsafdar on github</b>
            </p>

            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a>
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a className="ml-3 ">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a className="ml-3">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                </svg>
              </a>
              <a className="ml-3">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={0}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  />
                  <circle cx={4} cy={4} r={2} stroke="none" />
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
