import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';
import '@fontsource/montserrat';

import { LightContext } from '../context/LightContext';
import { GradientContainer } from '../styles/Container';
import { breakpoints } from '../styles/_breakpoints';

const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1.5rem 0 1.5rem;
  max-width: 700px;
  @media (max-width: ${breakpoints.xtraSmall}) {
    max-width: 180px;
  }
  header {
    font-size: 2rem;
  }
`;

const AboutSection = styled.section`
  margin: 1rem 0;
`;

const LastParagraph = styled.p`
  align-items: center;
  color: var(--light-text);
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  text-align: center;
  @media (max-width: ${breakpoints.small}) {
    padding: 0 1rem;
  }
`;

const Emoji = styled.span`
  float: left;
  font-size: 6rem;
  margin-right: 0.5rem;
  margin-bottom: 0rem;
  @media (max-width: ${breakpoints.small}) {
    display: none;
  }
`;

const Pizza = styled(Emoji)`
  cursor: none;
  &:hover {
    transform: rotate(360deg);
    transition: transform 0.5s ease-out;
  }
`;

const IndexPage = () => {
  const { lightMode } = useContext(LightContext);
  return (
    <GradientContainer lightMode={lightMode}>
      <SEO
        title="Ian Belknap - Software Engineer"
        description="Portfolio 2021"
      />
      <Body>
        <AboutSection>
          <header>Hello World!</header>
          <p>
            I am a software engineer with a passion for web development, simple
            UI, and all things JavaScript.
          </p>
          <AboutText />
        </AboutSection>
      </Body>
    </GradientContainer>
  );
};

const AboutText = () => {
  const [pizza, setPizza] = useState(false);
  const [spider, setSpider] = useState(false);
  return (
    <>
      {spider ? (
        <Emoji
          role="img"
          aria-label="spider"
          onMouseOut={() => setSpider(false)}
        >
          🕷
        </Emoji>
      ) : (
        <Emoji
          role="img"
          aria-label="spider web"
          onMouseOver={() => setSpider(true)}
        >
          🕸
        </Emoji>
      )}

      <p>
        I have been interested in internet technologies for a long time. One of
        my earliest memories is that of my father and my brother talking about
        the World Wide Web, they had just bought a computer and set it up in our
        basement, their faces glowing with an excitement I could not understand.
        The world wide web. I imagined a giant spider, but what does it have to
        do with that beige colored television?
      </p>

      {pizza ? (
        <Pizza role="img" aria-label="pizza" onMouseOut={() => setPizza(false)}>
          🍕
        </Pizza>
      ) : (
        <Emoji
          role="img"
          aria-label="laptop"
          onMouseOver={() => setPizza(true)}
        >
          💻
        </Emoji>
      )}

      <p>
        My journey in tech started by enrolling as a full-time student at Lambda
        School. It was an intense and rewarding experience to say the least. I
        was also hired by Lambda School to be a Team Lead. My role was to
        manage, and mentor a group of 8 students. I led daily standup meetings,
        pair programming, code review, and debugging sessions focused on HTML,
        CSS, JavaScript, React, Redux, Express, Jest, REST APIs, SQL, and
        Python. After a long year of study I applied for my first software
        engineering job, and was quickly hired by Gulf Winds Credit Union. I am
        grateful to Lambda School for delivering exactly what they promised, and
        to Gulf Winds for giving me the opportunity to start a new career.
      </p>

      <LastParagraph>
        When I am not staring into screens: <br />I like to play guitar, cook
        food, and read books, sometimes in that exact order.
      </LastParagraph>
    </>
  );
};

export default IndexPage;
