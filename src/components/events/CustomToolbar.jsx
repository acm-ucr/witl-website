import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

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
  return (
    <>
      <div className="flex justify-center md:justify-between mb-[1%] leading-none font-junge">
        <div className="flex items-center">
          <FaArrowLeftLong
            onClick={() => {
              event.onNavigate("PREV");
            }}
            className="hover:cursor-pointer hover:scale-125 duration-300 transition ease-in-ou mr-[4%] text-4xl md:text-7xl"
          />
          <div className="flex justify-center">
            <p className="text-5xl md:text-8xl mr-4">
              {monthNames[event.date.getMonth()]}
            </p>
            <p className="show md:hidden text-5xl">
              {event.date.getFullYear()}
            </p>
          </div>
          <FaArrowRightLong
            onClick={() => {
              event.onNavigate("NEXT");
            }}
            className="hover:cursor-pointer hover:scale-125 duration-300 transition ease-in-out ml-[4%] text-4xl md:text-7xl"
          />
        </div>
        <div className=" items-center text-8xl md:flex hidden">
          <p>{event.date.getFullYear()}</p>
        </div>
      </div>
    </>
  );
};

export default CustomToolbar;
