import { AiOutlinePlus } from "react-icons/ai";

const Modal = ({ event, setEvent }) => {
  return (
    <div className="fixed left-[14vw] md:left-[25vw] top-[50vh] w-[75vw] md:w-[50vw] z-10 drop-shadow-lg">
      <div className={`flex justify-between items-center bg-witl-purple-200`}>
        <p className={` m-0 py-2 md:py-3 px-3 md:px-4 text-lg md:text-2xl`}>
          {event.start.getMonth() + 1 < 10
            ? event.start.getMonth() + 1
            : event.start.getMonth() + 1}
          /{event.start.getDate()} -&nbsp;
          {event.summary}
        </p>
        <AiOutlinePlus
          onClick={() => setEvent(null)}
          className="rotate-45 p-0 hover:scale-110 duration-300 hover:cursor-pointer text-3xl m-3"
        />
      </div>
      <div className="p-3 bg-witl-purple-100 text-sm md:text-lg">
        <p className="m-0 pl-2 ">{event.location ? event.location : ""}</p>
        {event.allDay ? (
          <p className="p-2">{event.start.toLocaleDateString()}</p>
        ) : (
          <p className="m-0 pl-2">
            {event.start.toLocaleTimeString().split(":")[0]}:
            {event.start.toLocaleTimeString().split(":")[1]}&nbsp;
            {event.start.toLocaleTimeString().split(":")[2].split(" ")[1]}
            &nbsp;-&nbsp;
            {event.end.toLocaleTimeString().split(":")[0]}:
            {event.end.toLocaleTimeString().split(":")[1]}&nbsp;
            {event.end.toLocaleTimeString().split(":")[2].split(" ")[1]}
          </p>
        )}
        <div className="text-sm md:text-lg pl-2">
          {event.description ? event.description : ""}
        </div>
      </div>
    </div>
  );
};

export default Modal;
