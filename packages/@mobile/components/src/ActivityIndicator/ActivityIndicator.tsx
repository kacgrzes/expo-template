import React from "react";
import {
  ActivityIndicator as ActivityIndicatorComponent,
  ActivityIndicatorProps as RNActivityIndicatorProps,
} from "react-native";
import { useStyles } from "react-native-unistyles";
import { Status } from "../types";
import { useStatusColor } from "./useStatusColor";

type ActivityIndicatorProps = {
  size?: "s" | "l";
  status?: Status;
  style?: RNActivityIndicatorProps["style"];
};

export function ActivityIndicator({
  size = "s",
  status,
  style,
}: ActivityIndicatorProps) {
  const color = useStatusColor(status);

  return (
    <ActivityIndicatorComponent
      color={color}
      size={size === "s" ? "small" : "large"}
      style={style}
    />
  );
}
