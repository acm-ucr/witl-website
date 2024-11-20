"use client";

import Header from "@/components/home/Header.jsx";
import Blurb from "@/components/home/Blurb.jsx";
import Sponsors from "@/components/home/Sponsors";
import Slides from "@/components/home/Slides";

if (typeof window !== "undefined" && !sessionStorage.getItem("reloaded")) {
  sessionStorage.setItem("reloaded", "true");
  window.location.reload();
}

const Home = () => {
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
