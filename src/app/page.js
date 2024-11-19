"use client";

import { useEffect } from "react";
import Header from "@/components/home/Header.jsx";
import Blurb from "@/components/home/Blurb.jsx";
import Sponsors from "@/components/home/Sponsors";
import Slides from "@/components/home/Slides";

const Home = () => {
  useEffect(() => {
    if (!sessionStorage.getItem("reloaded")) {
      const handleGlobalErrors = (message, source, lineno, colno, error) => {
        console.error("Error detected:", message, source, lineno, colno, error);

        sessionStorage.setItem("reloaded", "true");
        setTimeout(() => {
          window.location.reload();
        }, 500);
        return true;
      };

      window.onerror = handleGlobalErrors;

      return () => {
        window.onerror = null;
      };
    }
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
