import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { LightContext } from '../context/LightContext';
import { Container } from '../styles/Container';

import promoteableImg from '../assets/images/promoteable.png';
import wordupImg from '../assets/images/wordup.png';
import lobbytrackerImg from '../assets/images/lobbytracker.png';

const Body = styled.div`
  align-items: flex-start;
  color: var(--dark-text);
  display: flex;
  flex-direction: column;
  margin: 1rem 1.5rem 1rem 1.5rem;
  width: 700px;
`;

const ProjectRow = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  /* justify-content: center; */
  width: 100%;

  a {
    color: white;
    text-decoration: none;
    &:hover {
      color: var(--alert-orange);
    }
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 3px;
  }

  p {
    align-self: flex-start;
    margin: 1rem 0 1rem 0;
  }
`;

const Header = styled.header`
  font-size: 2rem;
`;
const ProjectHeader = styled.header`
  align-self: flex-start;
  border-bottom: 1px solid var(--dark-text);
  font-size: 1.5rem;
  margin: 1rem 0 0 0;
  width: 100%;
`;

export default function Projects() {
  const { lightMode } = useContext(LightContext);
  return (
    <Container lightMode={lightMode} style={{ background: 'none' }}>
      <Body>
        <Header>Projects</Header>
        <PromoteableProject />
        <LobbyTrackerProject />
        <WordUpProject />
      </Body>
    </Container>
  );
}

const PromoteableProject = () => {
  return (
    <ProjectRow>
      <ProjectHeader>Promoteable</ProjectHeader>
      <p>2021 - React, Semantic UI, Q2 SDK</p>
      <img alt="Promoteable Screenshot" src={promoteableImg} />
      <p>
        Created as part of a team project for CU Build. This is the member
        facing portion of a marketing promotion system. The Q2 SDK uses Python
        to call the core banking system on the back end which returns JSON to
        generate React components on the front end.
      </p>
      <p>
        Created as part of a team project for CU Build. This is the member
        facing portion of a marketing promotion system. The Q2 SDK uses Python
        to call the core banking system on the back end which returns JSON to
        generate React components on the front end.
      </p>
    </ProjectRow>
  );
};

const LobbyTrackerProject = () => {
  return (
    <ProjectRow>
      <ProjectHeader>LobbyTracker</ProjectHeader>
      <p>2020 - React, Semantic UI, Node/Express, Postgres</p>
      <img alt="LobbyTracker Screenshot" src={lobbytrackerImg} />
      <p>
        Many service-oriented businesses want to understand the customer
        experience of their brick and mortar locations. There are many metrics
        that can be collected to do this. We track things like the amount of
        time someone spends waiting for service, how many visits are abandoned,
        and details about each visit.
      </p>
      <p>
        When a vendor contract for “Lobby Tracking” software came up for
        renewal, I wanted to see if we could create an in-house alternative.
        Leveraging open source technologies allowed us to build and deploy
        quickly at minimal expense. The business appreciated the ability to
        forgo a contract renewal for expensive software, and it was well
        received by our branch staff who appreciated the cleaner look and
        improved user experience.
      </p>
    </ProjectRow>
  );
};

const WordUpProject = () => {
  return (
    <ProjectRow>
      <ProjectHeader>WordUp</ProjectHeader>
      <p>2019 - React, Redux, Sass</p>
      <img alt="WordUp Screenshot" src={wordupImg} />
      <p>
        Built after learning the basics of React and Redux at Lambda School. It
        is a clone of UpWords, a version of Scrabble where the player can stack
        tiles horizontally and vertically to build words. I originally used
        React Class components, but after learning about React Hooks I
        challenged myself to refactor everything into functional components.
      </p>
      <p>
        The biggest challenge was programming the scoring system: since tiles
        can be played on top of existing tiles, this required crawling the grid
        to find words in every direction of each newly placed tile, making sure
        those tiles were played in one row only, checking words against the
        dictionary, and finally awarding points based on the amount of tiles
        stacked at each letter of the newly created word.
      </p>
      <a href="https://wordup.netlify.app/">Live Demo</a>
    </ProjectRow>
  );
};
