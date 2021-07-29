import { InertiaLink } from "@inertiajs/inertia-react";
import React from "react";
import styled from "styled-components";
import { FooterCopyright, FooterLogo, GridArea } from "../Components/Layout";
import { ChevronRight } from "../Components/Icons";
import Countdown from "../Components/Layout/Countdown";
import SocialLogos from "../Components/Layout/SocialLogos";
import Tiles from "../Components/Tiles";
import { TileType } from "./Admin/Tiles";
import { SidequestTile, StoryTile, LevelTile } from "../Components/Tile";

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
  font-size: 5rem;
  font-weight: bold;
  font-family: "Bruta Pro";
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

const AthenaContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & a {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & img {
    height: 70%;
    width: auto;
  }
`;



export interface ITile {
  id: number;
  content: string;
  type: TileType;
  comment?: string;
  points?: number;
}

export interface IUserTile {
  solved: boolean;
  user_id: number;
  tile_id: number;
  media_link: string | null;
  sidequest_points: number;
}

interface IPlayProps {
  tiles: ITile[];
  tile: ITile;
  userTile: IUserTile;
  canBack: boolean;
  canNext: boolean;
}

const Play: React.FC<IPlayProps> = ({
  tiles,
  tile,
  canBack,
  canNext,
  userTile
}: IPlayProps) => {
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
          <GridArea area="r2c3">
            <AthenaContainer>
              <a href="https://athenaeducation.co.in" target="_blank">
                <img src="/img/athena.png" alt="Athena Education" />
              </a>
            </AthenaContainer>
          </GridArea>
          <GridArea area="r2c4"></GridArea>
          <GridArea area="r3c1"></GridArea>
          <GridArea area="Tile">
            {tile.type === TileType.LEVEL ? (
              <LevelTile {...{ tile, canBack, canNext, userTile }} />
            ) : tile.type === TileType.STORY ? (
              <StoryTile {...{ tile, canBack, canNext, userTile }} />
            ) : (
              <SidequestTile {...{ tile, canBack, canNext, userTile }} />
            )}
          </GridArea>
          <GridArea area="Tiles">
            <Tiles tiles={tiles} tile={tile} />
          </GridArea>
          <GridArea area="r3c4"></GridArea>
          <GridArea area="FooterLogo">
            <FooterLogo />
          </GridArea>
          <GridArea area="Footer">
            <Footer>
              <SocialLogos style={{ width: "20%", maxWidth: "250px" }} />
              <FooterCopyright style={{ justifyContent: "flex-end", width: "20%" }} />
            </Footer>
          </GridArea>
        </div>
      </div>
    </>
  );
};

export default Play;
