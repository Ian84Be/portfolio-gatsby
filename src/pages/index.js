import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { LightContext } from '../context/LightContext';
import { GradientContainer } from '../styles/Container';
import { noSelect } from '../styles/mixins';

const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1.5rem 0 1.5rem;
  max-width: 700px;
  @media (max-width: 260px) {
    max-width: 180px;
  }
  header {
    font-size: 2rem;
  }
`;

const AboutSection = styled.section`
  margin: 1rem 0;
`;

const AboutHeader = styled.p`
  font-size: 1.5rem;
  line-height: 1.7rem;
  letter-spacing: 0.03rem;
`;

const AboutParagraph = styled.p`
  font-size: 1.3rem;
  line-height: 1.6rem;
  letter-spacing: 0.03rem;
`;

const LastParagraph = styled(AboutParagraph)`
  align-items: center;
  color: var(--light-text);
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  text-align: center;
  @media (max-width: 580px) {
    padding: 0 4rem;
  }
`;

const Emoji = styled.span`
  float: left;
  font-size: 4rem;
  margin-right: 0.5rem;
  margin-bottom: 0rem;
  @media (max-width: 580px) {
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

const YinYang = styled(Emoji)`
  ${noSelect}
  cursor: pointer;
  margin-top: 2rem;
  @media (max-width: 580px) {
    display: flex;
  }
  &:hover {
    transform: rotate(90deg);
    transition: transform 0.5s ease-out;
  }
`;

const IndexPage = () => {
  const [pizza, setPizza] = useState(false);
  const { lightMode, toggleLightMode } = useContext(LightContext);

  return (
    <GradientContainer lightMode={lightMode}>
      <Body>
        <AboutSection>
          <header>Hello World!</header>
          <AboutHeader>
            I am a software engineer with a passion for web development, simple
            UI, and all things JavaScript.
          </AboutHeader>

          {pizza ? (
            <Pizza
              role="img"
              aria-label="pizza"
              onMouseOut={() => setPizza(false)}
            >
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

          <AboutParagraph>
            I have been interested in internet technologies for a long time. One
            of my earliest memories is that of my father and my brother talking
            about the World Wide Web, they had just bought a computer and set it
            up in our basement, their faces glowing with an excitement I could
            not understand. The world wide web. I imagined a giant spider, but
            what does it have to do with that beige colored television?
          </AboutParagraph>

          <AboutParagraph>
            My journey in tech started by enrolling as a full-time student at
            Lambda School. It was an intense and rewarding experience to say the
            least. I was also hired by Lambda School to be a Team Lead. My role
            was to manage, and mentor a group of new students through their
            first 16 weeks of learning. After a long year of study I applied for
            my first software engineering job, and was quickly hired by Gulf
            Winds Credit Union. I am grateful to Lambda School for delivering
            exactly what they promised, and to Gulf Winds for giving me the
            opportunity to start a new career.
          </AboutParagraph>

          <AboutParagraph>
            Over the past year I have learned an esoteric programming language
            (PowerOn), and used it to automate processes which saved over 300
            hours of manual labor. I also worked with SQL and SSRS to create
            custom reporting for departmental stakeholders. When a vendor
            contract for “Lobby Tracking” software was due to expire, I was
            named tech lead for an internal development project and tasked to
            build a replacement within 6 months. Working alongside 1 other
            engineer, we were able to deliver all features as promised: on
            deadline. Our work allowed the credit union to cancel a contract
            which was costing them $40k annually.
          </AboutParagraph>

          <LastParagraph>
            When I am not staring into screens I like to play guitar, cook food,
            read books, and go outside, sometimes in that exact order.
            <YinYang
              aria-label="yin yang"
              role="button"
              onClick={toggleLightMode}
            >
              ☯
            </YinYang>
          </LastParagraph>
        </AboutSection>
      </Body>
    </GradientContainer>
  );
};

export default IndexPage;
