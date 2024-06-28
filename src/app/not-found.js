import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      404 Page Not Found
      <div class="flex flex-col items-center justify-center ">
        <Link
          href="/"
          className="bg-witl-white-100 text-witl-purple-300 text-xl px-24 py-4 rounded-xl"
        >
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
