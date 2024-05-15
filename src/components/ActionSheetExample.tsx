import { useActionSheet } from "@expo/react-native-action-sheet";

import { Button } from "./Button";

export function ActionSheetExample() {
  const { showActionSheetWithOptions } = useActionSheet();

  const onPress = () => {
    const options = ["Delete", "Save", "Cancel"];
    const destructiveButtonIndex = 0;
    const cancelButtonIndex = 2;

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
      },
      (selectedIndex?: number) => {
        switch (selectedIndex) {
          case 1:
            // Save
            break;

          case destructiveButtonIndex:
            // Delete
            break;

          case cancelButtonIndex:
          // Canceled
        }
      },
    );
  };

  return <Button title="ActionSheet example" onPress={onPress} />;
}
