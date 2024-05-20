import { Slot, useRouter } from "expo-router";
import {
  ScreenTrackingCallback,
  useOrientationLock,
  useQuickActionSetup,
  useScreenTracking,
  useShakeEvent,
} from "hooks";
import { KeyboardController } from "react-native-keyboard-controller";

const recordView: ScreenTrackingCallback = ({ params, pathname }) => {
  console.log("Screen changed", { params, pathname });
};

export default function Root() {
  const router = useRouter();

  useOrientationLock();
  useQuickActionSetup();
  useScreenTracking(recordView);
  useShakeEvent(() => {
    KeyboardController.dismiss();
    router.navigate("/feedback");
  });

  return <Slot />;
}
