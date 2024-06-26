/* eslint-disable new-cap */
import "./globals.css";
import { Inter } from "next/font/google";
import { Junge } from "next/font/google";
import { marcellusSC } from "next/font/google";
import { libreCaslonText } from "next/font/google";
import { Marcellus } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-inter",
});

const junge = Junge({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-junge",
});

const marcellussc = marcellusSC({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-marcellus-sc",
});

const libreCaslonTextFont = libreCaslonText({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-libre-caslon-text",
});

const marcellus = Marcellus({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-libre-caslon-text",
});

export const metadata = {
  title: "Womxn In The Law",
  description:
    "Fostering a community of students interested in pursuing a career in law and cultivating the skills necessary to succeed in getting there.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${junge.className} ${marcellussc.variable} ${libreCaslonTextFont.variable} ${marcellus.variable} ${inter.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
