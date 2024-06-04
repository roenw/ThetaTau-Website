"use client"; // ref: https://stackoverflow.com/questions/74965849/youre-importing-a-component-that-needs-usestate-it-only-works-in-a-client-comp

import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import Image from "next/image";

const Navbar = () => {
    const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      linkname: "Home",
      target: "/",
    },
    {
      id: 2,
      linkname: "About",
      target: "/about",
    },
    {
      id: 3,
      linkname: "Rush",
      target: "/rush"
    },
    {
      id: 4,
      linkname: "Professionalism",
      target: "/professionalism"
    },
    {
      id: 5,
      linkname: "Brotherhood",
      target: "/brotherhood",
    },
    {
      id: 6,
      linkname: "Service",
      target: "/service"
    }
  ];

  return (
    //     <div className="flex justify-between items-center w-full h-16 px-4 text-black bg-white fixed nav">
    <div className="flex justify-between items-center w-full h-16 px-4 text-black bg-white nav">
      <div>
        {/* <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="">Logo</a></h1> */}
        <div className="font-signature ml-2 lg:ml-20">
          <a
            className="link-underline link-underline-black inline"
            href="/"
            rel="noreferrer"
          >
            <Image
              className="inline-block justify-center"
              src="/crest-transparent.png"
              width={50}
              height={50}
              alt="Theta Tau Fraternity crest"
            />
            <div className="inline-block justify-center items-start absolute">
              <div className="grid">
                <span className="pl-2 align-middle font-semibold text-red-700 text-xl">
                  Theta Tau Fraternity
                </span>
                <span className="pl-2 align-middle font-extralight text-m">
                  Delta Gamma Chapter
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>

      <ul className="hidden md:flex xl:mr-30 lg:mr-20">
        {links.map(({ id, linkname, target }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-700 hover:scale-105 hover:text-black hover:underline duration-100 link-underline"
          >
            <Link href={target}>{linkname}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul style={{backgroundColor: "white", zIndex: 5}}  className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen to-gray-800 text-gray-500">
          {links.map(({ id, linkname, target }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href={target}>
                {linkname}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;