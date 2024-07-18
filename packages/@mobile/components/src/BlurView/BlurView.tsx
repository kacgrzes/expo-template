import { BlurViewProps, BlurView as ExpoBlurView } from "expo-blur";
import React from "react";
import { StyleSheet } from "react-native";

export const BlurView = ({ children }: BlurViewProps) => {
  return (
    <ExpoBlurView tint="default" intensity={64} style={StyleSheet.absoluteFill}>
      {children}
    </ExpoBlurView>
  );
};
