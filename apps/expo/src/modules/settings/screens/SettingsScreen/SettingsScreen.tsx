import { ListItem, ScrollView, Switch, Text } from "@/components";
import { useCurrentLanguage } from "@/i18n";
import { Box } from "@grapp/stacks";
import { useRouter } from "expo-router";
import {
  BoxSelect,
  Eraser,
  Globe,
  Info,
  LifeBuoy,
  Moon,
  Share,
  SquarePen,
  Star,
  UserRoundX,
  Vibrate,
} from "lucide-react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function SettingsScreen() {
  const router = useRouter();
  const { bottom } = useSafeAreaInsets();
  const currentLanguage = useCurrentLanguage();

  return (
    <ScrollView contentInset={{ bottom }} scrollIndicatorInsets={{ bottom: 0 }}>
      <Box paddingX={4} marginBottom={4} marginTop={12}>
        <Text variant="label" textTransform="uppercase">
          Appearance
        </Text>
      </Box>
      <ListItem
        icon={Moon}
        title="Appearance"
        details="Use my device settings"
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
        details={currentLanguage.name}
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
      <Box paddingX={4} marginBottom={4} marginTop={12}>
        <Text variant="label" textTransform="uppercase">
          General
        </Text>
      </Box>
      <ListItem
        icon={Info}
        title="About"
        onPress={() => {
          router.navigate("/about");
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
        icon={Share}
        title="Share this app"
        onPress={() => {
          // TODO: Share this app :)
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
        icon={Star}
        title="Rate this app"
        onPress={() => {
          router.navigate("/rate");
        }}
      />
      <Box paddingX={4} marginBottom={4} marginTop={12}>
        <Text variant="label" textTransform="uppercase">
          Other
        </Text>
      </Box>
      <ListItem
        icon={Eraser}
        title="Clear cache"
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
