/* eslint-disable new-cap */
import "./globals.css";
// import { Inter } from "next/font/google";
import { Junge } from "next/font/google";
import Navigation from "@/components/Navigation.jsx";

// const inter = Inter({ subsets: ["latin"] });
const junge = Junge({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Womxn In The Law",
  description:
    "Fostering a community of students interested in pursuing a career in law and cultivating the skills necessary to succeed in getting there.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-witl-purple-300 ${junge.className}`}>
        <Navigation>{children}</Navigation>
      </body>
    </html>
  );
}
