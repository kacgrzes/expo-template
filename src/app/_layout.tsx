import { Image } from "expo-image";
import { Slot, useRouter } from "expo-router";
import {
  ScreenTrackingCallback,
  useOrientationLock,
  useQuickActionSetup,
  useScreenTracking,
  useShakeEvent,
} from "hooks";
import { useEffect } from "react";
import { isDeveloopment } from "utils";

const recordView: ScreenTrackingCallback = ({ params, pathname }) => {
  console.log("Screen changed", { params, pathname });
};

export default function Root() {
  const router = useRouter();

  useEffect(() => {
    if (isDeveloopment) {
      Image.clearDiskCache();
      Image.clearMemoryCache();
    }
  }, []);

  useOrientationLock();
  useQuickActionSetup();
  useScreenTracking(recordView);
  useShakeEvent(() => {
    router.navigate("/feedback");
  });

  return <Slot />;
}
