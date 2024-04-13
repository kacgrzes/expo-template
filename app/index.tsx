import { StatusBar } from "expo-status-bar";
import { StrictMode } from "react";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";
import { useTranslation } from "react-i18next";
import { Button, Pressable, ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createStyleSheet, useStyles } from "react-native-unistyles";

function Fallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <SafeAreaView>
      <Text>Something went wrong!</Text>
      <Text>{error.message}</Text>
      <Button title="Try again" onPress={resetErrorBoundary} />
    </SafeAreaView>
  );
}

function App() {
  const { styles } = useStyles(stylesheet);
  const { t, i18n } = useTranslation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>
        <Text>Open up App.js to start working on your app!{"\n"}</Text>
        <Text>{t("Welcome to React")}</Text>
      </Text>
      <Pressable
        onPress={() => {
          i18n.changeLanguage(i18n.language === "en" ? "pl" : "en");
        }}>
        <Text style={styles.button}>{`Current language: ${i18n.language}`}</Text>
      </Pressable>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

function Root({ children }) {
  return <>{children}</>;
}

const handleError = (error: Error, info: { componentStack: string }) => {
  console.error(error, info);
};

export default function () {
  return (
    <StrictMode>
      <ErrorBoundary FallbackComponent={Fallback} onError={handleError}>
        <Root>
          <App />
        </Root>
      </ErrorBoundary>
    </StrictMode>
  );
}

const stylesheet = createStyleSheet((theme, runtime) => {
  return {
    container: {
      flex: 1,
      backgroundColor: {
        portrait: theme.colors.background,
        landscape: "red",
      }[runtime.orientation],
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      color: theme.colors.typography,
      fontFamily: "OpenSans_400Regular",
      justifyContent: "center",
      textAlign: "center",
    },
    button: {
      padding: 8,
      color: theme.colors.typography,
      fontFamily: "OpenSans_400Regular",
      justifyContent: "center",
      textAlign: "center",
    },
  };
});
