import "polyfills";
import "i18n";
import "unistyles";

import { registerRootComponent } from "expo";
import { ExpoRoot } from "expo-router";
import { useStorybook } from "hooks";
import { setupOnAppStart } from "setupOnAppStart";

import Storybook from "./.storybook";
import { Providers } from "./Providers";

setupOnAppStart();

function Root() {
  const [enabled] = useStorybook();

  if (!enabled) {
    // @ts-ignore
    const ctx = require.context("./app");
    return <ExpoRoot context={ctx} wrapper={Providers} />;
  }

  return (
    <Providers>
      <Storybook />
    </Providers>
  );
}

registerRootComponent(Root);
