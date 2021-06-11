import React from "react";
import styled from "styled-components";
import { Discord, Facebook, Twitter, Instagram, Email } from "../Icons";

const SocialLogosContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 100%;

  > a svg {
    height: 20px;
    width: auto;
    margin-bottom: -5px;
    transition: transform 0.3s ease;
  }

  > a:hover svg {
    transform: translateY(-2px);
  }
`;

export default () => {
  const links = [
    {
      link: "https://discord.gg/Rj2Q9xuKWR",
      icon: Discord
    },
    {
      link: "https://www.facebook.com/cryptocracyhunt/",
      icon: Facebook
    },
    {
      link: "https://twitter.com/playcryptocracy",
      icon: Twitter
    },
    {
      link: "https://www.instagram.com/playcryptocracy/",
      icon: Instagram
    },
    {
      link: "mailto:admin@cryptichunt.com",
      icon: Email
    }
  ];

  return (
    <SocialLogosContainer>
      {links.map(({ link, icon: Icon }, i) => (
        <a href={link} key={i} target="_blank">
          <Icon />
        </a>
      ))}
    </SocialLogosContainer>
  );
};
