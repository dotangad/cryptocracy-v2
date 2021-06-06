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
`;

const H1 = styled.h1`
  font-size: 3rem;
`;

const P = styled.p`
  font-size: 1.6rem;
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
