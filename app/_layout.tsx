import "../unistyles";

import { Slot } from "expo-router";
import { enableFreeze } from "react-native-screens";

import { useOrientationLock } from "../hooks/useOrientationLock";
import { useQuickActionSetup } from "../hooks/useQuickActionSetup";

enableFreeze(true);

export default function () {
  useOrientationLock();
  useQuickActionSetup();

  return <Slot />;
}
