import { forwardRef } from "react";
import { View } from "react-native";
import { RectButtonProps } from "react-native-gesture-handler";
import { createStyleSheet, useStyles } from "react-native-unistyles";

import { AnimatedRectButton } from "../AnimatedButtons";
import { Text } from "../Text";
import { useDisabledStyle } from "../hooks/useDisabledStyle";
import { CommonAccessoryProps, CommonFormProps, Size, Status } from "../types";

// TODO: Add Button.Group

type ButtonVariant = "solid" | "outline" | "link";

export type ButtonProps = CommonFormProps &
  CommonAccessoryProps & {
    full?: boolean;
    size?: Size;
    status?: Status;
    title: string;
    variant?: ButtonVariant;
  } & Pick<RectButtonProps, "onPress" | "onLongPress" | "testID" | "style">;

export const Button = forwardRef<any, ButtonProps>(
  (
    {
      disabled,
      full,
      left = null,
      right = null,
      size,
      style,
      title,
      variant = "solid",
      ...rest
    },
    _ref,
  ) => {
    const { styles, theme } = useStyles(stylesheet, { variant, full });
    const disabledStyle = useDisabledStyle({ disabled });

    return (
      <AnimatedRectButton
        activeOpacity={theme.opacity}
        enabled={!disabled}
        {...rest}
        style={[styles.container, style, disabledStyle]}
      >
        <View accessible accessibilityRole="button">
          {left}
          <Text numberOfLines={1} style={styles.title}>
            {title}
          </Text>
          {right}
        </View>
      </AnimatedRectButton>
    );
  },
);

Button.displayName = "Button";

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
