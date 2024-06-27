import { preventAutoHideAsync } from "expo-splash-screen";
import { setBackgroundColorAsync } from "expo-system-ui";
import { LogBox } from "react-native";
// You can enable freeze if needed and you know what you're doing
// import { enableFreeze } from "react-native-screens";
import { enableMocking } from "./mocks/enableMocking";

export const setupOnAppStart = () => {
  setBackgroundColorAsync("#000000");
  preventAutoHideAsync();
  enableMocking();
  // enableFreeze(true);
  LogBox.ignoreLogs(["findNodeHandle", "findHostInstance"]);
};
