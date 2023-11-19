import React from "react";
import text from "@/data/text.json";
import { language } from "@/utils/language";

type Props = {
  open: boolean;
  handleModal: () => void;
};
function ModalContacts({ handleModal, open }: Props) {
  if (!open) return null;

  return (
    <div onClick={handleModal} className="flex flex-col z-50 fixed bg-slate-950 bg-opacity-50 w-full h-full ">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className=" fixed flex self-center top-1/2 -translate-y-8  flex-col  bg-slate-200 shadow-2xl rounded-tl-xl rounded-br-xl"
      >
        <div className="flex-col md:flex-row  flex-1 flex justify-center items-center">
          <div className="flex flex-2"></div>
          <div className=" py-2 flex flex-col w-full h-full justify-start items-start self-start  flex-1">
            <div className="flex w-full bg-slate-200 justify-end">
              <button className="px-3 pt-0" onClick={handleModal}>
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
            <div className="mb-6 mt-2">
              <h2 className="px-5 font-bold  text-md">{text[language].c.feedback}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalContacts;
