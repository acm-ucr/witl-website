const EventDescription = ({ event }) => {
  return (
    <div className="grid grid-cols-4 w-3/4 2xl:w-9/12 pb-4 rounded-2xl">
      <div className="bg-witl-purple-100 col-span-3 rounded-l-2xl pl-4 py-4 flex flex-col">
        <p className="text-6xl font-bold pb-2">{event.summary}</p>
        <p className="text-xl font-bold pb-1">{event.location}</p>
        <p className="text-md w-fit">
          {event.description ? event.description : "No event description"}
        </p>
      </div>
      <div className="flex items-stretch">
        <div className="pl-4 flex items-center bg-witl-purple-300 rounded-r-2xl flex-grow relative">
          <div className="text-witl-white-200 text-7xl grid grid-cols-3">
            <p className="col-span-3">
              {event.start.getMonth() + 1 < 10
                ? "0" + (event.start.getMonth() + 1)
                : event.start.getMonth() + 1}
            </p>
            <div className="ml-16 border-t-[4px] w-[5vw] -rotate-[60deg] border-witl-white-200 translate-x-1 -translate-y-3"></div>
            <p>{event.start.getDate()}</p>
          </div>
          <p className="absolute -rotate-90 -right-8 text-3xl 2xl:text-4xl text-witl-purple-500">
            {event.start.toLocaleTimeString().split(":")[0]}:
            {event.start.toLocaleTimeString().split(":")[1]}&nbsp;
            {event.start.toLocaleTimeString().split(":")[2].split(" ")[1]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventDescription;
