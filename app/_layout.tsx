import "i18n";
import "unistyles";

import { Slot } from "expo-router";
import {
  ScreenTrackingCallback,
  useFontsSetup,
  useOrientationLock,
  useQuickActionSetup,
  useScreenTracking,
} from "hooks";
import { setupOnAppStart } from "setupOnAppStart";

setupOnAppStart();

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
