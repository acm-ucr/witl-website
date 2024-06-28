import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      404 Page Not Found
      <br /> <br />
      <Link
        href="/"
        className="bg-witl-purple-100 text-witl-purple-300 text-xl px-24 py-4 rounded-xl"
      >
        Back To Home
      </Link>
    </div>
  );
};

export default NotFound;
