"use client";
import Link from "next/link";

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
        className="inline-block  w-24 mr-4 "
      />
      <p className="title hidden  sm:flex text-slate-800 font-medium">Ricardo Linhares</p>
    </Link>
  );
};

export default Logo;
function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}
