import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../styles/_breakpoints';

import Audio from './Audio';
import Keys from './Keys';
import Controls from './Controls';

const GuitBoxContainer = styled.div`
  align-items: center;
  background: rgba(238, 114, 0, 1);
  border-radius: 8px;
  color: var(--dark-text);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;

  /* @media (max-width: ${breakpoints.small}) {
    width: 100%;
  } */

  &.lightMode {
    @include lightMode-altBG();
  }
`;

export default function GuitBox({ lightMode }) {
  const qRef = React.createRef();
  const wRef = React.createRef();
  const eRef = React.createRef();
  const rRef = React.createRef();
  const tRef = React.createRef();
  const yRef = React.createRef();
  const uRef = React.createRef();
  const iRef = React.createRef();
  const oRef = React.createRef();
  const refs = { qRef, wRef, eRef, rRef, tRef, yRef, uRef, iRef, oRef };

  const guitarKeyCodes = [
    { k: 81, ref: qRef },
    { k: 87, ref: wRef },
    { k: 69, ref: eRef },
    { k: 82, ref: rRef },
    { k: 84, ref: tRef },
    { k: 89, ref: yRef },
    { k: 85, ref: uRef },
    { k: 73, ref: iRef },
    { k: 79, ref: oRef },
  ];

  const [mode, setMode] = useState(0);

  useEffect(() => {
    window.addEventListener('keydown', playSound);
    return () => window.removeEventListener('keydown', playSound);
  });

  return (
    <GuitBoxContainer lightMode={lightMode}>
      <Audio mode={mode} refs={refs} />
      <Keys playSound={playSound} />
      <Controls
        mode={mode}
        setMode={setMode}
        handleAutoPlay={handleAutoPlay}
        handleChange={handleChange}
        stopAll={stopAll}
      />
    </GuitBoxContainer>
  );

  function stopAll() {
    const highestTimeoutId = setTimeout(() => null);
    for (let i = 0; i < highestTimeoutId; i++) clearTimeout(i);
  }

  function handleAutoPlay() {
    let newPhrase = makePhrase();
    newPhrase.forEach((note) => playSound(note));
  }

  function handleChange(e) {
    let toggle = parseFloat(e.target.value);
    setMode(toggle);
  }

  function makePhrase() {
    const guitarNums = [81, 87, 69, 82, 84, 89, 85, 73, 79];
    const thisPhrase = [];
    const min = 0,
      max = 9,
      time = 165;
    for (let i = 0; i < 64; i++) {
      let thisNote = 0;
      let rand = Math.floor(Math.random() * (max - min + 1) + min);
      thisNote = guitarNums[rand];
      thisNote = thisNote ? thisNote : 0; //0 for a silence
      thisPhrase.push({ keyCode: thisNote, delay: i * time });
    }
    return thisPhrase;
  }

  function playSound({ keyCode, delay = 0 }) {
    const guitarKey = guitarKeyCodes.find((key) => key.k === keyCode);
    if (!guitarKey) return;
    const audio = guitarKey.ref.current;
    audio.currentTime = 0;
    if (delay) {
      return setTimeout(() => audio.play(), delay);
    } else audio.play();
  }
}
