import Image from "next/image";

const SlideCard = ({ image, description, year }) => {
  return (
    <div className="bg-transparent w-full aspect-[9/10] rounded-3xl">
      <Image
        src={image}
        alt="picture of event"
        className="relative left-[10%] w-[80%] aspect-[10/7] top-[1vh] md:top-[2.5vh]"
      />
      <p className="relative text-[1.5vw] text-white text-wrap text-center font-type-junge top-[1.5vh] md:top-[4vh]">
        {description}
      </p>
      <p className="absolute text-[1.5vw] md:text-[1vw] text-white text-center font-type-junge bottom-[5%] left-[50%] -mx-[1.5vw] md:-mx-[1vw]">
        {year}
      </p>
    </div>
  );
};

export default SlideCard;
