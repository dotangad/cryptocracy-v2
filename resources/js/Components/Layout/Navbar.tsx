import React from "react";
import styled from "styled-components";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";
import { IPageProps } from "./helpers";
const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 20px;
  width: 100%;
  height: 100%;

  > a span {
    font-size: 1.4rem;
    font-weight: 600;
    font-family: "Bruta Pro";
    transition: transform 0.3s ease, background 0.3s ease;
  }

  > a {
    color: white;
    margin: 15px 0;
    display: flex;
    align-items: center;
    transition: transform 0.3s ease, background 0.3s ease;
    text-decoration: none;
  }

  > a:hover span {
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
    padding: 20px 0;

    > a {
      margin: 5px !important;
      transform: translateX(-7px);
    }

    > a:hover span {
      transform: none !important;
      background: #ffffff12;
    }

    > a span {
      padding: 2px 5px;
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

interface ILink {
  href: string;
  label: string;
  external?: boolean;
}

export default () => {
  const { auth } = usePage<IPageProps>().props;

  const links: ILink[] = [
    { href: "/", label: "Home" },
    { href: "/leaderboard", label: "Leaderboard" }
  ].concat(
    auth.user
      ? [
          { href: "/guide", label: "Guide" },
          { href: "/logout", label: "Logout" }
        ]
      : [
          { href: "/register", label: "Register" },
          { href: "/login", label: "Login" },
          { href: "/sponsor", label: "Sponsor Us" },
          { href: "/about", label: "About" }
        ]
  );

  const ActiveIndicator: React.FC = () => (
    <svg
      style={{ height: "25px", width: "25px" }}
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
    <NavContainer>
      {links.map(({ href, label, external }, i) =>
        external ? (
          <a key={i} href={href} target="_blank">
            <span>{label}</span>
          </a>
        ) : (
          <InertiaLink
            key={i}
            href={href}
            className={window.location.pathname === href ? "active" : ""}
          >
            {window.location.pathname === href && <ActiveIndicator />}
            <span>{label}</span>
          </InertiaLink>
        )
      )}
    </NavContainer>
  );
};
