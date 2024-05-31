/* eslint-disable new-cap */
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Womxn In The Law",
  description:
    "Fostering a community of students interested in pursuing a career in law and cultivating the skills necessary to succeed in getting there.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
