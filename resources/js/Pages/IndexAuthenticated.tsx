import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Layout from "../Components/Layout";
import PriestChat, { PriestChatHeader } from "../Components/PriestChat";
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

const Index: React.FC = () => {
  return (
    <>
      <Global />
      <Layout title="Cryptocracy II">
        <div>
          <p>
            <strong>We're back. 28-29 July 2021.</strong>
          </p>

          <p>
            Cryptocracy is an international 48-hour cryptic hunt, coming soon to a
            computer near you.
          </p>

          {/* <p> */}
          {/*   <InertiaLink href="/leaderboard/20">Click here</InertiaLink> to see the result */}
          {/*   of Cryptocracy I, 2020. */}
          {/* </p> */}

          <IndexButtonContainer>
            {/* <PrimaryButton href="/register"> */}
            {/*   <span>Register</span> */}
            {/*   <ChevronRight className="right animate" /> */}
            {/* </PrimaryButton> */}
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