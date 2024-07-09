import React from "react";
import { ComponentType, Fragment } from "react";
import { StatusBar } from "./StatusBar";

export const withModalStatusBar = (Screen: ComponentType) => {
  const WithModalStatusBar = () => (
    <Fragment>
      <StatusBar isModal />
      <Screen />
    </Fragment>
  );

  return WithModalStatusBar;
};
