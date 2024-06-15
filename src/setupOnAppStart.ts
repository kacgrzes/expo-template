import { setBackgroundColorAsync } from "expo-system-ui";
import { preventAutoHideAsync } from "expo-splash-screen";
import { LogBox } from "react-native";
// You can enable freeze if needed and you know what you're doing
// import { enableFreeze } from "react-native-screens";

export const setupOnAppStart = () => {
  setBackgroundColorAsync("#000000");
  preventAutoHideAsync();
  // enableFreeze(true);
  LogBox.ignoreLogs(["findNodeHandle", "findHostInstance"]);
};
