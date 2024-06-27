import { Stack } from "expo-router";
import { useTranslation } from "react-i18next";
import { createStyleSheet, useStyles } from "react-native-unistyles";

export default function Modals() {
  const { styles, theme } = useStyles(stylesheet);
  const { t } = useTranslation();

  return (
    <Stack
      screenOptions={{
        presentation: "modal",
        headerStyle: styles.headerStyle,
        headerTitleStyle: {
          fontFamily: theme.fontFamily.IBMPlexSans_500Medium,
        },
      }}
    >
      <Stack.Screen
        name="(tabs)"
        options={{
          header: () => null,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="about"
        options={{
          title: "About",
        }}
      />
      <Stack.Screen
        name="languages"
        options={{
          title: t("languages"),
        }}
      />
      <Stack.Screen
        name="app-icons"
        options={{
          title: "App icons",
        }}
      />
      <Stack.Screen
        name="help"
        options={{
          title: "Help",
        }}
      />
      <Stack.Screen
        name="settings"
        options={{
          title: "Settings",
        }}
      />
    </Stack>
  );
}

const stylesheet = createStyleSheet((theme) => {
  return {
    headerStyle: {
      backgroundColor: theme.colors.background,
    },
  };
});
