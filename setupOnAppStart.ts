import { preventAutoHideAsync } from "expo-splash-screen";
import { enableFreeze } from "react-native-screens";

export const setupOnAppStart = () => {
  preventAutoHideAsync();
  enableFreeze(true);
};
