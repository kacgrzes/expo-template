import { BottomSheetNavigationOptions } from "@th3rdwave/react-navigation-bottom-sheet";
import { UnistylesRuntime } from "react-native-unistyles";
import { BackdropComponent } from "./BackdropComponent";
import { HandleComponent } from "./HandleComponent";

export const useCommonBottomSheetOptions = () => {
  return {
    detached: false,
    enableDynamicSizing: true,
    backdropComponent: BackdropComponent,
    handleComponent: HandleComponent,
  } as BottomSheetNavigationOptions;
};

export const useDetachedBottomSheetOptions = () => {
  const commonBottomSheetOptions = useCommonBottomSheetOptions();
  return {
    ...commonBottomSheetOptions,
    detached: true,
    style: {
      marginHorizontal: 16,
    },
    bottomInset: UnistylesRuntime.insets.bottom + 16 ?? 24,
  } as BottomSheetNavigationOptions;
};
