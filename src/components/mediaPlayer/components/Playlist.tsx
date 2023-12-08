import { useState } from "react";
import { Media } from "utils/types";
import {
  StyledPlaylistContainer,
  StyledPlaylistItem,
} from "../Mediaplayer.styles";
import { getMedia } from "utils/getMedia.utils";

type PlaylistProps = {
  setCurrentMediaIndex: (index: number) => void;
  currentMediaIndex: number;
  playlist: Media[];
  setPlaylist: (Playlist: Media[]) => void;
};

export const Playlist = ({
  setCurrentMediaIndex,
  currentMediaIndex,
  playlist,
  setPlaylist,
}: PlaylistProps) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <StyledPlaylistContainer>
      <input
        type="text"
        placeholder="Add video url"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            const newMedia = getMedia(inputValue);
            if (newMedia) {
              setPlaylist([...playlist, newMedia]);
            }
            setInputValue("");
          }
        }}
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      {playlist.map((media, index) => (
        <StyledPlaylistItem
          key={`media-list-item-${media.title}`}
          isSelected={currentMediaIndex === index}
        >
          <div
            className="media-list-item-title"
            onClick={() => setCurrentMediaIndex(index)}
          >
            {media.title}
          </div>
          <button
            onClick={() => {
              console.log(currentMediaIndex, index);
              if (currentMediaIndex >= index) {
                setCurrentMediaIndex(currentMediaIndex - 1);
              }
              setPlaylist(playlist.filter((_, i) => i !== index));
            }}
          >
            X
          </button>
        </StyledPlaylistItem>
      ))}
    </StyledPlaylistContainer>
  );
};
