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
import { createStyleSheet, useStyles } from "react-native-unistyles";

type OnError = ComponentProps<typeof ErrorBoundary>["onError"];

const handleError: OnError = (error, info) => {
  console.error(error, info.componentStack);
};

export function Providers({ children }: { children?: ReactNode }) {
  const fontsLoaded = useFontsSetup();
  const { styles } = useStyles(stylesheet);

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={styles.rootView}>
        <ThemeProvider>
          <PortalProvider>
            <KeyboardProvider>
              <ActionSheetProvider>
                <ErrorBoundary
                  FallbackComponent={Fallback}
                  onError={handleError}>
                  <SessionProvider>
                    {fontsLoaded ? children : null}
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

const stylesheet = createStyleSheet(() => {
  return {
    rootView: {
      flex: 1,
    },
  };
});
