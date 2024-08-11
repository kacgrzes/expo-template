import { BlurView as ExpoBlurView } from "expo-blur";
import React from "react";
import { StyleSheet } from "react-native";
import { BlurViewProps } from "./BlurView.types";

export const BlurView = ({ children }: BlurViewProps) => {
  return (
    <ExpoBlurView tint="default" intensity={64} style={StyleSheet.absoluteFill}>
      {children}
    </ExpoBlurView>
  );
};
