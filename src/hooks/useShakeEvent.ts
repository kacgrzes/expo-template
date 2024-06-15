import { Accelerometer } from "expo-sensors";
import { useEffect } from "react";

//this is shake sensitivity - lowering this will give high sensitivity and increasing this will give lower sensitivity
const THRESHOLD = 300;

export const useShakeEvent = (onShakeDetected: () => void) => {
  useEffect(() => {
    let last_x: number, last_y: number, last_z: number;
    let lastUpdate = 0;

    const subscription = Accelerometer.addListener((accelerometerData) => {
      const { x, y, z } = accelerometerData;
      const currTime = Date.now();
      if (currTime - lastUpdate > 100) {
        const diffTime = currTime - lastUpdate;
        lastUpdate = currTime;
        const speed =
          (Math.abs(x + y + z - last_x - last_y - last_z) / diffTime) * 10000;
        if (speed > THRESHOLD) {
          onShakeDetected();
        }
        last_x = x;
        last_y = y;
        last_z = z;
      }
    });

    return subscription.remove;
  }, [onShakeDetected]);
};
