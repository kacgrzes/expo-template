import { StatusBar } from "expo-status-bar";
import { useTranslation } from "react-i18next";
import { Pressable, ScrollView, Text, View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { env } from "utils/env";

export default function App() {
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
      <View style={styles.jsonViewer}>
        <Text>{JSON.stringify(env, null, 2)}</Text>
      </View>
      <StatusBar style="auto" />
    </ScrollView>
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
    jsonViewer: { padding: 16, backgroundColor: "lightgrey", borderRadius: 4 },
  };
});
