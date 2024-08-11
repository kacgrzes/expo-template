import React from "react";
import { RefreshControl as RefreshControlComponent } from "react-native";
import { useStyles } from "react-native-unistyles";
import { RefreshControlProps } from "./RefreshControl.types";

export function RefreshControl(props: RefreshControlProps) {
  const { theme } = useStyles();

  return (
    <RefreshControlComponent
      colors={[theme.colors.background]}
      progressBackgroundColor={theme.colors.typography}
      tintColor={theme.colors.primary}
      {...props}
    />
  );
}
