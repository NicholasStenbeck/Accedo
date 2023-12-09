import React from "react";
import { Media } from "utils/types";

type VideoProps = {
  media: Media;
  onPlay: () => void;
  onPause: () => void;
};

export const Video = React.forwardRef<HTMLVideoElement, VideoProps>(
  ({ media, onPause, onPlay }: VideoProps, ref) => {
    return (
      <video
        ref={ref}
        key={JSON.stringify(media)}
        autoPlay
        controls
        width={1280}
        onPause={() => onPause()}
        onPlay={() => onPlay()}
      >
        {media.sources.map((src) => (
          <source key={src} src={src} />
        ))}
        Sorry, your browser doesn't support embedded videos.
      </video>
    );
  }
);
