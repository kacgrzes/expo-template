import React from "react";
import {
  ActivityIndicator as ActivityIndicatorComponent,
  ActivityIndicatorProps as RNActivityIndicatorProps,
} from "react-native";
import { useStyles } from "react-native-unistyles";
import { Status } from "../types";

type ActivityIndicatorProps = {
  size?: "s" | "l";
  status?: Status;
  style?: RNActivityIndicatorProps["style"];
};

export function ActivityIndicator({
  size = "s",
  style,
}: ActivityIndicatorProps) {
  const { theme } = useStyles();

  return (
    <ActivityIndicatorComponent
      color={theme.colors.accent}
      size={size === "s" ? "small" : "large"}
      style={style}
    />
  );
}
