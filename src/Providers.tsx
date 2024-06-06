import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { PortalProvider } from "@gorhom/portal";
import { SessionProvider } from "auth";
import { Fallback, StatusBar } from "components";
import { useFontsSetup } from "hooks";
import { ComponentProps, ReactNode } from "react";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { ErrorBoundary } from "react-error-boundary";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "unistyles";
import { Overlays } from "./Overlays";

type OnError = ComponentProps<typeof ErrorBoundary>["onError"];

const handleError: OnError = (error, info) => {
  console.error(error, info.componentStack);
};

export function Providers({ children }: { children?: ReactNode }) {
  const areFontsLoaded = useFontsSetup();

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ThemeProvider>
          <PortalProvider>
            <KeyboardProvider>
              <ActionSheetProvider>
                <ErrorBoundary
                  FallbackComponent={Fallback}
                  onError={handleError}>
                  <SessionProvider>
                    {areFontsLoaded ? children : null}
                    <StatusBar />
                    <Overlays />
                  </SessionProvider>
                </ErrorBoundary>
              </ActionSheetProvider>
            </KeyboardProvider>
          </PortalProvider>
        </ThemeProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
