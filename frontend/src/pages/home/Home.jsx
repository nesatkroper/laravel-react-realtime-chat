import { Layout } from "@/components/app/Layout";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import React from "react";
import Content from "./components/Content";
import Contact from "./components/Contact";

const Home = () => {
  return (
    <React.Fragment>
      <Layout>
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel
            defaultSize={25}
            className="h-[100vh] min-w-[220px] p-2"
          >
            {/*  */}
            <Contact />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel className="h-[100vh] min-w-[470px]">
            {/*  */}
            <Content />
          </ResizablePanel>
        </ResizablePanelGroup>
      </Layout>
    </React.Fragment>
  );
};

export default Home;
