import { ScrollView, ListItem } from "components";
import { applicationName } from "expo-application";

export function HelpScreen() {
  return (
    <ScrollView>
      <ListItem title={`What is ${applicationName}`} onPress={() => {}} />
      <ListItem title="Get started" onPress={() => {}} />
      <ListItem title="Community guidelines" onPress={() => {}} />
      <ListItem title="Help and FAQ" onPress={() => {}} />
    </ScrollView>
  );
}
