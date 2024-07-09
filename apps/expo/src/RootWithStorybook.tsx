import { useDevMenuItem, useRegisterDevMenuItems } from "@mobile/hooks";
import { Providers, Root } from "@mobile/root";
import React from "react";
import Storybook from "./.storybook";

export function RootWithStorybook() {
  useRegisterDevMenuItems();
  const enabled = useDevMenuItem("storybook-enabled");

  if (!enabled || !__DEV__) {
    // @ts-ignore
    const context = require.context("./app");
    return <Root context={context} />;
  }

  if (__DEV__ && enabled) {
    return (
      <Providers>
        <Storybook />
      </Providers>
    );
  }

  return null;
}
