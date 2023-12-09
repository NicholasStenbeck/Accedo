import { useState } from "react";
import { Media } from "utils/types";
import {
  StyledPlaylistContainer,
  StyledPlaylistItem,
} from "../Mediaplayer.styles";
import { getMedia } from "utils/getMedia.utils";

type PlaylistProps = {
  selectedIndex: number;
  playlist: Media[];
  onAddMedia: (media: Media) => void;
  onRemoveMedia: (media: Media) => void;
  onSelectMedia: (media: Media) => void;
};

export const Playlist = ({
  selectedIndex,
  playlist,
  onAddMedia,
  onRemoveMedia,
  onSelectMedia,
}: PlaylistProps) => {
  const [inputValue, setInputValue] = useState("");

  const addMedia = () => {
    const newMedia = getMedia(inputValue);
    if (newMedia) {
      onAddMedia(newMedia);
    }
    setInputValue("");
  };

  return (
    <StyledPlaylistContainer>
      <div>
        <input
          type="text"
          placeholder="Add video url"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addMedia();
            }
          }}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button onClick={addMedia}>Add Media</button>
      </div>
      {playlist.map((media, index) => (
        <StyledPlaylistItem
          key={`media-list-item-${media.title}`}
          isSelected={selectedIndex === index}
        >
          <div
            className="media-list-item-title"
            onClick={() => onSelectMedia(media)}
          >
            {media.title}
          </div>
          <button onClick={() => onRemoveMedia(media)}>X</button>
        </StyledPlaylistItem>
      ))}
    </StyledPlaylistContainer>
  );
};
