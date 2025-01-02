import { BottomSheet } from "@expo/layouts";
import { useCommonBottomSheetOptions } from "@mobile/components";

export default function Sheets() {
  const commonBottomSheetOptions = useCommonBottomSheetOptions();

  return (
    <BottomSheet screenOptions={commonBottomSheetOptions}>
      <BottomSheet.Screen name="(modals)" />
      <BottomSheet.Screen
        name="appearance"
        // options={DETACHED_BOTTOM_SHEET_OPTIONS}
      />
    </BottomSheet>
  );
}
