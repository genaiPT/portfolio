"use client";
import Link from "next/link";
import { useEffect } from "react";

const Logo = () => {
  const changeLetterColor = () => {
    if (window.scrollY >= 80) {
      document.querySelector(".title")?.classList.remove("text-slate-800");
      document.querySelector(".title")?.classList.add("text-slate-200");
    } else {
      document.querySelector(".title")?.classList.add("text-slate-800");
      document.querySelector(".title")?.classList.remove("text-slate-200");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeLetterColor);
  }, []);

  return (
    <Link
      className="flex flex-row items-center font-bold text-xl tracking-wide hover:tracking-widest transform-all ease-in-out duration-700"
      href="/"
    >
      <img
        src="logo.png"
        alt="Ricardo Linhares Apps & Psicologia"
        title="Ricardo Linhares"
        className="inline-block  w-8 my-1 mr-4 "
      />
      <p className="title hidden  sm:flex text-slate-800 font-medium">Ricardo Linhares</p>
    </Link>
  );
};

export default Logo;
