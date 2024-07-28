import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { useMediaQuery } from "react-responsive";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const CustomToolbar = (event) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)"});
  return (
    <>
  {isMobile
      ? (<div className="flex justify-center mb-[1%] font-junge">
        <div className="flex items-center">
          <FaArrowLeftLong
            onClick={() => {
              event.onNavigate("PREV");
            }}
            className="hover:cursor-pointer hover:scale-125 duration-300 transition ease-in-out mr-[4%] text-4xl"
          />
          <div className="flex justify-center text-5xl">
            <p className="mr-4">{monthNames[event.date.getMonth()]}</p>
            <p>{event.date.getFullYear()}</p>
          </div>
          
          <FaArrowRightLong
            onClick={() => {
              event.onNavigate("NEXT");
            }}
            className="hover:cursor-pointer hover:scale-125 duration-300 transition ease-in-out ml-[4%] text-4xl"
          />
        </div>
        <div className="flex items-center">
          
        </div>
      </div>)
    : (<div className="flex justify-between text-7xl xl:text-8xl mb-[1%] font-junge">
      <div className="flex items-center">
        <FaArrowLeftLong
          onClick={() => {
            event.onNavigate("PREV");
          }}
          className="hover:cursor-pointer hover:scale-125 duration-300 transition ease-in-ou mr-[4%] text-7xl"
        />
        <p>{monthNames[event.date.getMonth()]}</p>
        <FaArrowRightLong
          onClick={() => {
            event.onNavigate("NEXT");
          }}
          className="hover:cursor-pointer hover:scale-125 duration-300 transition ease-in-out ml-[4%] text-7xl"
        />
      </div>
      <div className="flex items-center">
        <p>{event.date.getFullYear()}</p>
      </div>
    </div>)
    }
    </>
    
  );
};

export default CustomToolbar;
