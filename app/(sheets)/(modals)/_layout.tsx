import { Stack } from "expo-router";

export default function Modals() {
  return (
    <Stack
      screenOptions={{
        header: () => null,
        headerShown: false,
        presentation: "modal",
      }}
    />
  );
}
