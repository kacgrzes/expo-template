import { preventAutoHideAsync } from "expo-splash-screen";
import { LogBox } from "react-native";
import { enableFreeze } from "react-native-screens";

export const setupOnAppStart = () => {
  preventAutoHideAsync();
  enableFreeze(true);
  LogBox.ignoreLogs(["findNodeHandle"]);
};
