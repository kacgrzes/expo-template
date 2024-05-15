import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { SessionProvider } from "auth";
import { Fallback } from "components";
import { useFontsSetup } from "hooks";
import { ComponentProps, ReactNode } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "unistyles";

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
          <ActionSheetProvider>
            <ErrorBoundary FallbackComponent={Fallback} onError={handleError}>
              <SessionProvider>
                {areFontsLoaded ? children : null}
              </SessionProvider>
            </ErrorBoundary>
          </ActionSheetProvider>
        </ThemeProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
