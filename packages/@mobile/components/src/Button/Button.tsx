import { forwardRef } from "react";
import { View } from "react-native";
import { RectButtonProps } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  interpolate,
  useDerivedValue,
  withTiming,
  Extrapolation,
} from "react-native-reanimated";
import { createStyleSheet, useStyles } from "react-native-unistyles";

import { ActivityIndicator } from "../ActivityIndicator";
import { AnimatedRectButton } from "../AnimatedButtons";
import { Text } from "../Text";
import { useDisabledStyle } from "../hooks/useDisabledStyle";
import { CommonAccessoryProps, CommonFormProps, Size, Status } from "../types";

// TODO: Add Button.Group

type ButtonVariant = "solid" | "outline" | "link" | "apple" | "google";

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

    const loadingProgress = useDerivedValue(() =>
      withTiming(loading ? 1 : 0, { duration: 200 }),
    );

    const titleAnimatedStyle = useAnimatedStyle(() => ({
      opacity: interpolate(
        loadingProgress.value,
        [0, 1],
        [1, 0],
        Extrapolation.CLAMP,
      ),
      transform: [
        {
          translateY: interpolate(
            loadingProgress.value,
            [0, 1],
            [0, 10],
            Extrapolation.CLAMP,
          ),
        },
      ],
    }));

    const loaderAnimatedStyle = useAnimatedStyle(() => ({
      opacity: loadingProgress.value,
      transform: [
        {
          translateY: interpolate(
            loadingProgress.value,
            [0, 1],
            [-10, 0],
            Extrapolation.CLAMP,
          ),
        },
      ],
    }));

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
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          {left}
          <View style={styles.titleContainer}>
            {loading ? (
              <Animated.View
                style={[styles.loaderContainer, loaderAnimatedStyle]}
              >
                <ActivityIndicator status="muted" />
              </Animated.View>
            ) : null}
            <Animated.View style={titleAnimatedStyle}>
              <Text variant="label1" numberOfLines={1} style={styles.title}>
                {title}
              </Text>
            </Animated.View>
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
      height: 44,
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
          apple: {
            backgroundColor: theme.name === "light" ? "#000" : "#fff",
            borderColor: theme.name === "light" ? "#000" : "#fff",
          },
          google: {
            backgroundColor: theme.name === "light" ? "#FFFFFF" : "#131314",
            borderColor: theme.name === "light" ? "#747775" : "#8E918F",
          },
          solid: {
            backgroundColor: theme.colors.primary,
            borderColor: theme.colors.primary,
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
          apple: {
            color: theme.name === "light" ? "#FFFFFF" : "#000000",
          },
          google: {
            color: theme.name === "light" ? "#1F1F1F" : "#E3E3E3",
          },
          solid: {
            // color: theme.colors.typography,
            color: "white",
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
    loaderContainer: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      justifyContent: "center",
      alignItems: "center",
    },
  };
});
