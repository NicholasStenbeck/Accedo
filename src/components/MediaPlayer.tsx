import { useRef, useState } from "react";
import { Video, Playlist, Controls } from "./mediaPlayer/components";
import {
  StyledMainContentContainer,
  StyledMediaPlayerContainer,
} from "./mediaPlayer/Mediaplayer.styles";
import { getDefaultMedia } from "utils/getDefaultMedia.utils";
import { Media } from "utils/types";

const defaultMedia = getDefaultMedia();

export const MediaPlayer = () => {
  const [playlist, setPlaylist] = useState(defaultMedia);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    if (!isPlaying) {
      video.play();
    } else {
      video.pause();
    }
  };

  const changeMedia = (index: number) => {
    setIsPlaying(false);
    setCurrentMediaIndex(
      index < 0 ? playlist.length - 1 : index % playlist.length
    );
  };

  const removeMedia = (media: Media) => {
    const index = playlist.findIndex((m) => m === media);

    // If removing media earlier than current media, we need to
    // adjust the current media index to not change the current media playing
    if (currentMediaIndex && currentMediaIndex >= index) {
      changeMedia(currentMediaIndex - 1);
    }

    setPlaylist([...playlist.slice(0, index), ...playlist.slice(index + 1)]);
  };

  const seek = (seconds: number) => {
    const video = videoRef.current;
    if (!video) {
      return;
    }
    video.currentTime += seconds;
  };

  const currentMedia = playlist[currentMediaIndex];

  return (
    <StyledMediaPlayerContainer>
      <StyledMainContentContainer>
        {currentMedia && (
          <>
            <Video
              ref={videoRef}
              src={currentMedia.sources[0]}
              setIsPlaying={setIsPlaying}
            />
            <Controls
              onTogglePlay={togglePlay}
              isPlaying={isPlaying}
              onSeekForward={() => seek(10)}
              onSeekBackward={() => seek(-10)}
              onNext={() => changeMedia(currentMediaIndex + 1)}
              onPrevious={() => changeMedia(currentMediaIndex - 1)}
            />
          </>
        )}
      </StyledMainContentContainer>
      <Playlist
        selectedIndex={currentMediaIndex}
        playlist={playlist}
        onAddMedia={(media) => setPlaylist([...playlist, media])}
        onRemoveMedia={removeMedia}
        onSelectMedia={(media) =>
          changeMedia(playlist.findIndex((m) => m === media))
        }
      />
    </StyledMediaPlayerContainer>
  );
};
