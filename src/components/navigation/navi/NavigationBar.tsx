"use client";
import Link from "next/link";
import Logo from "./Logo";
import { useEffect, useState } from "react";

type props = {
  link1: string;
  link2: string;
  link3: string;
  link1To: string;
  link2To: string;
  link3To: string;
};

const NavigationBar = ({ link1, link2, link3, link1To, link2To, link3To }: props) => {
  const [dropActive, setDropActive] = useState(false);

  const changeBackground = () => {
    const linksElements = document.querySelectorAll(".links");
    const svgElements = document.querySelectorAll(".svg");
    if (window.scrollY >= 80) {
      document.querySelector(".navBar")?.classList.remove("bg-slate-400", "bg-opacity-25");
      document.querySelector(".navBar")?.classList.add("bg-slate-800");
      //Links
      linksElements.forEach((e) => {
        e.classList.remove("text-black");
        e.classList.add("text-slate-200");
      });
      //svg
      svgElements.forEach((e) => {
        e.classList.remove("text-black");
        e.classList.add("text-slate-200");
      });
    } else {
      document.querySelector(".navBar")?.classList.add("bg-slate-400", "bg-opacity-25");
      document.querySelector(".navBar")?.classList.remove("bg-slate-800");
      //Links
      linksElements.forEach((e) => {
        e.classList.add("text-black");
        e.classList.remove("text-slate-200");
      });
      //svg
      svgElements.forEach((e) => {
        e.classList.add("text-black");
        e.classList.remove("text-slate-200");
      });
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <div className="navBar z-10 sticky top-0 py-1 flex flex-col items-between bg-slate-400 bg-opacity-25   px-8 mx-auto text-slate-200">
      <nav className=" flex items-center justify-between  ">
        <Logo />
        <div className="hidden md:flex items-center space-x-9">
          <Link className="links text-black" href={link1To}>
            {link1}
          </Link>
          <Link className="links text-black" href={link2To}>
            {link2}
          </Link>
          <Link className="links text-black" href={link3To}>
            {link3}
          </Link>
        </div>
        <button
          onClick={() => {
            document.querySelector(".mobile-menu")?.classList.toggle("hidden");
            //document.querySelector(".mobile-menu")?.classList.toggle("flex");

            setDropActive((prev) => !prev);
          }}
          className="md:hidden flex items-center"
        >
          {dropActive ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="svg w-8 h-8 text-black"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="svg w-8 h-8 text-black"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </nav>

      <div
        className={`mobile-menu overflow-hidden  transition-transform ease-in-out duration-300  ${
          dropActive ? "translate-x-0 pb-6 h-auto " : "translate-x-7 h-0 p-0 m-0 "
        } md:hidden flex  flex-col items-end gap-6 px-9  text-sm`}
      >
        <Link className="links text-black" href={link1To}>
          {link1}
        </Link>
        <Link className="links text-black" href={link2To}>
          {link2}
        </Link>
        <Link className="links text-black" href={link3To}>
          {link3}
        </Link>
      </div>
    </div>
  );
};

export default NavigationBar;
