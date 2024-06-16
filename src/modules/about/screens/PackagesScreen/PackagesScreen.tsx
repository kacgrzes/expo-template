import { JSONViewer } from "@/components";
import PACKAGE_JSON from "packageJson";
import { ScrollView } from "react-native";

export function PackagesScreen() {
  return (
    <ScrollView>
      <JSONViewer content={PACKAGE_JSON.dependencies} />
    </ScrollView>
  );
}
