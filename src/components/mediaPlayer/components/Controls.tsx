import { StyledControlsContainer } from "../Mediaplayer.styles";
import {
  PlayIcon,
  PauseIcon,
  PreviousIcon,
  BackwardIcon,
  ForwardIcon,
  NextIcon,
} from "assets/icons";

type ControlsProps = {
  videoRef: React.RefObject<HTMLVideoElement>;
  togglePlay: () => void;
  isPlaying: boolean;
  setMediaIndex: (index: number) => void;
  currentMediaIndex: number;
};

export const Controls = ({
  videoRef,
  togglePlay,
  isPlaying,
  setMediaIndex,
  currentMediaIndex,
}: ControlsProps) => {
  const video = videoRef.current;

  const next = () => {
    setMediaIndex(currentMediaIndex + 1);
  };

  const previous = () => {
    setMediaIndex(currentMediaIndex - 1);
  };

  const seekForward = () => {
    if (video) {
      video.currentTime += 10;
    }
  };

  const seekBackward = () => {
    if (video) {
      video.currentTime -= 10;
    }
  };

  return (
    <StyledControlsContainer>
      <div onClick={previous}>
        <PreviousIcon />
      </div>
      <div onClick={seekBackward}>
        <BackwardIcon />
      </div>
      <div onClick={togglePlay}>{isPlaying ? <PauseIcon /> : <PlayIcon />}</div>
      <div onClick={seekForward}>
        <ForwardIcon />
      </div>
      <div onClick={next}>
        <NextIcon />
      </div>
    </StyledControlsContainer>
  );
};
