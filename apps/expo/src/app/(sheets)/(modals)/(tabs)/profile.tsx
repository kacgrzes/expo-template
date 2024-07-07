import { Button, TextInput, useTextInputRef } from "@mobile/components";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet, View } from "react-native";
import {
  KeyboardStickyView,
  useReanimatedKeyboardAnimation,
} from "react-native-keyboard-controller";
import Animated from "react-native-reanimated";

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
  const { height } = useReanimatedKeyboardAnimation();
  const textInputRef = useTextInputRef();
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Animated.View
          style={{
            // 2. we can apply any transformations we want
            transform: [{ translateY: height }],
          }}
        >
          <Button
            title="shake"
            onPress={() => {
              textInputRef.current?.shake();
            }}
          />
          <Button
            title="focus"
            onPress={() => {
              textInputRef.current?.focus();
            }}
          />
          <Button
            title="blur"
            onPress={() => {
              textInputRef.current?.blur();
            }}
          />
          <Button
            title="clear"
            onPress={() => {
              textInputRef.current?.clear();
            }}
          />
        </Animated.View>
      </View>
      <KeyboardStickyView
        style={{ width: "100%" }}
        offset={{
          closed: 0,
          opened: tabBarHeight,
        }}
      >
        <TextInput
          accessibilityRole="none"
          ref={textInputRef}
          style={{ marginTop: 50 }}
        />
      </KeyboardStickyView>
    </View>
  );
}
