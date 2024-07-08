import Image from "next/image";
import Ashley from "../../public/board/ashley.webp";
const Dummy = () => {
  return (
    <div className="static">
      <Image src={Ashley} alt="ashley" className="absolute bottom-[20%]" />
      <div className="grid grid-cols-3 border-4 border-purple-950 gap-2">
        <div className="bg-witl-purple-300 text-white w-fit text-6xl p-12">
          Womxn In The Law
        </div>
        <div className="bg-witl-purple-200 text-white w-fit text-6xl p-12">
          Womxn In The Law
        </div>
        <div className="bg-witl-purple-100 text-white w-fit text-6xl p-12">
          Womxn In The Law
        </div>
        <div className="bg-witl-purple-400 text-white w-fit text-6xl p-12">
          Womxn In The Law
        </div>
        <div className="bg-witl-purple-300 text-white w-fit text-8xl p-12 col-span-2">
          Womxn In The Law
        </div>
      </div>
    </div>
  );
};
export default Dummy;
