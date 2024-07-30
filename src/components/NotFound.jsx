import Link from "next/link";

const NotFound = () => {
  return (
    <div className="bg-witl-purple-400 min-h-screen font-marcellus-sc flex flex-col justify-center items-center">
      <div className="text-witl-white-100 pb-1 text-center text-3xl md:text-5xl">
        <p>Page Not Found</p>
      </div>
      <div className="flex flex-col bg-witl-purple-300 rounded-2xl w-9/12 md:w-6/12 py-6">
        <p className="text-witl-purple-100 font-libre-caslon-text text-center text-7xl md:text-9xl ">
          404
        </p>
      </div>
      <p className="text-witl-white-100 mb-8 flex flex-col items-center justify-center pt-5 pb-7 text-2xl md:text-4xl pb-16">
        Adjective Adjective Adjective
      </p>

      <div className="flex flex-col items-center justify-center rounded-2xl">
        <Link
          href="/"
          className="bg-witl-white-100 text-witl-purple-300 rounded-2xl	text-2xl font-medium px-10 py-2 md:px-24 py-4"
        >
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
