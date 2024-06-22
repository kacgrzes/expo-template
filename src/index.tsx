// TODO: can be removed when reanimated is 3.11.0
import "react-native-reanimated";
import "@/polyfills";
import "@/i18n";
import "@/unistyles";

import { registerRootComponent } from "expo";
import { ExpoRoot } from "expo-router";
import { useDevMenuItem, useRegisterDevMenuItems } from "@/hooks";
import { setupOnAppStart } from "@/setupOnAppStart";

import Storybook from "./.storybook";
import { Providers } from "./Providers";
import { enableMocking } from "./mocks/enableMocking";

setupOnAppStart();
enableMocking();

function Root() {
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

registerRootComponent(Root);
