import React, { Suspense } from "react";
import ReactPlayer from "react-player/lazy";
import Loading from "./loading";

type Props = {
  videoSrc: string;
  imageSrc: string;
};

const VideoPlayer = ({ videoSrc, imageSrc }: Props) => {
  return (
    <div className="flex flex-1 items-center justify-center w-[380px] h-[214px] pb-4 sm:pb-0 sm:w-[400px]  ">
     

      <ReactPlayer url={videoSrc} fallback={<Loading imageSrc={imageSrc} 
      />}
      
      
      width={"100%"}
      
      height={"100%"}
      />
  
    </div>
  );
};

export default VideoPlayer;
