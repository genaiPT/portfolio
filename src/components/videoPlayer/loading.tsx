import React from "react";

type Props = {
  imageSrc: string;
};

const Loading = ({ imageSrc }: Props) => {
  return (
    <div className="flex  items-center justify-center self-center  h-full">
      {/* <img src={imageSrc} className="inline-block w-full gap-2 rounded-tl-xl" /> */}
      <p className="text-lg font-semibold italic text-center">loading...</p>
    </div>
  );
};

export default Loading;
