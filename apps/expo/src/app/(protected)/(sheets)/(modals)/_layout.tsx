import { useModalsScreenOptions } from "@mobile/layouts";
import { Stack } from "expo-router";
import { useTranslation } from "react-i18next";

export default function Modals() {
  const screenOptions = useModalsScreenOptions();
  const { t } = useTranslation();

  return (
    <Stack screenOptions={screenOptions}>
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
        name="full-screen-modal"
        options={{
          headerShown: false,
          header: () => null,
          presentation: "transparentModal",
          animation: "fade",
          title: "Full screen modal",
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
