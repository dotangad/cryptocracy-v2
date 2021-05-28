import React from "react";
import styled, { keyframes } from "styled-components";
import { Discord, Facebook, Twitter, Instagram, Email } from "./Icons";

const SocialLogosContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 100%;

  > a svg {
    height: 18px;
    width: auto;
    margin-bottom: -5px;
    transition: transform 0.3s ease;
  }

  > a:hover svg {
    // transform: translateY(-5px);
  }
`;

export default () => {
  const links = [
    {
      link: "https://discord.com",
      icon: Discord
    },
    {
      link: "https://facebook.com",
      icon: Facebook
    },
    {
      link: "https://twitter.com",
      icon: Twitter
    },
    {
      link: "https://instagram.com",
      icon: Instagram
    },
    {
      link: "mailto:cryptocracy@gmail.com",
      icon: Email
    }
  ];

  return (
    <SocialLogosContainer>
      {links.map(({ link, icon: Icon }, i) => (
        <a href={link} key={i}>
          <Icon />
        </a>
      ))}
    </SocialLogosContainer>
  );
};
