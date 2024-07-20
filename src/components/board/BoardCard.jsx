"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const BoardCard = ({ image, name, position, linkedIn }) => {
  return (
    <div className="space-y-3">
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="flex justify-center w-[80%] aspect-[1/1] mx-[10%] my-[5%]"
      >
        <Link href={linkedIn} className="inline-block">
          <Image src={image} alt="picture of person" />
        </Link>
      </motion.div>
      <div className="space-y-0.5">
        <p className="text-xl flex justify-center md:text-4xl">{name}</p>
        <p className="text-sm flex justify-center md:text-2xl">{position}</p>
      </div>
    </div>
  );
};
export default BoardCard;
