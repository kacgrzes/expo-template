import "../unistyles";

import { Slot } from "expo-router";
import { enableFreeze } from "react-native-screens";

import { useFontsSetup } from "../hooks/useFontsSetup";
import { useOrientationLock } from "../hooks/useOrientationLock";
import { useQuickActionSetup } from "../hooks/useQuickActionSetup";
import { useScreenTracking } from "../hooks/useScreenTracking";

enableFreeze(true);

export default function () {
  useOrientationLock();
  useQuickActionSetup();
  useScreenTracking(() => {
    console.log("Screen changed");
  });

  const fontsLoaded = useFontsSetup();

  if (!fontsLoaded) {
    return null;
  }

  return <Slot />;
}
