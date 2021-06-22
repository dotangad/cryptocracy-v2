import React from "react";
import styled from "styled-components";
import { ChevronRight } from "../Icons";
import Countdown from "./Countdown";

const Layer = styled.div`
  z-index: 1001;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  & > div {
    width: 100%;
    max-width: 600px;
    margin: 15px 0;
  }

  div.back a {
    display: flex;
    alignitems: center;
    justifycontent: flex-start;
  }

  div.back svg {
    transform: rotate(180deg);
    height: 20px;
    width: auto;
  }
`;

interface IAdminProps {
  children: React.ReactNode;
  title: string;
}

const Admin: React.FC<IAdminProps> = ({ children, title }: IAdminProps) => {
  return (
    <>
      <div className="layers">
        <div className="layer curves">
          <img src="/img/header-curves.png" />
        </div>
        <Layer className="layer">
          <div style={{ transform: "scale(2)", marginBottom: "30px" }}>
            <Countdown />
          </div>

          <div className="back">
            <a href="/">
              <ChevronRight />
              Back to index
            </a>
          </div>

          <div className="title">
            <h1>{title}</h1>
          </div>

          {children}
        </Layer>
      </div>
    </>
  );
};

export default Admin;
