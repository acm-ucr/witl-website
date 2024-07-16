import SlideCard from "@/components/home/SlideCard";
import UCLA from "@/public/home/events/UCLA.webp";

const Slides = () => {
  return (
    <div className="h-screen">
      <div className="bg-witl-purple-300 opacity-[72%] w-[22%] aspect-[7/9] rounded-3xl absolute bottom-[500%]"></div>
      <div className="bg-witl-purple-300 opacity-[72%] w-[22%] aspect-[7/9] rounded-3xl"></div>
      <div className="bg-witl-purple-300 opacity-[72%] w-[22%] aspect-[7/9] rounded-3xl"></div>
      <div className="bg-witl-purple-300 opacity-[72%] w-[22%] aspect-[7/9] rounded-3xl"></div>
      <SlideCard image={UCLA} description="UCLA School of Law" year="2024" />
    </div>
  );
};

export default Slides;
