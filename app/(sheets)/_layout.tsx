import { BottomSheet } from "layouts";
import { FullWindowOverlay } from "react-native-screens";

export default function Sheets() {
  return (
    <BottomSheet
      screenOptions={{
        containerComponent: FullWindowOverlay as any,
        detached: true,
        enableDynamicSizing: false,
      }}>
      <BottomSheet.Screen name="(modals)" />
      <BottomSheet.Screen name="example-sheet" />
    </BottomSheet>
  );
}
