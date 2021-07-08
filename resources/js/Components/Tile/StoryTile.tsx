import React from "react";
import styled from "styled-components";
import { useForm } from "@inertiajs/inertia-react";
import { PrevNext } from "./PrevNext";
import { ITileProps, TileContainer } from "./common";

const StoryContainer = styled.div``;

export const StoryTile: React.FC<ITileProps> = ({
  tile,
  canBack,
  canNext
}: ITileProps) => {
  const { post, processing } = useForm({});
  return (
    <TileContainer>
      <StoryContainer>
        <div className="content">
          <h1>Tile {tile.id}</h1>
          <p>{tile.content}</p>
        </div>
        <div className="answer">
          <PrevNext {...{ tile, canBack, canNext }}>
            <></>
          </PrevNext>
        </div>
      </StoryContainer>
    </TileContainer>
  );
};