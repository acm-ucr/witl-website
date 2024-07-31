import Image from "next/image";

const SlideCard = ({ image, description, year }) => {
  return (
    <div className="bg-transparent w-full aspect-[9/10] rounded-3xl">
      <Image
        src={image}
        alt="picture of event"
        className="relative left-[10%] w-[80%] aspect-[10/7] top-[7%] md:top-[5%]"
      />
      <p className="relative text-[45%] md:text-l lg:text-xl text-white text-wrap text-center font-type-junge top-[10%]">
        {description}
      </p>
      <p className="absolute text-sm md:text-l lg:text-xl text-white text-center font-type-junge  top-[80%] md:top-[85%] left-[50%] -mx-4">
        {year}
      </p>
    </div>
  );
};

export default SlideCard;
