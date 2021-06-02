import React from "react";
import PriestChat, { PriestChatHeader } from "../Components/PriestChat";
import Layout from "../Components/Layout";

const Index: React.FC = () => {
  return (
    <Layout
      title="Cryptocracy II"
      SidebarHeader={<PriestChatHeader />}
      Sidebar={<PriestChat />}
      gridStyles={{ gridTemplateRows: "75px calc(45vh - 75px) calc(55vh - 75px) 75px" }}
      imgStyles={{ height: "50vh" }}
    >
      <p>hello</p>
    </Layout>
  );
};

export default Index;
