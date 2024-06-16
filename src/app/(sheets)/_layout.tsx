import { BackdropComponent } from "@/components";
import { BottomSheet } from "@/layouts";
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
  enableDynamicSizing: false,
  snapPoints: [200],
  style: {
    marginHorizontal: 16,
  },
  bottomInset: UnistylesRuntime.insets.bottom ?? 24,
  backdropComponent: null,
};

export default function Sheets() {
  return (
    <BottomSheet screenOptions={COMMON_OPTIONS}>
      <BottomSheet.Screen name="(modals)" />
      <BottomSheet.Screen name="appearance" options={EXAMPLE_SHEET_OPTIONS} />
    </BottomSheet>
  );
}
