import React, { useContext } from 'react';
import styled from 'styled-components';
import { LightContext } from '../context/LightContext';

const ModeSwitch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4px;
  margin-top: 0;
`;

const ToggleTrack = styled.div`
  background: var(--dark-bg);
  border: 3px solid var(--dark-text);
  border-radius: 24px;
  cursor: pointer;
  height: 10px;
  width: 42px;
`;

const ToggleThumb = styled.div.attrs((props) => ({
  bgFill: props.lightMode ? 'white' : 'var(--dark-bg)',
  position: props.lightMode ? 'translateX(-49px)' : 'translateX(-24px)',
}))`
  background: ${({ bgFill }) => bgFill};
  border: 3px solid var(--dark-text);
  border-radius: 50%;
  cursor: pointer;
  transform: ${({ position }) => position};
  transition: transform 0.3s ease-in;
  height: 20px;
  width: 20px;
  &:hover {
    transform: ${({ position }) => position + 'scale(1.3)'};
  }
`;

export default function LightModeSwitch() {
  const { lightMode, toggleLightMode } = useContext(LightContext);

  return (
    <ModeSwitch>
      <ToggleTrack lightMode={lightMode} onClick={toggleLightMode} />
      <ToggleThumb lightMode={lightMode} onClick={toggleLightMode} />
    </ModeSwitch>
  );
}
