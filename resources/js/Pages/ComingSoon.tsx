import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Layout from "../Components/Layout";

const Global = createGlobalStyle`
  .Sidebar {
    overflow: hidden;
  }

  .Content > div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 1300px) {
    .Content > div {
      height: 100%;
      display: block;
      margin: 20px 0;
    }
  }
`;

const H1 = styled.h1`
  font-size: 3rem;

  @media screen and (max-width: 1300px) {
    font-size: 1.6rem;
  }
`;

const P = styled.p`
  font-size: 1.6rem;

  @media screen and (max-width: 1300px) {
    font-size: 1.3rem;
  }
`;

const ComingSoon: React.FC<{ title: string }> = ({ title }: { title: string }) => {
  return (
    <>
      <Global />
      <Layout title={title}>
        <div>
          <H1>Coming Soon</H1>
          <P>Stay tuned</P>
        </div>
      </Layout>
    </>
  );
};

export default ComingSoon;
