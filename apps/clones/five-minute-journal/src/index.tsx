// TODO: can be removed when reanimated is 3.11.0
import "react-native-reanimated";
import "@mobile/root";
import "@mobile/i18n";
import { setupOnAppStart } from "@mobile/root";
import { themeConfigurator } from "@mobile/unistyles";
import { registerRootComponent } from "expo";
import { RootWithStorybook } from "./RootWithStorybook";

setupOnAppStart();
themeConfigurator
  .light({
    colors: {
      primary: "#FCBA2B",
      background: "#F3EFEC",
      typography: "#423428",
    },
    navigation: {
      colors: {
        background: "#F3EFEC",
        card: "#F3EFEC",
        border: "#DFDEDA",
      },
    },
  })
  .init();
registerRootComponent(RootWithStorybook);
