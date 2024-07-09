// TODO: can be removed when reanimated is 3.11.0
import "react-native-reanimated";
// eslint-disable-next-line import/no-unresolved
import "@mobile/root";
import "@/i18n";
import "@mobile/unistyles";

// eslint-disable-next-line import/no-unresolved
import { setupOnAppStart } from "@mobile/root";
import { registerRootComponent } from "expo";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { RootWithStorybook } from "./RootWithStorybook";

setupOnAppStart();
registerRootComponent(RootWithStorybook);
