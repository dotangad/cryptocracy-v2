import React from "react";
import styled from "styled-components";
import { InertiaLink } from "@inertiajs/inertia-react";

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 20px;

  > a span {
    font-size: 1.5rem;
    font-weight: 600;
    font-family: "Bruta Pro";
  }

  > a {
    color: white;
    margin: 10px 0;
    display: flex;
    align-items: center;
    transition: transform 0.3s ease, background 0.3s ease;
  }

  > a:hover {
    transform: translateX(10px);
  }

  > a svg {
    margin-bottom: 5px;
    margin-left: -5px;
    color: inherit;
  }

  @media screen and (max-width: 1300px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;

    > a {
      margin: 5px !important;
      padding: 2px 5px;
    }

    > a:hover {
      transform: none !important;
      background: #ffffff12;
    }

    > a span {
      font-size: 0.9rem;
    }

    > a svg {
      display: none;
    }

    > a.active {
      background: white;
      color: #222222;
    }
  }
`;

export default () => {
  const links = [
    { href: "/", label: "Home" },
    { href: "/play", label: "Play" },
    { href: "/about", label: "About" },
    { href: "/sponsor", label: "Sponsor Us" },
    { href: "/leaderboard", label: "Leaderboard" }
  ];

  const ActiveIndicator: React.FC = () => (
    <svg
      className="w-6 h-6"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <NavContainer className="Navbar">
      {links.map(({ href, label }, i) => (
        <InertiaLink
          key={i}
          href={href}
          className={window.location.pathname === href ? "active" : ""}
        >
          {window.location.pathname === href && <ActiveIndicator />}
          <span>{label}</span>
        </InertiaLink>
      ))}
    </NavContainer>
  );
};
