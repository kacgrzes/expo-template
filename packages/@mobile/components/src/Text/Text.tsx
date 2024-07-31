import {
  StyleSheet,
  Text as TextComponent,
  TextProps as TextComponentProps,
  TextStyle,
} from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { Status } from "../types";

type TextAlign = TextStyle["textAlign"];
type TextTransform = TextStyle["textTransform"];
export type TextVariant =
  | "body1"
  | "body2"
  | "body3"
  | "body4"
  | "code"
  | "title"
  | "label1"
  | "label2"
  | "label3"
  | "caption1"
  | "caption2";

type TextProps = TextComponentProps & {
  italic?: boolean;
  status?: Status;
  textAlign?: TextAlign;
  textTransform?: TextTransform;
  variant?: TextVariant;
};

// TODO: create animated version of Text
export function Text({
  italic = false,
  status = "primary",
  style,
  textAlign,
  textTransform,
  variant = "body1",
  ...rest
}: TextProps) {
  const { styles } = useStyles(stylesheet, { variant, status });

  return (
    <TextComponent
      style={StyleSheet.flatten([
        styles.text,
        { textAlign, textTransform, fontStyle: italic ? "italic" : "normal" },
        style,
      ])}
      {...rest}
    />
  );
}

export const Title = ({ variant = "title", ...rest }: TextProps) => {
  return <Text variant={variant} {...rest} />;
};

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
        variant: {
          body1: {
            fontSize: 16,
            lineHeight: 1.5 * 16,
            fontWeight: "400",
            fontFamily: theme.fontFamily.IBMPlexSans_400Regular,
          },
          body2: {
            fontSize: 14,
            lineHeight: 1.5 * 14,
            fontWeight: "400",
            fontFamily: theme.fontFamily.IBMPlexSans_400Regular,
          },
          body3: {
            fontSize: 12,
            lineHeight: 1.5 * 12,
            fontWeight: "400",
            fontFamily: theme.fontFamily.IBMPlexSans_400Regular,
          },
          body4: {
            fontSize: 14,
            lineHeight: 1.5 * 14,
            fontWeight: "400",
            fontFamily: theme.fontFamily.IBMPlexSans_400Regular,
          },
          label1: {
            fontSize: 16,
            lineHeight: 1.5 * 16,
            fontWeight: "500",
            fontFamily: theme.fontFamily.IBMPlexSans_500Medium,
          },
          label2: {
            fontSize: 14,
            lineHeight: 1.5 * 14,
            fontWeight: "500",
            fontFamily: theme.fontFamily.IBMPlexSans_500Medium,
          },
          label3: {
            fontSize: 12,
            lineHeight: 1.5 * 12,
            fontWeight: "500",
            fontFamily: theme.fontFamily.IBMPlexSans_500Medium,
          },
          code: {
            fontSize: 14,
            lineHeight: 1.5 * 14,
            fontWeight: "400",
            fontFamily: theme.fontFamily.IBMPlexMono_400Regular,
          },
          title: {
            fontSize: 24,
            fontWeight: "600",
            fontFamily: theme.fontFamily.IBMPlexSerif_600SemiBold,
          },
          caption1: {
            fontSize: 12,
            lineHeight: 1.5 * 12,
            fontWeight: "600",
            fontFamily: theme.fontFamily.IBMPlexSerif_600SemiBold,
          },
          caption2: {
            fontSize: 10,
            lineHeight: 1.5 * 10,
            fontWeight: "600",
            fontFamily: theme.fontFamily.IBMPlexSerif_600SemiBold,
          },
        },
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
