const EventDescription = ({ event }) => {
  return (
    <div className="grid grid-cols-4 w-11/12 md:w-3/4 2xl:w-9/12 pb-8 drop-shadow-xl">
      <div className="bg-witl-purple-100 col-span-3 rounded-l-2xl pl-4 py-4 flex flex-col">
        <p className="text-2xl md:text-6xl font-bold pb-2">{event.summary}</p>
        <p className="text-md md:text-xl font-bold pb-1">
          {event.location ? event.location : "No location specified"}
        </p>
        <p className="text-sm md:text-md w-fit">
          {event.description ? event.description : "No event description"}
        </p>
      </div>
      <div className="flex items-stretch col-span-1">
        <div className="pl-2 md:pl-4 flex items-center bg-witl-purple-300 rounded-r-2xl flex-grow relative">
          <div className="text-witl-white-200 text-3xl md:text-7xl grid grid-cols-3 pt-1">
            <p className="col-span-3 -translate-y-2 md:translate-y-4 translate-x-3 md:translate-x-0">
              {event.start.getMonth() + 1 < 10
                ? "0" + (event.start.getMonth() + 1)
                : event.start.getMonth() + 1}
            </p>
            <div className="ml-7 md:ml-[4.25rem] border-t-[2px] md:border-t-[4px] w-[7vw] md:w-[5vw] -rotate-[20deg] md:-rotate-[60deg] border-witl-white-200 -translate-y-1 -translate-x-2 md:translate-x-2"></div>
            <p className="-translate-x-4 translate-y-2 md:translate-x-2 md:-translate-y-0">
              {event.start.getDate()}
            </p>
          </div>
          <div className="absolute -rotate-90 -right-4 md:-right-8 text-md md:text-3xl 2xl:text-4xl text-witl-purple-500">
            <p>
              {event.start.toLocaleTimeString().split(":")[0]}:
              {event.start.toLocaleTimeString().split(":")[1]}&nbsp;
              {event.start.toLocaleTimeString().split(":")[2].split(" ")[1]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDescription;
