import { cloneElement, forwardRef } from "react";
import { View } from "react-native";
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
import { Shadow, shadowStyle } from "../Shadow";
import { Text } from "../Text";
import { useDisabledStyle } from "../hooks/useDisabledStyle";
import { ButtonProps, ButtonVariant } from "./Button.types";
import { ButtonProgress } from "./ButtonProgress";

// TODO: Add Button.Group
export const Button = forwardRef<any, ButtonProps>(
  (
    {
      disabled,
      full,
      icon,
      left = null,
      loading = false,
      progress = false,
      right = null,
      size = "m",
      style,
      title,
      variant = "solid",
      ...rest
    },
    _ref,
  ) => {
    const { styles } = useStyles(stylesheet, { variant, full, size });
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
      <Shadow style={styles.shadow(variant)}>
        <AnimatedRectButton
          underlayColor={"black"}
          activeOpacity={0.1}
          enabled={!disabled && !loading}
          {...rest}
          style={[
            styles.container({ hasIcon: icon !== undefined }),
            style,
            disabledStyle,
          ]}
        >
          {progress ? <ButtonProgress variant={variant} /> : null}
          <View
            accessible
            accessibilityRole="button"
            style={styles.innerContainer({ hasIcon: icon !== undefined })}
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
                {title ? (
                  <Text variant="label1" numberOfLines={1} style={styles.title}>
                    {title}
                  </Text>
                ) : (
                  cloneElement(icon, {
                    size: 24,
                    color: "white",
                    ...icon.props,
                  })
                )}
              </Animated.View>
            </View>
            {right}
          </View>
        </AnimatedRectButton>
      </Shadow>
    );
  },
);

Button.displayName = "Button";

const stylesheet = createStyleSheet((theme) => {
  return {
    innerContainer: ({ hasIcon }) => {
      return {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: hasIcon ? 0 : 24,
      };
    },
    container: ({ hasIcon }: { hasIcon: boolean }) => {
      return {
        borderRadius: 8,
        aspectRatio: hasIcon ? 1 : undefined,
        alignItems: "center",
        justifyContent: "center",
        borderColor: "transparent",
        overflow: "hidden",
        variants: {
          variant: {
            apple: {
              backgroundColor: theme.name === "light" ? "#000" : "#fff",
            },
            google: {
              backgroundColor: theme.name === "light" ? "#FFFFFF" : "#131314",
              borderWidth: 2,
              borderColor: theme.name === "light" ? "#747775" : "#8E918F",
            },
            solid: {
              backgroundColor: theme.colors.primary,
            },
            outline: {
              backgroundColor: "transparent",
              borderColor: theme.colors.typography,
              borderWidth: 2,
            },
            link: {
              backgroundColor: "transparent",
              borderColor: "transparent",
            },
          },
          size: {
            s: {
              height: 40,
              // borderRadius: hasIcon ? 40 / 2 : 8,
            },
            m: {
              height: 44,
              // borderRadius: hasIcon ? 44 / 2 : 8,
            },
            l: {
              height: 48,
              // borderRadius: hasIcon ? 48 / 2 : 8,
            },
          },
        },
      };
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
    shadow: (variant: ButtonVariant) => {
      const color = {
        apple: theme.name === "light" ? "#000" : "#fff",
        google: theme.name === "light" ? "#747775" : "#8E918F",
        solid: theme.colors.primary,
        outline: "transparent",
        link: "transparent",
      }[variant];

      return {
        ...shadowStyle({
          color,
          offset: [0, 12],
          opacity: 0.2,
          radius: 20,
        }),
        variants: {
          full: {
            true: {
              alignSelf: "stretch",
              flexGrow: 1,
            },
          },
        },
      };
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
