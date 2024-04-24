import { forwardRef } from "react";
import { View } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { createStyleSheet, useStyles } from "react-native-unistyles";

import { Text } from "./Text";

type ButtonProps = {
  title: string;
  onPress?: RectButtonProps["onPress"];
  variant?: "solid" | "outline";
};

export const Button = forwardRef<any, ButtonProps>(
  ({ title, onPress, variant = "solid" }, ref) => {
    const { styles } = useStyles(stylesheet, { variant });

    return (
      <RectButton
        activeOpacity={0.4}
        onPress={onPress}
        style={styles.container}>
        <View accessible accessibilityRole="button">
          <Text style={styles.title}>{title}</Text>
        </View>
      </RectButton>
    );
  },
);

const stylesheet = createStyleSheet((theme) => {
  return {
    container: {
      padding: 16,
      borderRadius: 8,
      alignItems: "center",
      justifyContent: "center",
      variants: {
        variant: {
          solid: {
            backgroundColor: theme.colors.typography,
          },
          outline: {
            backgroundColor: "transparent",
          },
        },
      },
    },
    title: {
      variants: {
        variant: {
          solid: {
            color: theme.colors.background,
          },
          outline: {
            color: theme.colors.typography,
          },
        },
      },
    },
  };
});
