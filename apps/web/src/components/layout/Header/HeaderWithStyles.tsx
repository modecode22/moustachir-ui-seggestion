"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const HeaderWithStyles = () => {
  const path = usePathname();
  useEffect(() => {
    const header = document.getElementById("main-header");

    if (!header) return;

    const handleScroll = () => {
      const offset = window.scrollY;
      if (!path.startsWith("/consultants/")) {
        header.classList.add("text-primary-500");
        header.classList.remove("text-neutral-50");
        if (offset > 60) {
          header.classList.add("shadow-sm", "bg-neutral-50");
          header.classList.remove("bg-transparent");
        } else {
          header.classList.remove("shadow-sm", "bg-neutral-50");
          header.classList.add("bg-transparent");
        }
      } else {
        header.classList.add("text-neutral-50");
        header.classList.remove("text-primary-500");
        if (offset > 60) {
          header.classList.add("shadow-sm", "bg-neutral-50","text-primary-500");
          header.classList.remove("bg-transparent");
        } else {
          header.classList.remove("shadow-sm", "bg-neutral-50", "text-primary-500");
          header.classList.add("bg-transparent");
        }
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
  }, [path]);

  // This component doesn't render anything
  return null;
};

export default HeaderWithStyles;
