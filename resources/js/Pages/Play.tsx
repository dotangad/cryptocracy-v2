import { InertiaLink } from "@inertiajs/inertia-react";
import React from "react";
import styled from "styled-components";
import { FooterCopyright, FooterLogo, GridArea } from "../Components/Layout";
import { ChevronRight } from "../Components/Icons";
import Countdown from "../Components/Layout/Countdown";
import SocialLogos from "../Components/Layout/SocialLogos";
import Tiles from "../Components/Tiles";

const Footer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0 20px;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 1300px) {
    & > * {
      display: none;
    }

    & > div:last-child {
      display: block !important;
      width: 100% !important;
    }
  }
`;

const Title = styled.div`
  font-size: 6rem;
  font-weight: bold;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  padding: 10px;

  @media screen and (max-width: 1300px) {
    font-size: 4rem;
  }
`;

const Back = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 10px;

  a {
    font-weight: bold;
    color: #777;
    text-decoration: none;
    transition: color 0.3s ease;
    display: flex;
    align-items: center;
  }

  a:hover {
    color: #fff;
  }

  svg {
    transform: rotate(180deg);
    height: 20px;
    width: auto;
  }
`;

const Play: React.FC = () => {
  return (
    <>
      <div className="layers">
        <div className="layer curves">
          <img src="/img/header-curves.png" />
        </div>
        <div className="layer play">
          <GridArea area="r1c1"></GridArea>
          <GridArea area="Back">
            <Back>
              <InertiaLink href="/">
                <ChevronRight className="right animate" />
                Back home
              </InertiaLink>
            </Back>
          </GridArea>
          <GridArea area="r1c3"></GridArea>
          <GridArea area="r1c4"></GridArea>
          <GridArea area="r2c1"></GridArea>
          <GridArea area="Heading">
            <Title>Play</Title>
          </GridArea>
          <GridArea area="r2c3"></GridArea>
          <GridArea area="r2c4"></GridArea>
          <GridArea area="r3c1"></GridArea>
          <GridArea area="Tile">Tile</GridArea>
          <GridArea area="Tiles">
            <Tiles />
          </GridArea>
          <GridArea area="r3c4"></GridArea>
          <GridArea area="FooterLogo">
            <FooterLogo />
          </GridArea>
          <GridArea area="Footer">
            <Footer>
              <SocialLogos style={{ width: "20%" }} />
              <Countdown style={{ width: "60%" }} />
              <FooterCopyright style={{ justifyContent: "flex-end", width: "20%" }} />
            </Footer>
          </GridArea>
        </div>
      </div>
    </>
  );
};

export default Play;