import React from "react";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export const Layout = (props) => {
  const { children } = props;
  return (
    <React.Fragment>
      <div className="flex">
        <Sidebar />
        {children}
        <Footer />
      </div>
    </React.Fragment>
  );
};
