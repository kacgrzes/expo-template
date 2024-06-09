import { StatusBar } from "components/StatusBar";
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
