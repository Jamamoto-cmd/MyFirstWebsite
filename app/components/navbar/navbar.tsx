//This component is a navigation bar for my Website

"use client";

//Import modules
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  const [isClick, setisClick] = useState(false);

  const toggleNavBar = () => {
    setisClick(!isClick);
  };

  //get access to the router
  const router = useRouter();

  const clickHandler = () => {
    router.push("/about");
  };

  return (
    //Optional: fixed bg-background-blur backdrop-filter backdrop-blur-lg bg-opacity-0
    <nav className="fixed bg-white dark:bg-black text-black dark:text-white w-full shadow-md shadow-black dark:shadow-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/*Logo and name */}
            <div className="flex-shrink-0 flex">
              <Image
                src="/LogoW.png"
                alt="not found"
                width={50}
                height={40}
                className="hidden dark:block"
              />
              <Image
                src="/LogoB.png"
                alt="not found"
                width={50}
                height={40}
                className="dark:hidden"
              />
              <button className="p-2 text-2xl font-bold" onClick={clickHandler}>
                Jonny Günther
              </button>
            </div>
          </div>
          {/*Buttons*/}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <Link href="/">
                <p className="hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black  rounded-lg p-2">
                  Home
                </p>
              </Link>
              <Link href="/about">
                <p className="hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black  rounded-lg p-2">
                  About
                </p>
              </Link>
              <Link href="/projects">
                <p className="hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black  rounded-lg p-2">
                  Projects
                </p>
              </Link>
              <Link href="/faq">
                <p className="hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black  rounded-lg p-2">
                  FAQ's
                </p>
              </Link>
              <Link href="/contact">
                <p className="hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black  rounded-lg p-2">
                  Contact
                </p>
              </Link>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={toggleNavBar}
            >
              {isClick ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isClick && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/">
              <p className="hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black  rounded-lg p-2">
                Home
              </p>
            </Link>
            <Link href="/about">
              <p className="hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black  rounded-lg p-2">
                About
              </p>
            </Link>
            <Link href="/projects">
              <p className="hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black  rounded-lg p-2">
                Projects
              </p>
            </Link>
            <Link href="/faq">
              <p className="hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black  rounded-lg p-2">
                FAQ's
              </p>
            </Link>
            <Link href="/contact">
              <p className="hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black  rounded-lg p-2">
                Contact
              </p>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
