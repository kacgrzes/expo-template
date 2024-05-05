import { preventAutoHideAsync } from "expo-splash-screen";
import { LogBox } from "react-native";
// You can enable freeze if needed and you know what you're doing
// import { enableFreeze } from "react-native-screens";

export const setupOnAppStart = () => {
  preventAutoHideAsync();
  // enableFreeze(true);
  LogBox.ignoreLogs(["findNodeHandle"]);
};
