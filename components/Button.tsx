import { forwardRef } from "react";
import { View } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { createStyleSheet, useStyles } from "react-native-unistyles";

import { Text } from "./Text";

type ButtonProps = {
  title: string;
  onPress?: RectButtonProps["onPress"];
};

export const Button = forwardRef<any, ButtonProps>(
  ({ title, onPress }, ref) => {
    const { styles } = useStyles(stylesheet);

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
      backgroundColor: theme.colors.typography,
      padding: 16,
      borderRadius: 8,
      alignItems: "center",
      justifyContent: "center",
    },
    title: {
      color: theme.colors.background,
    },
  };
});
