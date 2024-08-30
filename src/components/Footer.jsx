import React from "react";
import Image from "next/image";
import logo from "@/public/assets/logo.webp";
import Link from "next/link";
import { links } from "@/data/footer";

const Footer = () => {
  return (
    <div className="p-3 flex items-center bg-witl-purple-300 justify-between">
      <div className="flex gap-4 md:gap-8 justify-center items-center">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.link}
            target="_blank"
            className="text-witl-white-100 text-xl md:text-4xl hover:text-witl-purple-100 hover:scale-110"
          >
            {link.icon}
          </Link>
        ))}
      </div>
      <div className="rounded-full bg-white h-7 md:h-12 aspect-square flex items-center overflow-hidden m-1 mr-2">
        <Image src={logo} alt="witl logo" />
      </div>
    </div>
  );
};

export default Footer;
