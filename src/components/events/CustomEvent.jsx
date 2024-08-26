const CustomEvent = ({ event }) => {
  return (
    <div className="bg-witl-purple-200 grid grid-rows text-center font-marcellus-sc rounded-none md:rounded-lg">
      <p className="text-[1.75vw] md:text-[1vw] leading-none md:leading-normal pb-[.3vh]">
        {event.summary}
      </p>
    </div>
  );
};

export default CustomEvent;
