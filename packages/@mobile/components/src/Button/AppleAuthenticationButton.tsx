import {
  AppleAuthenticationButtonStyle,
  AppleAuthenticationButtonType,
  signInAsync,
} from "expo-apple-authentication";
import { Image } from "expo-image";
import React from "react";
import { useStyles } from "react-native-unistyles";
import { Button, ButtonProps } from "./Button";

type AppleAuthenticationButtonProps = Pick<ButtonProps, "full">;

const RATIO = 195 / 240;
const SIZE = 14;

export const AppleAuthenticationButton = (
  props: AppleAuthenticationButtonProps,
) => {
  const { theme } = useStyles();

  return (
    <Button
      onPress={() => alert("sign up!")}
      left={
        <Image
          style={{ height: SIZE, width: SIZE * RATIO, marginRight: 12 }}
          tintColor={theme.name === "dark" ? "dark" : "white"}
          source={require("./assets/apple-logo.png")}
        />
      }
      title="Sign up with Apple"
      variant="apple"
      {...props}
    />
  );
};
