import React from "react";
import { Animated, StyleSheet, TextInput, View } from "react-native";
import { useKeyboardAnimation } from "react-native-keyboard-controller";

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
  const { height, progress } = useKeyboardAnimation();

  const scale = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 2],
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
      <TextInput
        style={{
          width: "100%",
          marginTop: 50,
          height: 50,
          backgroundColor: "yellow",
        }}
      />
    </View>
  );
}
