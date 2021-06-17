import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Layout, { SidebarTop } from "../Components/Layout";
import { PrimaryButton, SecondaryButton, ButtonContainer } from "../Components/Button";
import { ChevronRight, Discord } from "../Components/Icons";

const Global = createGlobalStyle`
  .Content > div {
    min-height: 0;
  }

  .Content {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .Content p {
    font-size: 2rem;
    margin: 20px 0;
  }

  @media screen and (max-width: 1300px) {
    .Content p {
      font-size: 1.6rem;
      margin: 20px 0;
    }
  }
`;

const IndexButtonContainer = styled(ButtonContainer)`
  margin-top: 20px;
  flex-wrap: wrap;

  & > a:nth-child(2) {
    margin-left: 20px;
  }

  @media screen and (max-width: 530px) {
    & > a {
      margin: 10px 0 !important;
    }
  }
`;

const NotificationsContainer = styled.div`
  min-height: 0;
  overflow: hidden;
  height: calc((100vh - 150px) * 3 / 4);
  width: 100%;

  & > div {
    height: calc(100%);
    overflow: auto;
  }

  & > div > div {
    margin: 20px;
    padding: 10px 15px;
    background: #292929;
    display: flex;
    flex-direction: column;
    font-size: 0.9rem;

    > span.timestamp {
      width: 100%;
      text-align: right;
      font-weight: bold;
      color: #888;
      font-size: 0.8rem;
      padding: 0 5px;
    }
  }
`;

const Notifications: React.FC = () => {
  return (
    <NotificationsContainer>
      <div>
        {Array(20)
          .fill("-")
          .map(() => (
            <div>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolorum
                qui aut voluptatem error. Explicabo quos velit consectetur quas quidem,
                minus beatae dolore voluptate aspernatur quod harum assumenda odit.
                Maxime!
              </span>
              <span className="timestamp">a minute ago</span>
            </div>
          ))}
      </div>
    </NotificationsContainer>
  );
};

const Index: React.FC = () => {
  return (
    <>
      <Global />
      <Layout
        title="Cryptocracy II"
        SidebarHeader={
          <SidebarTop>
            <h1>Notifications</h1>
          </SidebarTop>
        }
        Sidebar={<Notifications />}
        gridStyles={{
          gridTemplateColumns: "75px 20vw 1fr 0.3fr"
        }}
      >
        <div>
          <p>
            <strong>We're back. 28-29 July 2021.</strong>
          </p>

          <p>
            Cryptocracy is an international 48-hour cryptic hunt, coming soon to a
            computer near you.
          </p>

          <IndexButtonContainer>
            <PrimaryButton href="/about">
              <span>Learn More</span>
              <ChevronRight className="right animate" />
            </PrimaryButton>
            <SecondaryButton href="https://discord.gg/Rj2Q9xuKWR" target="_blank">
              <Discord className="left" />
              <span>Join the Discord</span>
              <ChevronRight className="right animate" />
            </SecondaryButton>
          </IndexButtonContainer>
        </div>
      </Layout>
    </>
  );
};

export default Index;
