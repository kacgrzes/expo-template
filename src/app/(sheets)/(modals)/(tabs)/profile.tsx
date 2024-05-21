import { TextInput } from "components";
import React from "react";
import { StyleSheet, View } from "react-native";
import {
  useReanimatedKeyboardAnimation,
  KeyboardStickyView,
} from "react-native-keyboard-controller";
import Animated, {
  interpolate,
  useDerivedValue,
} from "react-native-reanimated";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
  row: {
    flexDirection: "row",
  },
});

export default function KeyboardAnimation() {
  // 1. we need to use hook to get an access to animated values
  const { height, progress } = useReanimatedKeyboardAnimation();

  const scale = useDerivedValue(() => {
    return interpolate(progress.value, [0, 1], [1, 2]);
  });

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Animated.View
          style={{
            width: 50,
            height: 50,
            backgroundColor: "#17fc03",
            borderRadius: 15,
            // 2. we can apply any transformations we want
            transform: [{ translateY: height }, { scale }],
          }}
        />
      </View>
      <KeyboardStickyView style={{ width: "100%" }}>
        <TextInput style={{ marginTop: 50 }} />
      </KeyboardStickyView>
    </View>
  );
}
