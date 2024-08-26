const CustomEvent = ({ event }) => {
  return (
    <div className="bg-witl-purple-200 grid grid-rows text-center font-marcellus-sc rounded-lg">
      <p className="text-[1.75vw] md:text-[1vw] leading-none md:leading-normal pt-[.3vh]">
        {!event.allDay
          ? new Date(event.start).toLocaleTimeString(navigator.language, {
              hour: "2-digit",
              minute: "2-digit",
            })
          : "ALL DAY"}
        &nbsp;
      </p>
      <p className="text-[1.75vw] md:text-[1vw] leading-none md:leading-normal pb-[.3vh]">
        {event.summary}
      </p>
    </div>
  );
};

export default CustomEvent;
