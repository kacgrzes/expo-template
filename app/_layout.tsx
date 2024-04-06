import "../unistyles";
import { Slot } from "expo-router";
import * as ScreenOrientation from "expo-screen-orientation";

ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);

export default function () {
  return <Slot />;
}
