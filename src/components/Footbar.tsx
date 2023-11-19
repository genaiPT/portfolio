import React from "react";
import text from "@/data/text.json";
import { language } from "@/utils/language";

type Props = {};

const Footbar = (props: Props) => {
  return (
    <div className="h-24 w-full bg-slate-800 flex items-center justify-center">
      <p className="text-slate-200">{text[language].footer}</p>
    </div>
  );
};

export default Footbar;
