"use client";
import Logo from "@/public/images/WITL-logo.webp";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { items } from "@/data/Nav.js";
import { FaBars } from "react-icons/fa";

const Navigation = () => {
  const [mobile, setMobile] = useState(false);
  const handleMobileMenu = () => {
    setMobile(!mobile);
  };
  return (
    <div className="sticky top-0 z-10">
      <div className="w-screen bg-witl-purple-300 flex items-center justify-between py-[1%] px-[2%] border-b-2 border-witl-white-100">
        <Link className="flex flex-row space-x-4" href="/">
          <Image src={Logo} alt="WITL Icon" />
          <div className="hidden md:flex md:flex-col text-witl-white-100">
            <div className="text-2xl">WOMXN IN THE LAW</div>
            <div>EST. 2022</div>
          </div>
        </Link>

        <div className="md:hidden flex flex-col items-center text-witl-white-100">
          <div className="text-xl">WOMXN IN THE LAW</div>
          <div>EST. 2022</div>
        </div>

        <div className="hidden md:flex space-x-8">
          {items.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className="text-witl-white-100 text-3xl"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="md:hidden" onClick={handleMobileMenu}>
          <FaBars className="text-witl-white-100 text-3xl font-bold" />
        </div>
      </div>

      {/* mobile menu */}
      <div
        className={
          mobile
            ? "md:hidden flex flex-col items-center bg-witl-purple-300 space-y-2 py-2"
            : "hidden"
        }
      >
        {items.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            className="text-2xl text-witl-white-100"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
