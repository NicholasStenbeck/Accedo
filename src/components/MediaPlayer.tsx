import { useRef, useState } from "react";
import { Video, Playlist, Controls } from "./mediaPlayer/components";
import {
  StyledMainContentContainer,
  StyledMediaPlayerContainer,
} from "./mediaPlayer/Mediaplayer.styles";
import { getDefaultMedia } from "utils/getDefaultMedia.utils";

const defaultMedia = getDefaultMedia();

export const MediaPlayer = () => {
  const [playlist, setPlaylist] = useState(defaultMedia);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    const video = videoRef.current;
    if (video) {
      if (!isPlaying) {
        video.play();
      } else {
        video.pause();
      }
    }
  };

  const changeMedia = (index: number) => {
    console.log("changeMedia -> index:", index);
    setIsPlaying(false);
    setCurrentMediaIndex(
      index < 0 ? playlist.length - 1 : index % playlist.length
    );
  };

  const currentMedia = playlist[currentMediaIndex];

  return (
    <StyledMediaPlayerContainer>
      <StyledMainContentContainer>
        <Video
          ref={videoRef}
          src={currentMedia.sources[0]}
          setIsPlaying={setIsPlaying}
        />
        <Controls
          videoRef={videoRef}
          togglePlay={togglePlay}
          isPlaying={isPlaying}
          setMediaIndex={changeMedia}
          currentMediaIndex={currentMediaIndex}
        />
      </StyledMainContentContainer>
      <Playlist
        setCurrentMediaIndex={changeMedia}
        currentMediaIndex={currentMediaIndex}
        playlist={playlist}
        setPlaylist={setPlaylist}
      />
    </StyledMediaPlayerContainer>
  );
};
