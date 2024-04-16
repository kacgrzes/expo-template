import { Stack } from "expo-router";

export default function Modals() {
  return (
    <Stack
      screenOptions={{
        presentation: "modal",
      }}
    />
  );
}
