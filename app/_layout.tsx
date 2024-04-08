import "../unistyles";

import { Slot, SplashScreen } from "expo-router";
import { enableFreeze } from "react-native-screens";

import { useFontsSetup } from "../hooks/useFontsSetup";
import { useOrientationLock } from "../hooks/useOrientationLock";
import { useQuickActionSetup } from "../hooks/useQuickActionSetup";
import {
  ScreenTrackingCallback,
  useScreenTracking,
} from "../hooks/useScreenTracking";

SplashScreen.preventAutoHideAsync();
enableFreeze(true);

const recordView: ScreenTrackingCallback = ({ params, pathname }) => {
  console.log("Screen changed", { params, pathname });
};

export default function () {
  useOrientationLock();
  useQuickActionSetup();
  useScreenTracking(recordView);

  const fontsLoaded = useFontsSetup();

  if (!fontsLoaded) {
    return null;
  }

  return <Slot />;
}
