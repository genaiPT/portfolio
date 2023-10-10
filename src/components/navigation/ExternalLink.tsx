import { NameLink2 } from "@/app/page";
import Link from "next/link";
import React from "react";

type Props = {
  exLinks: NameLink2[];
};

const ExternalLink = ({ exLinks }: Props) => {
  return (
    <div
      className={` flex-1 px-6 py-6 flex  gap-8 justify-evenly items-center ${
        exLinks.length <= 2 ? "flex-row md:flex-col" : "flex-col"
      }`}
    >
      {exLinks.map(({ icon, name, link }) => (
        <Link href={link} key={name} target="_blank">
          <img src={icon} className="inline-block  w-14 "></img>
        </Link>
      ))}
    </div>
  );
};

export default ExternalLink;
