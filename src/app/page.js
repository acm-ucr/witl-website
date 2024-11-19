"use client";

import { useEffect } from "react";
import Header from "@/components/home/Header.jsx";
import Blurb from "@/components/home/Blurb.jsx";
import Sponsors from "@/components/home/Sponsors";
import Slides from "@/components/home/Slides";

const Home = () => {
  useEffect(() => {
    const handleGlobalErrors = (event) => {
      const { message, error } = event;

      const errorConditions = [
        "Cannot destructure property 'parallelRouterKey' of 'e' as it is null",
        "Minified React error #423",
      ];

      if (
        errorConditions.some((condition) => message?.includes(condition)) ||
        errorConditions.some((condition) => error?.message?.includes(condition))
      ) {
        console.error("Critical error detected, reloading the page:", message);
        window.location.reload();
      }
    };

    window.addEventListener("error", handleGlobalErrors);
    window.addEventListener("unhandledrejection", (event) =>
      handleGlobalErrors({
        message: event.reason?.message,
        error: event.reason,
      })
    );

    return () => {
      window.removeEventListener("error", handleGlobalErrors);
      window.removeEventListener("unhandledrejection", handleGlobalErrors);
    };
  }, []);

  return (
    <div suppressHydrationWarning>
      <Header />
      <Blurb />
      <Sponsors />
      <Slides />
    </div>
  );
};

export default Home;
