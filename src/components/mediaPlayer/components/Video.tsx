import React from "react";

type VideoProps = {
  src: string;
  setIsPlaying: (isPlaying: boolean) => void;
};

export const Video = React.forwardRef<HTMLVideoElement, VideoProps>(
  ({ src, setIsPlaying }: VideoProps, ref) => {
    return (
      <video
        ref={ref}
        key={src}
        autoPlay
        controls
        width={1280}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      >
        <source
          key={`video-source-${src}`}
          src={src}
          type={`video/${src.split(".").pop()}`}
        />
        Sorry, your browser doesn't support embedded videos.
      </video>
    );
  }
);
