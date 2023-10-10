import { NameLink } from "@/app/page";
import React from "react";

type Props = {
  imageSrc: string;
  title: string;
  subtitle: string;
  iconArray: NameLink[];
  openModal?: () => void;
} & React.HTMLProps<HTMLDivElement>;

function Card({ imageSrc, title, subtitle, iconArray, openModal, ...rest }: Props) {
  return (
    <div className=" min-h-300px max-w-xs mx-auto rounded  shadow-lg bg-white" {...rest}>
      <img
        onClick={openModal}
        src={imageSrc}
        alt={title}
        className={` ${!!openModal ? "cursor-pointer" : "cursor-default"} w-full object-cover`}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{subtitle}</p>
      </div>
      <div className="px-4 py-4 flex flex-row justify-evenly">
        {iconArray.map((item, index) => (
          <img key={index} src={item.icon} alt={item.name} title={item.name} className="inline-block w-10  " />
        ))}
      </div>
    </div>
  );
}

export default Card;
