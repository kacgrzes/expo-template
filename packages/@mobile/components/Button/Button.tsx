/** eslint-disable import/no-unresolved */
import { forwardRef } from "react";
import { View } from "react-native";
import { RectButtonProps } from "react-native-gesture-handler";
import { createStyleSheet, useStyles } from "react-native-unistyles";

import { ActivityIndicator } from "../ActivityIndicator";
import { AnimatedRectButton } from "../AnimatedButtons";
import { Text } from "../Text";
// eslint-disable-next-line import/no-unresolved
import { useDisabledStyle } from "../hooks/useDisabledStyle";
import { CommonAccessoryProps, CommonFormProps, Size, Status } from "../types";

// TODO: Add Button.Group

type ButtonVariant = "solid" | "outline" | "link";

export type ButtonProps = CommonFormProps &
  CommonAccessoryProps & {
    full?: boolean;
    loading?: boolean;
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
      loading = false,
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
    const disabledStyle = useDisabledStyle({ disabled: disabled || loading });

    return (
      <AnimatedRectButton
        activeOpacity={theme.opacity}
        enabled={!disabled && !loading}
        {...rest}
        style={[styles.container, style, disabledStyle]}
      >
        <View
          accessible
          accessibilityRole="button"
          style={styles.contentContainer}
        >
          {left}
          <View style={styles.titleContainer}>
            {loading ? (
              <ActivityIndicator style={styles.loadingIndicator} />
            ) : null}
            <Text
              numberOfLines={1}
              style={[styles.title, loading && styles.hiddenTitle]}
            >
              {title}
            </Text>
          </View>
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
    titleContainer: {
      position: "relative",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
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
    hiddenTitle: {
      opacity: 0,
    },
    loadingIndicator: {
      position: "absolute",
      left: 0,
      right: 0,
    },
  };
});
