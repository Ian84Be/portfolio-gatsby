import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../styles/_breakpoints';

import githubLight from '../assets/images/GitHub-Mark-Light-64px.png';
import linkedInLogo from '../assets/images/LI-In-Bug.png';

const Container = styled.div`
  width: 100%;
`;

const Body = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  width: 100%;

  @media (max-width: ${breakpoints.small}) {
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
`;

const FooterContent = styled.section`
  align-items: center;
  display: flex;
  span {
    color: var(--dark-text);
  }
`;

const Emoji = styled.span`
  font-size: 1rem;
  margin: 0 0.5rem;
`;

const IconRow = styled.div`
  margin: 0 0.5rem;
  img {
    cursor: pointer;
    margin: 0 0.25rem;
    width: 1.5rem;
    &:hover {
      transform: scale(1.3) rotate(5deg);
    }
  }

  img.linkedin {
    width: 1.8rem;
  }
`;

export default function Footer() {
  return (
    <Container>
      <Body>
        <FooterContent>
          <span>2021</span>
          <Emoji role="img" aria-label="smiling face with sunglasses">
            😎
          </Emoji>{' '}
          <span>Ian Belknap</span>
          <IconRow>
            <a href="https://www.linkedin.com/in/ian-belknap/">
              <img
                alt="LinkedIn"
                className="linkedin"
                role="button"
                src={linkedInLogo}
              />
            </a>
            <a href="https://github.com/Ian84Be">
              <img
                alt="GitHub"
                className="github"
                role="button"
                src={githubLight}
              />
            </a>
            {/* TODO: make email icon SVG */}
          </IconRow>
        </FooterContent>
      </Body>
    </Container>
  );
}
