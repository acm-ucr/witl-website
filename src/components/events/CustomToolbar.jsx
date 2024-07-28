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
    <div className="flex justify-between text-8xl mb-[1%] font-junge">
      <div className="flex items-center">
        <FaArrowLeftLong
          onClick={() => {
            event.onNavigate("PREV");
          }}
          className="hover:cursor-pointer hover:scale-125 duration-300 tranistion ease-in-out mr-[12%]"
        />
        <p className="">{monthNames[event.date.getMonth()]}</p>
        <FaArrowRightLong
          onClick={() => {
            event.onNavigate("NEXT");
          }}
          className="hover:cursor-pointer hover:scale-125 duration-300 tranistion ease-in-out ml-[12%] text-8xl"
        />
      </div>
      <div className="flex items-center">
        <p className="">{event.date.getFullYear()}</p>
      </div>
    </div>
  );
};

export default CustomToolbar;
