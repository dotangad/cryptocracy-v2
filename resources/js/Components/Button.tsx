import React from "react";
import styled from "styled-components";

const Button = styled.a`
  padding: 15px 10px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  cursor: pointer;

  svg {
    height: 20px;
    width: auto;
    transition: transform 0.3s ease;
  }

  span {
    margin-bottom: -3px;
  }

  svg.right {
    margin-left: 10px;
  }

  svg.left {
    margin-right: 10px;
  }

  &:hover svg.animate.left {
    transform: translateX(-5px);
  }

  &:hover svg.animate.right {
    transform: translateX(5px);
  }

  * {
    font-family: "Bruta Pro";
  }
`;

export const PrimaryButton = styled(Button)`
  background: white;
  color: #333;
  border: none;

  &:disabled {
    background: #999;
  }
`;

export const SecondaryButton = styled(Button)`
  border: 2px solid white;
  background: transparent;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
