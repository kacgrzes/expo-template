import "../unistyles";

import { Slot } from "expo-router";

import { useOrientationLock } from "../hooks/useOrientationLock";
import { useQuickActionSetup } from "../hooks/useQuickActionSetup";

export default function () {
  useOrientationLock();
  useQuickActionSetup();

  return <Slot />;
}
