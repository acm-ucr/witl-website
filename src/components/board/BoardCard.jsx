import Image from "next/image";
import Link from "next/link";

const BoardCard = ({ image, name, position, linkedIn }) => {
  return (
    <div>
      <div className="hover:scale-105 transition ease-in-out duration-300 flex justify-center mx-[10%] my-[5%]">
        <Link href={linkedIn} className="inline-block">
          <Image src={image} alt="picture of person" />
        </Link>
      </div>
      <p className="text-[90%] text-center flex justify-center md:text-4xl">
        {name}
      </p>
      <p className="text-[60%] text-center flex justify-center md:text-2xl">
        {position}
      </p>
    </div>
  );
};
export default BoardCard;
