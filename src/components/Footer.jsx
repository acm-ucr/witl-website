import React from "react";
import Image from "next/image";
import logo from "@/public/assets/logo.webp";
import Link from "next/link";
import { links } from "@/data/Footer";

const Footer = () => {
  return (
    <div className="bottom-0 p-3 flex items-center bg-witl-purple-300 justify-between">
      <div className="flex gap-8 justify-center items-center">
        {links.map((link, index) => (
          <Link key={index} href={"#"} target="_blank">
            <Image src={link.icon} alt={`to ${link.icon}`} width={30} />
          </Link>
        ))}
      </div>
      <div className="rounded-full bg-white h-12 aspect-square flex items-center overflow-hidden m-1">
        <Image src={logo} alt="witl logo" />
      </div>
    </div>
  );
};

export default Footer;
