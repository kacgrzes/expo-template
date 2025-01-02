/** eslint-disable @typescript-eslint/no-unused-vars */
import { Stack } from "expo-router";
import { useTranslation } from "react-i18next";
import { Button } from "react-native";
import { useStyles } from "react-native-unistyles";

export default function Modals() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { theme } = useStyles();
  const { t } = useTranslation();

  return (
    <Stack
      screenOptions={{
        presentation: "modal",
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
