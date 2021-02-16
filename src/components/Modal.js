import React, { useContext } from 'react';
import styled from 'styled-components';

import GuitBox from './GuitBox';
import WoolyWilly from './WoolyWilly';

import { LightContext } from '../context/LightContext';
import { buttonStyles } from '../styles/_mixins';

const Overlay = styled.section`
  align-items: center;
  background: rgba(0, 0, 0, 0.808);
  display: ${({ hidden }) => (hidden ? 'none' : 'flex')};
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;

  &.hidden {
    display: none;
  }
`;

const Body = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 999;
  overflow: scroll;
`;

const CloseButton = styled.div`
  ${buttonStyles}
  font-weight: bold;
  text-align: center;
  padding: 10px;
  margin: 10px;
  opacity: 0.5;
  z-index: 123456;

  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;

export default function Modal({ showToy, setShowToy }) {
  const { lightMode } = useContext(LightContext);

  return (
    <Overlay hidden={showToy === ''}>
      <Body>
        {showToy === 'GuitBox' && <GuitBox lightMode={lightMode} />}
        {showToy === 'WoolyWilly' && <WoolyWilly lightMode={lightMode} />}
        <CloseButton onClick={() => setShowToy('')}>Close</CloseButton>
      </Body>
    </Overlay>
  );
}
