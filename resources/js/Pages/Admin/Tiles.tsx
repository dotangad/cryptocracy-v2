import React from "react";
import styled from "styled-components";
import AdminLayout from "../../Components/Layout/Admin";
import Tiles from "../../Components/AdminTiles";

const TilesContainer = styled.div`
  width: 600px;
  height: 600px;
  margin-bottom: 50px;
`;

export enum TileType {
  LEVEL = "LEVEL",
  STORY = "STORY",
  SIDEQUEST = "SIDEQUEST"
}

export interface ITile {
  id: number;
  created_at: string;
  updated_at: string;
  content: string;
  type: TileType;
  comment?: string;
  solution?: string;
  points?: number;
}

interface ITilesProps {
  tiles: ITile[];
}

const TilesPage: React.FC<ITilesProps> = ({ tiles }: ITilesProps) => {
  return (
    <AdminLayout title="Tiles" backTo="/admin">
      <>
        <div style={{ maxWidth: "600px", paddingBottom: "50px" }}>
          <TilesContainer>
            <Tiles tiles={tiles} />
          </TilesContainer>
        </div>
      </>
    </AdminLayout>
  );
};

export default TilesPage;
