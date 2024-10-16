"use client";
import Logo from "@/public/witllogo.svg";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { items } from "@/data/Nav";
import { FaBars } from "react-icons/fa";

const Navigation = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(true);
  const [animation, setAnimation] = useState("hidden");
  const handleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
    if (showMobileMenu) setAnimation("animate-expand");
    else setAnimation("animate-collapse");
  };
  return (
    <div className="fixed top-0 z-50">
      <div className="w-screen bg-witl-purple-300 flex items-center justify-between py-[1%] px-[2%] border-b-2 border-witl-white-100">
        <Link className="flex flex-row space-x-4 py-2" href="/">
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
              className="text-witl-white-100 text-3xl hover:text-witl-purple-100"
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
        className={`${animation} origin-top flex flex-col items-center bg-witl-purple-300 space-y-2 py-4 md:hidden`}
      >
        {items.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            className="text-2xl text-witl-white-100 hover:text-witl-purple-100"
            onClick={handleMobileMenu}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
