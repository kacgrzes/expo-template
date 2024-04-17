import "i18n";
import "unistyles";

import { Slot } from "expo-router";
import { ScreenTrackingCallback, useFontsSetup, useOrientationLock, useQuickActionSetup, useScreenTracking, useShakeEvent } from "hooks";
import { setupOnAppStart } from "setupOnAppStart";

setupOnAppStart();

const recordView: ScreenTrackingCallback = ({ params, pathname }) => {
  console.log("Screen changed", { params, pathname });
};

export default function () {
  useFontsSetup();
  useOrientationLock();
  useQuickActionSetup();
  useScreenTracking(recordView);
  useShakeEvent();

  return <Slot />;
}
