import Image from "next/image";
import Link from "next/link";

const BoardCard = ({ image, name, position, linkedIn }) => {
  return (
    <div className="space-y-5">
      <div className="flex justify-center">
        <Link href={linkedIn} className="inline-block">
          <Image src={image} alt="picture of person" />
        </Link>
      </div>
      <div>
        <p className="text-4xl font-medium font-libre-caslon-text flex justify-center">
          {name}
        </p>
        <p className="leading-6 text-2xl flex font-liber-caslon-text justify-center">
          {position}
        </p>
      </div>
    </div>
  );
};
export default BoardCard;
