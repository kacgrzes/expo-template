import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ViewStyle } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

type GradientOverlayProps = {
  position: "top" | "bottom";
  height?: number;
};

export const GradientOverlay: React.FC<GradientOverlayProps> = ({
  position,
  height,
}) => {
  const { styles, theme } = useStyles(stylesheet);

  const colors = [
    theme.colors.background + (position === "top" ? "FF" : "00"),
    theme.colors.background + (position === "top" ? "00" : "FF"),
  ];

  const style: ViewStyle =
    position === "top" ? styles.top(height) : styles.bottom(height);

  return <LinearGradient colors={colors} style={style} />;
};

const stylesheet = createStyleSheet(() => ({
  top: (height: number = 0) =>
    ({
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height,
      zIndex: 20,
    }) as const,
  bottom: (height: number = 0) =>
    ({
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      height,
      zIndex: -20,
    }) as const,
}));
