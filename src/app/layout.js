/* eslint-disable new-cap */
import "./globals.css";
import Navigation from "@/components/Navigation";
import { Junge } from "next/font/google";
import { Marcellus } from "next/font/google";
// eslint-disable-next-line camelcase
import { Marcellus_SC } from "next/font/google";
// eslint-disable-next-line camelcase
import { Libre_Caslon_Text } from "next/font/google";

// eslint-disable-next-line no-unused-vars
const junge = Junge({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-junge",
});

// eslint-disable-next-line no-unused-vars
const marcellussc = Marcellus_SC({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-marcellus-sc",
});

// eslint-disable-next-line no-unused-vars
const libreCaslonTextFont = Libre_Caslon_Text({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-libre-caslon-text",
});

// eslint-disable-next-line no-unused-vars
const marcellus = Marcellus({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-marcellus",
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
        className={`${junge.className} ${marcellussc.variable} ${libreCaslonTextFont.variable} ${marcellus.variable}`}
      >
        <Navigation>{children}</Navigation>
      </body>
    </html>
  );
}
