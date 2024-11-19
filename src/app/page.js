"use client";

import { useEffect } from "react";
import Header from "@/components/home/Header.jsx";
import Blurb from "@/components/home/Blurb.jsx";
import Sponsors from "@/components/home/Sponsors";
import Slides from "@/components/home/Slides";

const Home = () => {
  useEffect(() => {
    if (!sessionStorage.getItem("reloaded")) {
      const reloadTimeout = setTimeout(() => {
        sessionStorage.setItem("reloaded", "true");
        window.location.reload();
      }, 100);

      return () => {
        clearTimeout(reloadTimeout);
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
