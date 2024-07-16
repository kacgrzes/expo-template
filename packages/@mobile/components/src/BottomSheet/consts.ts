import { BottomSheetNavigationOptions } from "@th3rdwave/react-navigation-bottom-sheet";
import { UnistylesRuntime } from "react-native-unistyles";
import { BackdropComponent } from "../BackdropComponent";

export const COMMON_BOTTOM_SHEET_OPTIONS: BottomSheetNavigationOptions = {
  detached: false,
  enableDynamicSizing: true,
  backdropComponent: BackdropComponent,
};

export const DETACHED_BOTTOM_SHEET_OPTIONS: BottomSheetNavigationOptions = {
  ...COMMON_BOTTOM_SHEET_OPTIONS,
  detached: true,
  style: {
    marginHorizontal: 16,
  },
  bottomInset: UnistylesRuntime.insets.bottom + 16 ?? 24,
};
