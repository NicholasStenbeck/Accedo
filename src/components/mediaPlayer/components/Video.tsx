import React from "react";
import { Media } from "utils/types";

type VideoProps = {
  media: Media;
} & Omit<React.VideoHTMLAttributes<HTMLVideoElement>, "src">;

export const Video = React.forwardRef<HTMLVideoElement, VideoProps>(
  ({ media, ...rest }: VideoProps, ref) => {
    return (
      <video ref={ref} autoPlay controls width={1280} {...rest}>
        {media.sources.map((src) => (
          <source key={src} src={src} />
        ))}
        Sorry, your browser doesn't support embedded videos.
      </video>
    );
  }
);
