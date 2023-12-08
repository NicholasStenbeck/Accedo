import styled from "@emotion/styled";

export const StyledMediaPlayerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 16px 0;
`;

export const StyledControlsContainer = styled.div`
  min-width: 400px;
  display: flex;
  gap: 16px;
  padding: 16px;

  & svg {
    fill: #fff;
    stroke: #fff;
    cursor: pointer;
  }
`;

export const StyledMainContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledPlaylistContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
`;

export const StyledPlaylistItem = styled.div<{ isSelected: boolean }>`
  display: flex;
  gap: 8px;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;

  ${({ isSelected }) =>
    isSelected &&
    `
        font-weight: bold;
    `}
`;
