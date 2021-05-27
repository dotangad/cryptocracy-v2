import React from "react";
import styled from "styled-components";
import { Layer } from "./helpers";

interface CurveLayerProps {
  height?: string;
}

const CurveLayerContainer = styled(Layer)`
  z-index: 1000;
  background: #181818;
`;

const Curves = styled.img`
  width: 100%;
  object-fit: cover;
  opacity: 0.5;
`;

export const CurveLayer: React.FC<CurveLayerProps> = ({ height = "25vh" }) => {
  return (
    <CurveLayerContainer>
      <Curves src="/img/header-curves.png" style={{ height }} />
    </CurveLayerContainer>
  );
};
