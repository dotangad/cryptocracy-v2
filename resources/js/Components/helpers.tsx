import React from "react";
import styled from "styled-components";

export const LayerContainer = styled.div`
  position: relative;
  width: 100vw;
  min-height: 100%;
  height: auto;
`;

export const Layer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  background: transparent;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  position: relative;
  overflow: visible !important;
  @media screen and (max-width: 1300px) {
    display: block !important;
  }
`;

const TitleSpan = styled.span`
  position: absolute;
  font-size: 5rem;
  font-weight: 700;
  font-family: "Bruta Pro";
  width: 1000px;

  @media screen and (max-width: 1300px) {
    width: 100%;
    font-size: 2.5rem;
    padding-left: 20px;
    position: static !important;
  }
`;

export const Title: React.FC = ({ children }) => {
  return (
    <TitleContainer className="Title">
      <TitleSpan>{children}</TitleSpan>
    </TitleContainer>
  );
};

export const SidebarTopContainer = styled.div`
  color: white;
  display: flex !important;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 20px;
`;

export const SidebarTop: React.FC = ({ children }) => {
  return <SidebarTopContainer className="SidebarTop">{children}</SidebarTopContainer>;
};

const FooterLogoImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const FooterLogo: React.FC = () => {
  return (
    <div className="fLogo">
      <FooterLogoImg src="/img/footer-logo-white-bg.png" />
    </div>
  );
};

export const FooterContent: React.FC = ({ children }) => {
  return <div className="fContent">{children}</div>;
};

const CopyrightContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  font-family: "Bruta Pro";
  padding: 0 20px;

  @media screen and (max-width: 1300px) {
    justify-content: center;
    font-size: 0.9rem !important;
    padding-bottom: 40px;
  }
`;

export const FooterCopyright: React.FC = () => {
  return (
    <CopyrightContainer className="Copyright">&copy; 2021 Cryptocracy</CopyrightContainer>
  );
};
