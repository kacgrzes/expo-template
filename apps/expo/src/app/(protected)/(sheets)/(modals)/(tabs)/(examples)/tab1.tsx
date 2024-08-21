import { useToggle } from "@common/hooks";
import {
  Button,
  Notifier,
  Screen,
  Skeleton,
  Stepper,
  Text,
  Tooltip,
} from "@mobile/components";
import * as Linking from "expo-linking";
import sample from "lodash/sample";
import { Pressable } from "react-native";
import { Example } from "./example";

export default function Tab1() {
  const redirectUrl = Linking.createURL("index", {
    queryParams: { hello: "world" },
  });
  const [loading, toggle] = useToggle(false);

  return (
    <Screen edges={["bottom"]}>
      <Screen.ScrollView gap={4}>
        <Stepper.Root size="s" defaultValue={0} min={-5} max={5}>
          <Stepper.Decrement />
          <Stepper.Display />
          <Stepper.Increment />
        </Stepper.Root>
        <Tooltip.Root>
          <Tooltip.Trigger>
            <Button title="Toast example" />
          </Tooltip.Trigger>
          <Tooltip.Overlay />
          <Tooltip.Content>
            <Tooltip.Arrow />
          </Tooltip.Content>
        </Tooltip.Root>
        <Button
          title={"Create notification"}
          onPress={() =>
            Notifier.create({
              status: sample(["success", "info", "warning", "error"]),
              title: "Hello",
              description: "This is a notification",
            })
          }
        />
        <Pressable
          accessibilityRole="link"
          onPress={() => {
            Linking.openURL(redirectUrl);
          }}
        >
          <Text>{redirectUrl}</Text>
        </Pressable>
        <Example />
        <Skeleton.Provider>
          <Skeleton.Circle size={40} />
          <Skeleton width={200} height={20} />
          <Skeleton width={150} height={20} />
          <Skeleton width={100} height={20} />
          <Skeleton.Text status="muted" numberOfLines={3} />
          <Pressable onPress={toggle}>
            <Text loading={loading} status="muted">
              Nie jestem w stanie dostarczyć bieżących danych pogodowych ani
              informacji na temat średnich temperatur w konkretnym roku. Jednak
              na podstawie historycznych danych, Gandia, miejscowość w
              Hiszpanii, ma w maju średnią temperaturę około 18-20 stopni
              Celsjusza. Proszę zwrócić uwagę, że te wartości to przybliżenia, a
              rzeczywista temperatura może się różnić w zależności od roku oraz
              warunków pogodowych.
            </Text>
          </Pressable>
        </Skeleton.Provider>
      </Screen.ScrollView>
    </Screen>
  );
}
