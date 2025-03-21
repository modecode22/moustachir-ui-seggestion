"use client";
import { useEffect } from "react";

const HeaderWithStyles = () => {
  useEffect(() => {
    const header = document.getElementById("main-header");

    if (!header) return;

    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 60) {
        header.classList.add("shadow-sm", "bg-neutral-50");
        header.classList.remove("bg-transparent");
      } else {
        header.classList.remove("shadow-sm", "bg-neutral-50");
        header.classList.add("bg-transparent");
      }
    };

    // Initial check
    handleScroll();

    // Add event listener
    window.addEventListener("scroll", handleScroll);

    // Return cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // This component doesn't render anything
  return null;
};

export default HeaderWithStyles;
