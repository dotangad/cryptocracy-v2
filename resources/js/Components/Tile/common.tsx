import React from "react";
import styled from "styled-components";
import { ITile, IUserTile } from "../../Pages/Play";

export interface ITileProps {
  tile: ITile;
  canBack: boolean;
  canNext: boolean;
  userTile: IUserTile;
}

export const TileContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  & > div {
    min-height: 300px;
    height: auto;
    max-width: 100%;
    max-width: 500px;
    margin: 0 auto;
    padding: 30px;
    background: #292929;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-between;

    .answer {
      width: 100%;
    }

    .answer input {
      background: #353535;
      border: none;
      font-size: 1.1rem;
      padding: 20px;
      color: #fff;
      width: 100%;
    }

    .answer input:focus,
    .answer input:active {
      background: #454545;
      outline: none;
    }

    .answer > form {
      margin: 20px 0;
    }

    .answer > div {
      width: 100%;
      display: flex;
      justify-content: space-between;

      > form {
        display: flex;
        justify-content: flex-end;
        width: auto;
        &:first-of-type {
          justify-content: flex-start;
        }
      }
    }

    .content > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;

      > div {
        font-size: 1.1rem;
        font-weight: 600;
        color: #999;
      }
    }

    .content p {
      margin: 20px 0;
    }

    .answer p {
      color: #009900;
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
    }
  }

  @media screen and (max-width: 1300px) {
    margin-top: 20px;
    margin-bottom: 50px;

    & > div {
      width: 100%;
      padding: 30px;
      background: none;
      box-shadow: none;
    }
  }
`;