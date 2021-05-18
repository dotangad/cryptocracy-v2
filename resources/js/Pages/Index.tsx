import React from "react";
import styled from "styled-components";

const Div = styled.div`
    color: red;
`;

const Index: React.FC = () => {
    return <Div className="bg-blue-500">hello</Div>;
};

export default Index;
