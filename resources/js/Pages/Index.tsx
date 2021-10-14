import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { InertiaLink } from "@inertiajs/inertia-react";
import Layout, { PoweredByAthena } from "../Components/Layout";
import Countdown from "../Components/Layout/Countdown";
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
    font-size: 1.5rem;
    margin: 20px 0;
  }

  @media screen and (max-width: 1300px) {
    .Content p {
      font-size: 1.3rem;
      margin: 20px 0;
    }
  }
`;

const IndexButtonContainer = styled(ButtonContainer)`
  margin-top: 20px;
  flex-wrap: wrap;

  > a:nth-child(2) {
    margin-left: 20px;
  }

  @media screen and (max-width: 530px) {
    > a {
      margin: 10px 0 !important;
    }
  }
`;

const CountdownContainer = styled.div`
  > div {
    justify-content: flex-start;
    padding: 0;
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
          gridTemplateRows: "75px calc(35vh - 75px) calc(65vh - 75px) 75px",
          gridTemplateColumns: "75px 20vw 1.8fr 1fr"
        }}
        imgStyles={{ height: "50vh" }}
      >
        <div>
          <PoweredByAthena />

          <p>
            Cryptocracy was an international 48-hour cryptic hunt held on 30st-31st July, <InertiaLink href="/about">with prizes worth over &#8377;5,00,000</InertiaLink>.
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
