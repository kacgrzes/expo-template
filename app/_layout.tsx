import "intl-pluralrules";
import "../unistyles";
import "../i18n";

import { Slot } from "expo-router";

import { useFontsSetup } from "../hooks/useFontsSetup";
import { useOrientationLock } from "../hooks/useOrientationLock";
import { useQuickActionSetup } from "../hooks/useQuickActionSetup";
import {
  ScreenTrackingCallback,
  useScreenTracking,
} from "../hooks/useScreenTracking";
import { setupOnAppStart } from "../setupOnAppStart";

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
