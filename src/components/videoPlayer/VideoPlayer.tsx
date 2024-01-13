import React, { Suspense } from "react";
import ReactPlayer from "react-player/lazy";
import Loading from "./loading";

type Props = {
  videoSrc: string;
  imageSrc: string;
};

const VideoPlayer = ({ videoSrc, imageSrc }: Props) => {
  return (
    <div className="flex w-[400px]">
      <ReactPlayer url={videoSrc} fallback={<Loading imageSrc={imageSrc} />} />
    </div>
  );
};

export default VideoPlayer;
