import { forwardRef } from "react";
import { StyleSheet, Text as TextComponent } from "react-native";
import { FadeIn, FadeOut } from "react-native-reanimated";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { Skeleton } from "../Skeleton";
import { AnimatedText } from "./AnimatedText";
import { TextProps, TextRef, TextVariant } from "./Text.types";
import { textVariants } from "./textVariants";

export const Text = forwardRef<TextRef, TextProps>(
  (
    {
      italic = false,
      loading,
      status = "primary",
      style,
      textAlign,
      textTransform,
      variant = "body1",
      ...rest
    },
    ref,
  ) => {
    const { styles } = useStyles(stylesheet, { variant, status });

    if (loading) {
      const { children, numberOfLines } = rest;
      return (
        <Skeleton.Text
          numberOfLines={numberOfLines}
          status={status}
          textAlign={textAlign}
          variant={variant}
        >
          {children}
        </Skeleton.Text>
      );
    }

    if (loading === false) {
      return (
        <AnimatedText
          entering={FadeIn.duration(300)}
          exiting={FadeOut.duration(300)}
          ref={ref}
          style={StyleSheet.flatten([
            styles.text,
            {
              textAlign,
              textTransform,
              fontStyle: italic ? "italic" : "normal",
            },
            style,
          ])}
          {...rest}
        />
      );
    }

    return (
      <TextComponent
        ref={ref}
        style={StyleSheet.flatten([
          styles.text,
          { textAlign, textTransform, fontStyle: italic ? "italic" : "normal" },
          style,
        ])}
        {...rest}
      />
    );
  },
);

type LinkProps = TextProps & {
  onPress: () => void;
};

export const Link = ({ onPress, style, ...rest }: LinkProps) => {
  const { styles } = useStyles(stylesheet);

  return (
    <Text
      onPress={onPress}
      style={[styles.link, style]}
      suppressHighlighting
      {...rest}
    />
  );
};

const stylesheet = createStyleSheet((theme) => {
  return {
    text: {
      color: theme.colors.typography,
      variants: {
        status: {
          primary: {
            color: theme.colors.typography,
          },
          // TODO: improve this!
          secondary: {
            color: theme.colors.typography,
          },
          info: {
            color: theme.colors.info,
          },
          success: {
            color: theme.colors.success,
          },
          warning: {
            color: theme.colors.warning,
          },
          error: {
            color: theme.colors.error,
          },
          muted: {
            color: theme.colors.muted,
          },
        },
        variant: textVariants,
      },
    },
    link: {
      textDecorationLine: "underline",
      textDecorationStyle: "solid",
      textDecorationColor: theme.colors.primary,
      color: theme.colors.primary,
    },
  };
});

export const useTextVariantStyle = (variant: TextVariant = "body1") => {
  return textVariants[variant];
};
