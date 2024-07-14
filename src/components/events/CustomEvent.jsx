const CustomEvent = ({ event }) => {
  return (
    <div className="bg-witl-purple-400 flex justify-center items-center font-marcellus-sc">
      <p className="text-2xl">{event.summary}</p>
    </div>
  );
};

export default CustomEvent;
