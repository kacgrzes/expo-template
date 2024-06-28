import {
  BottomSheetNavigationOptions,
  createBottomSheetNavigator,
} from "@th3rdwave/react-navigation-bottom-sheet";
import { withLayoutContext } from "expo-router";

const { Navigator } = createBottomSheetNavigator();

export const BottomSheet = withLayoutContext<
  BottomSheetNavigationOptions,
  typeof Navigator,
  any,
  any
>(Navigator);
