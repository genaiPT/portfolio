import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useState } from "react";

type Props = {
  open: boolean;
  close: () => void;
  imageSrc: string;
  title: string;
  subtitle: string;
  linkApp: string;
};

function Modal({ open, close, title, imageSrc, subtitle, linkApp }: Props) {
  if (!open) return null;

  return (
    <div onClick={close} className="flex flex-col z-50 fixed bg-slate-950 bg-opacity-50 w-full h-full l ">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className=" fixed self-center mt-2 md:mt-0 md:top-1/3 flex flex-col  bg-slate-200 shadow-2xl rounded-xl max-w-lg md:max-w-6xl "
      >
        <div className="flex-col md:flex-row  flex-1 flex justify-center items-center  rounded-xl  ">
          <div className=" w-full bg-slate-200 justify-end flex md:hidden mt-2 md:mt-0 ">
            <button className="px-3 pt-0" onClick={close}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              s
            </button>
          </div>
          <div className="flex flex-2  ">
            <img src={imageSrc} alt={title} className="inline-block w-72 md:w-80 gap-2 rounded-tl-xl" />
          </div>
          <div className="  py-0 flex flex-col w-full h-full justify-start items-start self-start  flex-1">
            <div className=" w-full bg-slate-200 justify-end hidden md:flex">
              <button className="px-3 pt-0" onClick={close}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="">
              <h2 className="px-5 font-bold pb-3 text-lg">{title}</h2>
              <p className="px-5 pb-3" dangerouslySetInnerHTML={{ __html: subtitle }}></p>
              <Link
                className="px-5  underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                href={linkApp}
                target="_blank"
              >
                Ver no GooglePlay
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
