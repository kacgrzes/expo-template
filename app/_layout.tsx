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
import { StrictMode, ComponentProps } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { setupOnAppStart } from "setupOnAppStart";

setupOnAppStart();

const recordView: ScreenTrackingCallback = ({ params, pathname }) => {
  console.log("Screen changed", { params, pathname });
};

type OnError = ComponentProps<typeof ErrorBoundary>["onError"];

const handleError: OnError = (error, info) => {
  console.error(error, info.componentStack);
};

export default function Root() {
  const areFontsLoaded = useFontsSetup();
  useOrientationLock();
  useQuickActionSetup();
  useScreenTracking(recordView);
  useShakeEvent();

  return (
    <StrictMode>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ErrorBoundary FallbackComponent={Fallback} onError={handleError}>
          <SessionProvider>
            <Slot key={`${areFontsLoaded}`} />
          </SessionProvider>
        </ErrorBoundary>
      </GestureHandlerRootView>
    </StrictMode>
  );
}
