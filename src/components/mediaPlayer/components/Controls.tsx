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
  onTogglePlay: () => void;
  isPlaying: boolean;
  onSeekForward: () => void;
  onSeekBackward: () => void;
  onNext: () => void;
  onPrevious: () => void;
};

export const Controls = ({
  onTogglePlay,
  isPlaying,
  onPrevious,
  onNext,
  onSeekBackward,
  onSeekForward,
}: ControlsProps) => {
  return (
    <StyledControlsContainer>
      <div onClick={onPrevious}>
        <PreviousIcon />
      </div>
      <div onClick={onSeekBackward}>
        <BackwardIcon />
      </div>
      <div onClick={onTogglePlay}>
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </div>
      <div onClick={onSeekForward}>
        <ForwardIcon />
      </div>
      <div onClick={onNext}>
        <NextIcon />
      </div>
    </StyledControlsContainer>
  );
};
