import { StatusBar } from "expo-status-bar";
import { StrictMode } from "react";
import { useTranslation } from "react-i18next";
import { Button, ScrollView, Text } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

function App() {
  const { styles } = useStyles(stylesheet);
  const { t, i18n } = useTranslation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>
        <Text>Open up App.js to start working on your app!{"\n"}</Text>
        <Text>{t("Welcome to React")}</Text>
      </Text>
      <Button
        title={`Current language: ${i18n.language}`}
        onPress={() => {
          i18n.changeLanguage(i18n.language === "en" ? "pl" : "en");
        }}
      />
      <StatusBar style="auto" />
    </ScrollView>
  );
}

function Root({ children }) {
  return <>{children}</>;
}

export default function () {
  return (
    <StrictMode>
      <Root>
        <App />
      </Root>
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
  };
});
