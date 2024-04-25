import { Button } from "components";
import { Link } from "expo-router";
import { ScrollView } from "react-native";

export default function Languages() {
  return (
    <ScrollView>
      <Link href="example-sheet" asChild>
        <Button title="Open example-sheet" variant="link" />
      </Link>
    </ScrollView>
  );
}
