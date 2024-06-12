import { Box } from "@grapp/stacks";
import { ScrollView, ListItem, Text, Switch } from "components";
import { useRouter } from "expo-router";
import {
  Globe,
  Moon,
  Star,
  Share,
  LifeBuoy,
  BoxSelect,
  Vibrate,
  UserRoundX,
  Eraser,
  Info,
  SquarePen,
} from "lucide-react-native";

export function SettingsScreen() {
  const router = useRouter();

  return (
    <ScrollView>
      <Box paddingX={4} marginBottom={4} marginTop={4}>
        <Text variant="label" textTransform="uppercase">
          Appearance
        </Text>
      </Box>
      <ListItem
        icon={Moon}
        title="Appearance"
        onPress={() => {
          router.navigate("/appearance");
        }}
      />
      <ListItem
        icon={BoxSelect}
        title="App icon"
        onPress={() => {
          router.navigate("/app-icons");
        }}
      />
      <ListItem
        icon={Globe}
        title="Language"
        onPress={() => {
          router.navigate("/languages");
        }}
      />
      <ListItem
        icon={Vibrate}
        title="Haptic feedback"
        details="Use my device settings"
        onPress={() => {
          // TODO
        }}
        right={<Switch />}
      />
      <ListItem
        icon={Star}
        title="Rate this app"
        onPress={() => {
          router.navigate("/rate");
        }}
      />
      <ListItem
        icon={SquarePen}
        title="Give us your feedback"
        onPress={() => {
          // TODO:
        }}
      />
      <ListItem
        icon={Share}
        title="Share this app"
        onPress={() => {
          // TODO: Share this app :)
        }}
      />
      <ListItem
        icon={LifeBuoy}
        title="Help"
        onPress={() => {
          router.navigate("/help");
        }}
      />
      <ListItem
        icon={Eraser}
        title="Clear cache"
        onPress={() => {
          // TODO
        }}
      />
      <ListItem
        icon={Info}
        title="About"
        onPress={() => {
          // TODO
        }}
      />
      <ListItem
        icon={UserRoundX}
        title="Delete account"
        onPress={() => {
          // TODO
        }}
      />
    </ScrollView>
  );
}
