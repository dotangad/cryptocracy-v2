import { InertiaLink } from "@inertiajs/inertia-react";
import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Layout from "../Components/Layout";
import { MobileOnly, SidebarTop } from "../Components/Layout/helpers";

const Global = createGlobalStyle`
  .Sidebar {
    overflow: hidden;
  }
`;

const TeamDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  > div {
    width: 48%;
    background: #292929;
    margin: 20px 0;
    color: #fff;
    padding: 15px;
    height: 100px;
    font-size: 1.3rem;
  }

  @media screen and (max-width: 1300px) {
    justify-content: center;
    > div {
      width: 100%;
      max-width: 500px;
    }
  }
`;

const Spacing = styled.div`
  margin: 50px 0;

  p {
    font-size: 1.5rem;
  }
`;

const FAQContainer = styled.div`
  min-height: 0;
  height: 100%;
  width: 100%;
  font-size: 1.5rem;
  overflow: auto;
  padding: 20px;

  > div {
    margin: 50px 0;
  }

  > div:first-child {
    margin-top: 0;
  }

  > div:last-child {
    margin-bottom: 0;
  }
`;

const FAQs: React.FC = () => {
  return (
    <FAQContainer>
      <div>
        <div>
          <strong>What is a cryptic hunt?</strong>
        </div>
        <div>
          A cryptic hunt is an online multiplayer event that involves players having to
          follow a trail of leads and clues to get to a question's answer. These answers
          aren't directly available on the internet, and each question generally takes a
          great deal of patience and mental prowess to solve.
        </div>
      </div>

      <div>
        <div>
          <strong>Do I need any previous experience?</strong>
        </div>
        <div>
          Not at all! We’re a beginner friendly competition and our team is here to assist
          you through the way!
        </div>
      </div>

      <div>
        <div>
          <strong>Who can participate in this event?</strong>
        </div>
        <div>
          This event is open to everyone! Students, to working professionals, rookie to
          veteran cryptic hunt solvers, everyone is welcome.{" "}
          <InertiaLink href="/register">Click here</InertiaLink> to register.
        </div>
      </div>
    </FAQContainer>
  );
};

const Sponsors = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  & img {
    height: 100px;
    width: auto;
    margin-right: 30px;
    margin-top: 20px;
  }
`;

const About: React.FC = () => {
  const members = [
    { name: "Angad Singh", role: "Systems" },
    { name: "Hitarth Khurana", role: "Gameplay" },
    { name: "Inesh Tickoo", role: "Design" },
    { name: "Ishir Bharadwaj", role: "Gameplay" },
    { name: "Shashwat Mundra", role: "Gameplay" },
    { name: "Somesh Kar", role: "Systems" },
    { name: "Tarush Sonakya", role: "Gameplay" }
  ];

  const sponsors = [
    {
      link: "https://slingshotahead.com/",
      img: "/img/slingshot-white.png",
      alt: "Slingshot"
    },
    {
      link: "https://www.interviewcake.com",
      img: "/img/interviewcake.svg",
      alt: "InterviewCake",
      css: {
        height: "60px"
      }
    }
  ];

  return (
    <>
      <Global />
      <Layout
        title="About"
        SidebarHeader={
          <SidebarTop>
            <h1>FAQs</h1>
          </SidebarTop>
        }
        Sidebar={<FAQs />}
        gridStyles={{
          gridTemplateColumns: "75px 20vw calc(48vw - 75px) 32vw"
        }}
      >
        <div>
          <Spacing style={{ marginTop: "0" }}>
            <h2>Sponsors</h2>
            <Sponsors>
              {sponsors.map(({ link, img, alt, css }) => (
                <a href={link} target="_blank">
                  <img src={img} alt={alt} style={css} />
                </a>
              ))}
            </Sponsors>
          </Spacing>

          <Spacing>
            <p>
              Cryptocracy is an online 48-hour multiplayer cryptic hunt, where thousands
              of people compete for amazing prizes.
            </p>
          </Spacing>

          <Spacing>
            <h1>Prizes</h1>
            <p>
              This year’s prizes are TBA. Last year, we boasted ₹120,000 worth of prizes.
            </p>
          </Spacing>

          <Spacing>
            <h1>Who are we?</h1>
            <p>We’re a team of seven high schoolers from New Delhi, India.</p>

            <TeamDiv>
              {members.map(({ name, role }, i) => (
                <div key={i}>
                  <div>
                    <strong>{name}</strong>
                  </div>
                  <div>{role}</div>
                </div>
              ))}
            </TeamDiv>
          </Spacing>

          <MobileOnly>
            <Spacing>
              <h1 style={{ padding: "0 20px" }}>FAQs</h1>
              <FAQs />
            </Spacing>
          </MobileOnly>
        </div>
      </Layout>
    </>
  );
};

export default About;
