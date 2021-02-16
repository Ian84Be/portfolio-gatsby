import React from 'react';
import styled from 'styled-components';
import { buttonStyles, formRange, noSelect } from '../../styles/_mixins';

import PentaIcon from '../../assets/icons/Penta';
import TriadIcon from '../../assets/icons/Triad';

const Container = styled.section`
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ModeSwitch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.5rem;
`;

const ModeIcon = styled.span`
  polygon {
    fill: ${({ active }) => (active ? 'white' : 'var(--dark-bg)')};
    stroke: var(--dark-text);
  }
`;

const ButtonRow = styled.div`
  align-items: center;
  justify-content: space-around;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  width: 100%;
  padding: 0 1rem;
`;

const ControlButton = styled.button`
  ${buttonStyles}
  max-width: 40%;
  margin: 0.5rem 0.5rem;

  @media (max-width: 475px) {
    max-width: 100%;
    margin: 0.5rem 0;
  }

  // .playing {
  //   background: black;
  //   box-shadow: 0 0;
  //   transform: translate(4px, 4px);
  // }
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
  position: props.mode ? 'translateX(13px)' : 'translateX(-13px)',
}))`
  background: white;
  border: 3px solid var(--dark-text);
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  transform: ${({ position }) => position};
  transition: transform 0.3s ease-in;
  height: 20px;
  width: 20px;
`;

export default function Controls({ mode, setMode, handleAutoPlay, stopAll }) {
  return (
    <Container>
      <ModeSwitch>
        <ModeIcon
          active={mode === 0}
          onMouseDown={() => setMode(0)}
          onTouchStart={() => setMode(0)}
          onTouchEnd={(e) => e.preventDefault()}
        >
          <PentaIcon />
        </ModeIcon>

        <ToggleTrack
          mode={mode}
          onClick={mode ? () => setMode(0) : () => setMode(1)}
        />
        <ToggleThumb
          mode={mode}
          onClick={mode ? () => setMode(0) : () => setMode(1)}
        />

        <ModeIcon
          active={mode === 1}
          onMouseDown={() => setMode(1)}
          onTouchStart={() => setMode(1)}
          onTouchEnd={(e) => e.preventDefault()}
          style={{ marginTop: '8px' }}
        >
          <TriadIcon />
        </ModeIcon>
      </ModeSwitch>

      <ButtonRow>
        <ControlButton
          className="play"
          onMouseDown={handleAutoPlay}
          onTouchStart={handleAutoPlay}
          onTouchEnd={(e) => e.preventDefault()}
        >
          AutoPlay
        </ControlButton>

        <ControlButton
          className="stop"
          onMouseDown={stopAll}
          onTouchStart={stopAll}
          onTouchEnd={(e) => e.preventDefault()}
        >
          Stop
        </ControlButton>
      </ButtonRow>
    </Container>
  );
}
