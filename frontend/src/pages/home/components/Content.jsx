import React from "react";
import ContentHeader from "@/components/content/ContentHeader";
import ContentBody from "@/components/content/ContentBody";
import ContentSender from "@/components/content/ContentSender";

const Content = () => {
  return (
    <React.Fragment>
      <div className="flex flex-col w-full h-full">
        {/*  */}
        <ContentHeader />
        <div className="p-2">
          {/*  */}
          <ContentBody />
          {/*  */}
          <ContentSender />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Content;
