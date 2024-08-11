import React from "react";
import { ActivityIndicator as ActivityIndicatorComponent } from "react-native";

import { ActivityIndicatorProps } from "./ActivityIndicator.types";
import { useStatusColor } from "./useStatusColor";

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
