import Image from "next/image";
import Link from "next/link";

const BoardCard = ({ image, name, position, linkedIn }) => {
  return (
    <div className="space-y-3">
      <div className="flex justify-center">
        <Link href={linkedIn} className="inline-block">
          <Image src={image} alt="picture of person" />
        </Link>
      </div>
      <div className="space-y-0.5">
        <p className="text-4xl flex justify-center">{name}</p>
        <p className="text-2xl flex justify-center">{position}</p>
      </div>
    </div>
  );
};
export default BoardCard;
