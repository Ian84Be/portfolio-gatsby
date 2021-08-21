import React, { useContext } from 'react';
import styled from 'styled-components';

import { LightContext } from '../context/LightContext';
import { Container } from '../styles/Container';
import { breakpoints } from '../styles/_breakpoints';
import LightModeSwitch from '../components/LightModeToggle';

import githubLight from '../assets/images/GitHub-Mark-Light-64px.png';
import lambdaLogo from '../assets/images/lambda-new.png';
import linkedInLogo from '../assets/images/LI-In-Bug.png';
import profilePic from '../assets/images/Ian_Portrait_circle_300.png';

const Body = styled.div`
  align-items: center;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  max-width: 800px;
  padding: 4rem;
  @media (max-width: ${breakpoints.small}) {
    flex-direction: column-reverse;
  }
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
  @media (max-width: ${breakpoints.small}) {
    align-items: center;
    margin: 0;
  }
`;

const IconRow = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  img {
    cursor: pointer;
    margin: 8px;
    transition: transform 0.3s ease-in;
    height: 30px;
    width: 30px;
    &:hover {
      transform: scale(1.3) rotate(5deg);
    }
  }
  img.lambda {
    height: 30px;
    width: 28px;
  }
  img.linkedin {
    height: 30px;
    width: 35px;
  }
`;

const RightSide = styled.div`
  margin-left: 16px;
  padding: 16px;
  @media (max-width: ${breakpoints.small}) {
    margin: 0;
  }
`;

const ProfilePic = styled.img`
  border-radius: 50%;
  transition: all 0.5s ease;
  opacity: ${(props) => (props.lightMode ? 1 : 0.77)};
  height: 150px;
  width: 150px;
  &:hover {
    transform: scale(1.1) rotate(-5deg);
    opacity: 1;
  }
`;

export default function Header() {
  const { lightMode, toggleLightMode } = useContext(LightContext);
  return (
    <Container lightMode={lightMode}>
      <Body>
        <LeftSide role="banner">
          <h1>Ian Belknap</h1>
          <h2>Software Engineer</h2>

          <IconRow>
            <a href="https://lambdaschool.com/">
              <img
                alt="Lambda School"
                className="lambda"
                role="button"
                src={lambdaLogo}
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
            <a href="https://www.linkedin.com/in/ian-belknap/">
              <img
                alt="LinkedIn"
                className="linkedin"
                role="button"
                src={linkedInLogo}
              />
            </a>
            <LightModeSwitch />
          </IconRow>
        </LeftSide>

        <RightSide>
          <ProfilePic
            alt="Ian Belknap"
            lightMode={lightMode}
            src={profilePic}
            onClick={() => toggleLightMode()}
          />
        </RightSide>
      </Body>
    </Container>
  );
}
