import React from "react";
import styled from "styled-components";
import { InertiaLink } from "@inertiajs/inertia-react";
import {
  LayerContainer,
  Title,
  FooterLogo,
  FooterContent,
  FooterCopyright
} from "../Components/helpers";
import { Discord, ChevronRight } from "../Components/Icons";
import GridLayer from "../Components/GridLayer";
import Navbar from "../Components/Navbar";
import SocialLogos from "../Components/SocialLogos";
import PriestChat, { PriestChatHeader } from "../Components/PriestChat";
import MobileHeader from "../Components/MobileHeader";
import { CurveLayer } from "../Components/CurveLayer";

const IndexGridLayer = styled(GridLayer)`
  grid-template-rows: 75px 4fr 4fr 75px !important;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
`;

const TextLg = styled.div`
  font-size: 1.7rem;
  margin: 10px 0;
  width: 100%;

  > a {
    border-bottom: 2px solid white;
  }

  @media screen and (max-width: 1300px) {
    font-size: 1.4rem;
  }
`;

const Button = styled(InertiaLink)`
  padding: 5px 15px;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  & * {
    font-family: "Bruta Pro";
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.2rem;
  }

  & span {
    margin-bottom: -2px;
  }

  & svg {
    height: 2rem;
    transition: transform 0.3s ease;
  }

  &:hover svg:last-of-type {
    transform: translateX(5px);
  }
`;

const PrimaryButton = styled(Button)`
  background: #ffffff;
  color: #222222;
`;

const SecondaryButton = styled(Button)`
  border: 2px solid #ffffff;

  & svg:first-of-type {
    margin-top: -3.5px;
  }
`;

const Index: React.FC = () => {
  return (
    <LayerContainer>
      <CurveLayer height="50vh" />
      <IndexGridLayer style={{ zIndex: 3000 }}>
        <MobileHeader />
        <div className="12"></div>
        <div className="13"></div>
        <div className="14"></div>
        <div className="21"></div>
        <div className="23"></div>
        <div className="31"></div>
        <Navbar />
        <Title>Cryptocracy II</Title>
        <ContentContainer className="Content">
          <TextLg>
            <strong>We&apos;re back. 28-29 June 2021.</strong>
          </TextLg>
          <TextLg>
            Cryptocracy is an international 48-hour cryptic hunt, conducted on 28th and
            29th June.{" "}
            <InertiaLink href="/about">See more details about the hunt</InertiaLink>.
          </TextLg>
          <TextLg>
            <InertiaLink href="/leaderboard/20">Click here</InertiaLink> to see the result
            of Cryptocracy I, 2020.
          </TextLg>
          <TextLg
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
              flexWrap: "wrap"
            }}
          >
            <PrimaryButton
              href="/register"
              style={{ marginRight: "20px", marginBottom: "10px" }}
            >
              <span style={{ marginRight: "2px" }}>Register</span>
              <ChevronRight />
            </PrimaryButton>
            <SecondaryButton
              href="#"
              style={{
                marginBottom: "10px",
                width: "260px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap"
              }}
            >
              <Discord />
              <span style={{ marginRight: "2px", marginLeft: "7px" }}>
                Join the Discord
              </span>
              <ChevronRight />
            </SecondaryButton>
          </TextLg>
        </ContentContainer>
        <PriestChatHeader />
        <PriestChat />
        <FooterLogo />
        <SocialLogos />
        <FooterContent />
        <FooterCopyright />
      </IndexGridLayer>
    </LayerContainer>
  );
};

export default Index;
