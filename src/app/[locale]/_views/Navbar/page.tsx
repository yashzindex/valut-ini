"use client";

import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import FixedHeader from "../FixedHeader/page";

export default function Navbar() {
  const [showFixedHeader, setShowFixedHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowFixedHeader(true);
      } else {
        setShowFixedHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`transition-all duration-500 ${
          showFixedHeader ? "opacity-0" : "opacity-100"
        }`}
      >
        <Header />
      </div>
      <div
        className={`transition-all duration-500 fixed z-50 w-full top-0 shadow-navbar-shadow max-md:hidden ${
          showFixedHeader ? "opacity-100" : "opacity-0"
        }`}
      >
        <FixedHeader />
      </div>
    </>
  );
}
