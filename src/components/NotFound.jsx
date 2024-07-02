import Link from "next/link";

const NotFound = () => {
  return (
    <div className="bg-witl-purple-400 min-h-screen font-marcellus-sc">
      404 Page Not Found
      <p
        className="text-witl-white-100 text-4xl mb-8 flex flex-col items-center justify-center"
        style={{ paddingBottom: "60px" }}
      >
        Adjective Adjective Adjective
      </p>
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
