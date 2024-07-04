import { StatusBar } from "@mobile/components";
import { ComponentType, Fragment } from "react";

export const withModalStatusBar = (Screen: ComponentType) => {
  const WithModalStatusBar = () => (
    <Fragment>
      <StatusBar isModal />
      <Screen />
    </Fragment>
  );

  return WithModalStatusBar;
};
