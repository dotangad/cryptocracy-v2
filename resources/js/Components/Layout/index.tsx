import React from "react";
import { GridArea, Title, FooterLogo, FooterCopyright } from "./helpers";
import MobileHeader from "./MobileHeader";
import Navbar from "./Navbar";
import SocialLogos from "./SocialLogos";

export interface ILayoutProps {
  title: string;
  gridStyles?: React.CSSProperties;
  imgStyles?: React.CSSProperties;
  children: React.ReactNode;
  Sidebar?: React.ReactNode;
  SidebarHeader?: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({
  children,
  Sidebar,
  SidebarHeader,
  title,
  gridStyles,
  imgStyles
}: ILayoutProps) => {
  return (
    <>
      <div className="layers">
        <div className="layer curves">
          <img style={imgStyles} src="/img/header-curves.png" />
        </div>
        <div className="layer grid" style={gridStyles}>
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
          <Title>{title}</Title>
          <GridArea area="SidebarTop">{SidebarHeader}</GridArea>
          <GridArea area="r3c1" />
          <GridArea area="Content">{children}</GridArea>
          <GridArea area="Sidebar">{Sidebar}</GridArea>
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
    </>
  );
};

export default Layout;
