import { useSession } from "@mobile/auth";
import { Screen } from "@mobile/components";
import { Redirect, Stack } from "expo-router";
import { Text } from "react-native";

export default function Protected() {
  const { session, isLoading } = useSession();

  // You can keep the splash screen open, or render a loading screen like we do here.
  if (isLoading) {
    return (
      <Screen edges={["top"]}>
        <Screen.ScrollView alignX={"center"} alignY={"center"}>
          <Text>Loading...</Text>
        </Screen.ScrollView>
      </Screen>
    );
  }

  // Only require authentication within the (app) group's layout as users
  // need to be able to access the (auth) group and sign in again.
  if (!session) {
    // On web, static rendering will stop here as the user is not authenticated
    // in the headless Node process that the pages are rendered in.
    return <Redirect href="/sign-in" />;
  }

  // This layout can be deferred because it's not the root layout.
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
