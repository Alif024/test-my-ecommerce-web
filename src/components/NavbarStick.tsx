"use client";
import { useEffect } from "react";

export default function NavbarStick({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const handleScroll = () => {
      const navHeader = document.querySelector(".navbar");
      if (navHeader) {
        navHeader.classList.toggle("navbar-toggle", window.scrollY > 0);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {children}
    </>
  );
}
