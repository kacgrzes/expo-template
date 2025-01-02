import { BottomSheetView } from "@gorhom/bottom-sheet";
import { Box } from "@grapp/stacks";
import { BottomSheetTextInput } from "@mobile/components";
import { useReanimatedKeyboardAnimation } from "react-native-keyboard-controller";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { createStyleSheet, useStyles } from "react-native-unistyles";

export default function KeyboardSheet() {
  const { bottom } = useSafeAreaInsets();
  const { styles } = useStyles(stylesheet);
  const { progress } = useReanimatedKeyboardAnimation();

  const animatedSpacerStyle = useAnimatedStyle(() => {
    return {
      height: interpolate(progress.value, [0, 1], [bottom, 16]),
    };
  });

  return (
    <BottomSheetView style={styles.container}>
      <BottomSheetTextInput />
      <Box
        width={100}
        height={100}
        backgroundColor={"green"}
        borderRadius={20}
      />
      <Animated.View style={animatedSpacerStyle} />
    </BottomSheetView>
  );
}

const stylesheet = createStyleSheet(() => {
  return {
    container: {
      paddingHorizontal: 16,
    },
  };
});
