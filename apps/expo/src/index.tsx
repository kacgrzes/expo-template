// TODO: can be removed when reanimated is 3.11.0
import "react-native-reanimated";
import "@/polyfills";
import "@/i18n";
import "@/unistyles";

import { registerRootComponent } from "expo";
import { setupOnAppStart } from "@/setupOnAppStart";
import { Root } from "./Root";

setupOnAppStart();
registerRootComponent(Root);
