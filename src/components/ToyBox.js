import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { LightContext } from '../context/LightContext';
import { Container } from '../styles/Container';
import Modal from './Modal';

const Body = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  max-width: 800px;
`;

const ButtonRow = styled.section`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;

  @media (max-width: 475px) {
    flex-direction: column;
  }

  a {
    color: white;
    text-decoration: none;
  }
`;

const Emoji = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--dark-text);
  cursor: pointer;
  font-size: 6rem;
  margin: 2rem 2rem;
  transition: all 0.3s ease;

  &:after {
    font-size: 1rem;
    margin-top: 1rem;
  }

  &:hover {
    color: var(--alert-orange);
  }

  &.guitar:after {
    content: 'GuitBox.js';
  }
  &.man:after {
    content: 'WoolyWilly.js';
  }
  &.UP:after {
    content: 'WordGame.js';
  }
`;

export default function ToyBox() {
  const { lightMode } = useContext(LightContext);
  const [showToy, setShowToy] = useState('');

  return (
    <Container lightMode={lightMode} style={{ background: 'none' }}>
      <Modal showToy={showToy} setShowToy={setShowToy} />
      <Body>
        <ButtonRow>
          <Emoji
            aria-label="guitar"
            className="guitar"
            role="button"
            onClick={() => setShowToy('GuitBox')}
          >
            🎸
          </Emoji>
          <Emoji
            aria-label="man: bald"
            className="man bald"
            role="button"
            onClick={() => setShowToy('WoolyWilly')}
          >
            👨‍🦲
          </Emoji>
          <a href="https://wordup.netlify.com/">
            <Emoji aria-label="UP! button" className="UP button" role="button">
              🆙
            </Emoji>
          </a>
        </ButtonRow>
      </Body>
    </Container>
  );
}
