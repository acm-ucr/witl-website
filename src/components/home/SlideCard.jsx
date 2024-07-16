import Image from "next/image";

const SlideCard = ({ image, description, year }) => {
  return (
    <div className="bg-witl-purple-300 w-[22%] aspect-[7/9] rounded-3xl">
      <Image
        src={image}
        alt="picture of event"
        className="relative left-[10%] w-[80%] aspect-[10/7] top-[5%]"
      />
      <p className="relative text-xl text-white text-wrap text-center font-junge top-[10%]">
        {description}
      </p>
      <p className="relative text-xl text-white text-center font-junge top-[35%]">
        {year}
      </p>
    </div>
  );
};

export default SlideCard;
