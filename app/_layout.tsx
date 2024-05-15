import { Slot } from "expo-router";
import {
  ScreenTrackingCallback,
  useOrientationLock,
  useQuickActionSetup,
  useScreenTracking,
  useShakeEvent,
} from "hooks";

const recordView: ScreenTrackingCallback = ({ params, pathname }) => {
  console.log("Screen changed", { params, pathname });
};

export default function Root() {
  useOrientationLock();
  useQuickActionSetup();
  useScreenTracking(recordView);
  useShakeEvent();

  return <Slot />;
}
