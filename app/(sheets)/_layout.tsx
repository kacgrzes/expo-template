import { BottomSheet } from "layouts";
import { FullWindowOverlay } from "react-native-screens";

export default function Sheets() {
  return (
    <BottomSheet
      screenOptions={{
        containerComponent: FullWindowOverlay as any,
      }}
    />
  );
}
