import React from "react";
import { createGlobalStyle } from "styled-components";
import { InertiaLink } from "@inertiajs/inertia-react";
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

  .layer.curves img {
    height: 50vh;
  }

  .Content p {
    font-size: 2rem;
    margin: 20px 0;
  }

  .layer.grid > .Title .line {
    left: calc(18vw - 2px);
  }

  @media screen and (max-width: 1300px) {
    .Content p {
      font-size: 1.6rem;
      margin: 20px 0;
    }
  }
`;

const Index: React.FC = () => {
  return (
    <>
      <Global />
      <Layout
        title="Cryptocracy II"
        SidebarHeader={<PriestChatHeader />}
        Sidebar={<PriestChat />}
        gridStyles={{
          gridTemplateRows: "75px calc(45vh - 75px) calc(55vh - 75px) 75px",
          gridTemplateColumns: "75px calc(18vw + 1px) 1fr calc(18vw + 1px)"
        }}
        imgStyles={{ height: "50vh" }}
      >
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

          <ButtonContainer style={{ marginTop: "20px" }}>
            {/* <PrimaryButton href="/register"> */}
            {/*   <span>Register</span> */}
            {/*   <ChevronRight className="right animate" /> */}
            {/* </PrimaryButton> */}
            <PrimaryButton href="/about">
              <span>Learn More</span>
              <ChevronRight className="right animate" />
            </PrimaryButton>
            <SecondaryButton
              href="https://discord.gg/Rj2Q9xuKWR"
              style={{ marginLeft: "20px" }}
            >
              {/* <SecondaryButton href="https://discord.gg/Rj2Q9xuKWR"> */}
              <Discord className="left" />
              <span>Join the Discord</span>
              <ChevronRight className="right animate" />
            </SecondaryButton>
          </ButtonContainer>
        </div>
      </Layout>
    </>
  );
};

export default Index;
