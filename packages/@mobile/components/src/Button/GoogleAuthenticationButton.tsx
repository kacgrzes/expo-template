// import {
//   AppleAuthenticationButtonStyle,
//   AppleAuthenticationButtonType,
//   signInAsync,
// } from "expo-apple-authentication";
import { Image } from "expo-image";
import React from "react";
import { Button, ButtonProps } from "./Button";

type GoogleAuthenticationButtonProps = Pick<ButtonProps, "full">;

const RATIO = 240 / 240;
const SIZE = 14;

export const GoogleAuthenticationButton = (
  props: GoogleAuthenticationButtonProps,
) => {
  return (
    <Button
      onPress={() => alert("sign up!")}
      left={
        <Image
          style={{ height: SIZE, width: SIZE * RATIO, marginRight: 12 }}
          source={require("./assets/google-logo.png")}
        />
      }
      title="Sign up with Google"
      variant="google"
      {...props}
    />
  );
};
