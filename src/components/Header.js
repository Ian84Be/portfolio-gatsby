import React, { useContext } from 'react';
import { LightContext } from '../context/LightContext';
import Container from '../styles/Container';
import styled from 'styled-components';

import githubLight from '../assets/images/GitHub-Mark-Light-64px.png';
import lambdaLogo from '../assets/images/lambda-new.png';
import linkedInLogo from '../assets/images/LI-In-Bug.png';
import profilePic from '../assets/images/Ian_Portrait_circle.png';

const Body = styled.div`
  align-items: center;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  max-width: 800px;
  padding: 4rem;

  @media (max-width: 580px) {
    flex-direction: column-reverse;
  }
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;

  @media (max-width: 580px) {
    align-items: center;
    margin: 0;
  }
`;

const IconRow = styled.div`
  margin-top: 0.5rem;
  img {
    cursor: pointer;
    margin: 8px;
    width: 30px;
    transition: all 0.5s ease;
    &:hover {
      transform: scale(1.1) rotate(5deg);
    }
  }
  img.lambda {
    width: 25px;
  }
  img.linkedin {
    width: 35px;
  }
`;

const RightSide = styled.div`
  margin-left: 16px;
  padding: 16px;

  @media (max-width: 580px) {
    margin: 0;
  }
`;

const ProfilePic = styled.img`
  border-radius: 50%;
  transition: all 0.5s ease;
  opacity: ${(props) => (props.lightMode ? 1 : 0.77)};
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
