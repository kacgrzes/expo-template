// TODO: can be removed when reanimated is 3.11.0
import "react-native-reanimated";
import "@mobile/root";
import "@mobile/i18n";
import { setupOnAppStart } from "@mobile/root";
import { registerRootComponent } from "expo";
import { RootWithStorybook } from "./RootWithStorybook";

setupOnAppStart();
registerRootComponent(RootWithStorybook);
