import { useDevMenuItem, useRegisterDevMenuItems } from "@mobile/hooks";
import { ExpoRoot } from "expo-router";
import Storybook from "./.storybook";
import { Providers } from "./Providers";

export function Root() {
  useRegisterDevMenuItems();
  const enabled = useDevMenuItem("storybook-enabled");

  if (!enabled || !__DEV__) {
    // @ts-ignore
    const ctx = require.context("./app");
    return <ExpoRoot context={ctx} wrapper={Providers} />;
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
