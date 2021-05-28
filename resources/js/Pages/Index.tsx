import React from "react";
import { GridArea, Title, FooterCopyright, FooterLogo } from "../Components/helpers";
import PriestChat, { PriestChatHeader } from "../Components/PriestChat";
import MobileHeader from "../Components/MobileHeader";
import Navbar from "../Components/Navbar";
import SocialLogos from "../Components/SocialLogos";

const Index: React.FC = () => {
  return (
    <div className="layers">
      <div className="layer curves">
        <img src="/img/header-curves.png" />
      </div>
      <div
        className="layer grid"
        style={{ gridTemplateRows: "75px calc(50vh - 75px) calc(50vh - 75px) 75px" }}
      >
        <GridArea area="MobileHeader">
          <MobileHeader />
        </GridArea>
        <GridArea area="r1c2" />
        <GridArea area="r1c3" />
        <GridArea area="r1c4" />
        <GridArea area="r2c1" />
        <GridArea area="Navbar">
          <Navbar />
        </GridArea>
        <Title>Cryptocracy II</Title>
        <GridArea area="SidebarTop">
          <PriestChatHeader />
        </GridArea>
        <GridArea area="r3c1" />
        <GridArea area="Content">
          <p style={{ fontSize: "2rem" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae pariatur
            possimus reprehenderit voluptatibus dolorem rem est exercitationem ipsam nam
            molestias, officiis sit repellendus, unde adipisci. Dolores repellendus sed
            nesciunt tempora?
          </p>
          <p style={{ fontSize: "2rem" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae pariatur
            possimus reprehenderit voluptatibus dolorem rem est exercitationem ipsam nam
            molestias, officiis sit repellendus, unde adipisci. Dolores repellendus sed
            nesciunt tempora?
          </p>
          <p style={{ fontSize: "2rem" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae pariatur
            possimus reprehenderit voluptatibus dolorem rem est exercitationem ipsam nam
            molestias, officiis sit repellendus, unde adipisci. Dolores repellendus sed
            nesciunt tempora?
          </p>
          <p style={{ fontSize: "2rem" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae pariatur
            possimus reprehenderit voluptatibus dolorem rem est exercitationem ipsam nam
            molestias, officiis sit repellendus, unde adipisci. Dolores repellendus sed
            nesciunt tempora?
          </p>
          <p style={{ fontSize: "2rem" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae pariatur
            possimus reprehenderit voluptatibus dolorem rem est exercitationem ipsam nam
            molestias, officiis sit repellendus, unde adipisci. Dolores repellendus sed
            nesciunt tempora?
          </p>
          <p style={{ fontSize: "2rem" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae pariatur
            possimus reprehenderit voluptatibus dolorem rem est exercitationem ipsam nam
            molestias, officiis sit repellendus, unde adipisci. Dolores repellendus sed
            nesciunt tempora?
          </p>
          <p style={{ fontSize: "2rem" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae pariatur
            possimus reprehenderit voluptatibus dolorem rem est exercitationem ipsam nam
            molestias, officiis sit repellendus, unde adipisci. Dolores repellendus sed
            nesciunt tempora?
          </p>
          <p style={{ fontSize: "2rem" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae pariatur
            possimus reprehenderit voluptatibus dolorem rem est exercitationem ipsam nam
            molestias, officiis sit repellendus, unde adipisci. Dolores repellendus sed
            nesciunt tempora?
          </p>
        </GridArea>
        <GridArea area="Sidebar">
          <PriestChat />
        </GridArea>
        <GridArea area="fLogo">
          <FooterLogo />
        </GridArea>
        <GridArea area="Social" style={{ padding: "0 20px" }}>
          <SocialLogos />
        </GridArea>
        <GridArea area="fContent" />
        <GridArea area="Copyright">
          <FooterCopyright />
        </GridArea>
      </div>
    </div>
  );
};

export default Index;
