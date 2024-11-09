"use client";
import Header from "@/components/home/Header.jsx";
import Blurb from "@/components/home/Blurb.jsx";
import Sponsors from "@/components/home/Sponsors";
import Slides from "@/components/home/Slides";
import { useState, useEffect } from "react";

const Home = () => {
  const [hasHydrationError, setHasHydrationError] = useState(false);

  useEffect(() => {
    const handleHydrationError = () => {
      setHasHydrationError(true);
    };

    window.addEventListener("error", handleHydrationError);

    return () => {
      window.removeEventListener("error", handleHydrationError);
    };
  }, []);

  useEffect(() => {
    if (hasHydrationError) {
      window.location.reload();
    }
  }, [hasHydrationError]);

  return (
    <div>
      <Header />
      <Blurb />
      <Sponsors />
      <Slides />
    </div>
  );
};
export default Home;
