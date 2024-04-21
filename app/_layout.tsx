import "i18n";
import "unistyles";

import { SessionProvider } from "auth";
import { Fallback } from "components";
import { Slot } from "expo-router";
import {
  ScreenTrackingCallback,
  useFontsSetup,
  useOrientationLock,
  useQuickActionSetup,
  useScreenTracking,
  useShakeEvent,
} from "hooks";
import { StrictMode } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { setupOnAppStart } from "setupOnAppStart";

setupOnAppStart();

const recordView: ScreenTrackingCallback = ({ params, pathname }) => {
  console.log("Screen changed", { params, pathname });
};

const handleError = (error: Error, info: { componentStack: string }) => {
  console.error(error, info);
};

export default function () {
  const areFontsLoaded = useFontsSetup();
  useOrientationLock();
  useQuickActionSetup();
  useScreenTracking(recordView);
  useShakeEvent();

  return (
    <StrictMode>
      <ErrorBoundary FallbackComponent={Fallback} onError={handleError}>
        <SessionProvider>
          <Slot key={`${areFontsLoaded}`} />
        </SessionProvider>
      </ErrorBoundary>
    </StrictMode>
  );
}
