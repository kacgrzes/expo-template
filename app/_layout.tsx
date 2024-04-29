import "polyfills";
import "i18n";
import "unistyles";

import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
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
import { ComponentProps, StrictMode } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { UnistylesRuntime, useStyles } from "react-native-unistyles";
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
  useStyles();
  useOrientationLock();
  useQuickActionSetup();
  useScreenTracking(recordView);
  useShakeEvent();

  return (
    <StrictMode>
      <SafeAreaProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <ThemeProvider
            value={
              UnistylesRuntime.themeName === "dark" ? DarkTheme : DefaultTheme
            }>
            <ErrorBoundary FallbackComponent={Fallback} onError={handleError}>
              <SessionProvider>
                <Slot key={`${areFontsLoaded}`} />
              </SessionProvider>
            </ErrorBoundary>
          </ThemeProvider>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </StrictMode>
  );
}
