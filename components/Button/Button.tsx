import { forwardRef } from "react";
import { View } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { createStyleSheet, useStyles } from "react-native-unistyles";

import { Text } from "../Text";

type ButtonProps = {
  full?: boolean;
  title: string;
  onPress?: RectButtonProps["onPress"];
  variant?: "solid" | "outline" | "link";
};

export const Button = forwardRef<any, ButtonProps>(
  ({ title, onPress, variant = "solid", full }, ref) => {
    const { styles } = useStyles(stylesheet, { variant, full });

    return (
      <RectButton
        activeOpacity={0.4}
        onPress={onPress}
        style={styles.container}>
        <View accessible accessibilityRole="button">
          <Text numberOfLines={1} style={styles.title}>
            {title}
          </Text>
        </View>
      </RectButton>
    );
  },
);

const stylesheet = createStyleSheet((theme) => {
  return {
    container: {
      paddingVertical: 16,
      paddingHorizontal: 24,
      borderRadius: 8,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1,
      borderColor: "transparent",
      variants: {
        full: {
          true: {
            alignSelf: "stretch",
          },
        },
        variant: {
          solid: {
            backgroundColor: theme.colors.typography,
            borderColor: theme.colors.typography,
          },
          outline: {
            backgroundColor: "transparent",
            borderColor: theme.colors.typography,
          },
          link: {
            backgroundColor: "transparent",
            borderColor: "transparent",
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
          link: {
            color: theme.colors.typography,
          },
        },
      },
    },
  };
});
