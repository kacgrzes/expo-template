import { BottomSheet } from "@expo/layouts";
import { BackdropComponent } from "@mobile/components";
import { BottomSheetNavigationOptions } from "@th3rdwave/react-navigation-bottom-sheet";
import { UnistylesRuntime } from "react-native-unistyles";

const COMMON_OPTIONS: BottomSheetNavigationOptions = {
  detached: false,
  enableDynamicSizing: true,
  backdropComponent: BackdropComponent,
};

const EXAMPLE_SHEET_OPTIONS: BottomSheetNavigationOptions = {
  ...COMMON_OPTIONS,
  detached: true,
  enableDynamicSizing: true,
  style: {
    marginHorizontal: 16,
  },
  bottomInset: UnistylesRuntime.insets.bottom + 16 ?? 24,
};

export default function Sheets() {
  return (
    <BottomSheet screenOptions={COMMON_OPTIONS}>
      <BottomSheet.Screen name="(modals)" />
      <BottomSheet.Screen name="appearance" options={EXAMPLE_SHEET_OPTIONS} />
    </BottomSheet>
  );
}
