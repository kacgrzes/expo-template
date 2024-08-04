import { Box } from "@grapp/stacks";
import {
  Button,
  FAB,
  Screen,
  TextInput,
  useTextInputRef,
} from "@mobile/components";
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
  const textInputRef = useTextInputRef();

  return (
    <Screen
      edges={["top"]}
      fab={<FAB />}
      footer={
        <Box padding={4} backgroundColor={"green"}>
          <TextInput accessibilityRole="none" ref={textInputRef} />
        </Box>
      }
    >
      <Screen.ScrollView gap={2}>
        <Box backgroundColor={"red"} width={100} height={100} />
        <Box backgroundColor={"red"} width={100} height={100} />
        <Box backgroundColor={"red"} width={100} height={100} />
        <Box backgroundColor={"red"} width={100} height={100} />
        <Box backgroundColor={"red"} width={100} height={100} />
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
      </Screen.ScrollView>
    </Screen>
  );
}
