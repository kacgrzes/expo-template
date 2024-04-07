import * as ScreenOrientation from "expo-screen-orientation";
import { useEffect } from "react";

export const useOrientationLock = () => {
  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);

    return () => {
      ScreenOrientation.unlockAsync();
    };
  }, []);
};
