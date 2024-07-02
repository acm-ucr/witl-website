import Link from "next/link";

const NotFound = () => {
  return (
    <div className="bg-witl-purple-400 min-h-screen font-marcellus-sc">
      <div className="text-witl-white-100 font-libre-caslon-text3 text-3xl pb-1 text-center">
        <p>Page Not Found</p>
      </div>
      <div className="flex flex-col bg-witl-purple-300 w-min px-52 py-11
      rounded-2xl text-witl-purple-100 text-7xl font-libre-caslon-text items-center justify-center">
        <p>404</p>
      </div>
      <div className="flex flex-col items-center justify-center rounded-2xl">
        <Link
          href="/"
          className="bg-witl-white-100 text-witl-purple-300 text-2xl font-medium px-24 py-4 rounded-2xl	"
        >
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
