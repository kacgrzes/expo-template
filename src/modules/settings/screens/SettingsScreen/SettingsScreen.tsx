import { ScrollView, ListItem } from "components";
import { useRouter } from "expo-router";
import {
  Globe,
  Moon,
  Paintbrush,
  Star,
  Share,
  LifeBuoy,
} from "lucide-react-native";

export function SettingsScreen() {
  const router = useRouter();

  return (
    <ScrollView>
      <ListItem
        icon={Moon}
        title="Appearance"
        onPress={() => {
          router.navigate("/appearance");
        }}
      />
      <ListItem
        icon={Paintbrush}
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
        icon={Star}
        title="Rate this app"
        onPress={() => {
          router.navigate("/rate");
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
    </ScrollView>
  );
}
