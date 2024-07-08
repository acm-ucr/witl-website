import Link from "next/link";
import Image from "next/image";

const Page = () => {
  return (
    <div className="bg-witl-purple-300 min-h-screen flex items-center justify-center">
      <div className="m-32 bg-white rounded">
        <div className=" text-2xl text-witl-black font-marcellus flex flex-col justify-center items-center">
          <Link
            href="https://www.instagram.com/p/C1vm4lJL716/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="text-witl-black"
          >
            What can I do with LeGAL Rewards?
          </Link>
        </div>
        <div className="m-16 grid grid-cols-3 border 2 border-white gap-10">
          <div className=" bg-witl-purple-200 flex items-center justify-center">
            <Image
              src="/images/fellowship.webp"
              alt="fellowship"
              width={500}
              height={500}
              className="object-contain"
            />
          </div>
          <div>
            <Image
              src="/images/networkDinner.webp"
              alt="network dinner"
              width={500}
              height={500}
              className="object-cover"
            />
          </div>
          <div>
            <Image
              src="/images/groupPhoto.webp"
              alt="group photo"
              width={500}
              height={500}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
