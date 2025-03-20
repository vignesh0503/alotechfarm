import React, { Fragment } from "react";
import WebHeader from "./layoutUtils/WebHeader";
import WebFooter from "./layoutUtils/WebFooter";

const WebLayout = ({ children }) => {
  return (
    <Fragment>
      <WebHeader />
      {children}
      <WebFooter /> 
    </Fragment>
  );
};

export default WebLayout;
