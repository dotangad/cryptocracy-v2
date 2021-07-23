import { InertiaLink, usePage } from "@inertiajs/inertia-react";
import React from "react";
import Countdown from "./Countdown";
import {
  SidebarTop,
  GridArea,
  Title,
  FooterLogo,
  FooterCopyright,
  AuthData,
  IPageProps
} from "./helpers";
import MobileHeader from "./MobileHeader";
import Navbar from "./Navbar";
import SocialLogos from "./SocialLogos";

const lyrics = `<!-- Mine eyes have seen the glory of the coming of the Lord
He is trapling out the vintage where the grapes of wrath are stored
He have loosed the faiteful lightening of his terrible swift sword
His truth is marching on
Glory, Glory halleluhja
Glory, Glory halleluhja
Glory, Glory halleluhja
His truth is marching on
I have seen him in the watch-fires of a hundred circling camps
They have builded him an altar in the evening dews and damps
I have read his righteous sentence by the dim and flaring lamps
His truth is marching on
Glory, Glory halleluhja
Glory, Glory halleluhja
Glory, Glory halleluhja
His truth is marching on
I have read a fiery gospel writ in burnish'd rows of steel
As ye deal with my condemners so with you my grace shall deal
Let the hero, born of woman, crush the serpent with his heel
His truth is marching on
Glory, Glory halleluhja
Glory, Glory halleluhja
Glory, Glory halleluhja
His truth is marching on
He has sounded form the trumpet that shall never call retreat
He is sifting out the hearts of men before His judgment-seat
Oh, be swift, my soul to answer, oh be jubilant, my feet
His truth is marching on
Glory, Glory halleluhja
Glory, Glory halleluhja
In the beauty of the lilies Christ was born across the sea
With a glory in his bosom that transfigures you and me
As he died to make men holy let us die to make men free
His truth is marching on
Glory, Glory halleluhja
Glory, Glory halleluhja
Glory, Glory halleluhja
His truth is marching on
Mine eyes have seen the glory of the coming of the lord
He is trapling out the vintage where the grapes of wrath are stored
He have loosed the faiteful lightening of his terrible swift sword
His truth is marching on -->`;

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
  const { auth } = usePage<IPageProps>().props;

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
          <GridArea
            area="r1c3"
            dangerouslySetInnerHTML={{
              __html: lyrics
            }}
          />
          <AuthData area="r1c4">
            {auth.authenticated && (
              <>
                Hello
                <strong style={{ marginLeft: "0.5ch" }}>@{auth.user.username}</strong>!
              </>
            )}
          </AuthData>
          <GridArea area="r2c1" />
          <GridArea area="Navbar">
            <Navbar />
          </GridArea>
          <Title>{title}</Title>
          <GridArea area="SidebarTop">{SidebarHeader || (
            <SidebarTop style={{ alignItems: 'center', justifyContent: 'center', padding: '0' }}>
              <a
                href="https://www.athenaeducation.co.in"
                target="_blank"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  height: '100%'
                }}>
                <img src="/img/athena.png" alt="Athena" style={{ height: '55%', width: 'auto', marginLeft: "-15%" }} />
              </a>
            </SidebarTop>
          )}</GridArea>
          <GridArea area="r3c1" />
          <GridArea area="Content">{children}</GridArea>
          <GridArea area="Sidebar">{Sidebar}</GridArea>
          <GridArea area="fLogo">
            <FooterLogo />
          </GridArea>
          <GridArea area="Social" style={{ padding: "0 20px" }}>
            <SocialLogos />
          </GridArea>
          <GridArea area="fContent"></GridArea>
          <GridArea area="Copyright">
            <FooterCopyright />
          </GridArea>
        </div>
      </div>
    </>
  );
};

export default Layout;

export * from "./helpers";
