import {
  StyleSheet,
  Text as TextComponent,
  TextProps as TextComponentProps,
  TextStyle,
} from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { Status } from "../types";

type TextAlign = TextStyle["textAlign"];
type TextProps = TextComponentProps & {
  textAlign?: TextAlign;
  textTransform?: TextStyle["textTransform"];
  variant?: "body" | "code" | "title" | "label";
  status?: Status;
};

// TODO: create animated version of Text
export function Text({
  style,
  textAlign,
  textTransform,
  variant = "body",
  status = "primary",
  ...rest
}: TextProps) {
  const { styles } = useStyles(stylesheet, { variant, status });

  return (
    <TextComponent
      style={StyleSheet.flatten([
        styles.text,
        { textAlign, textTransform },
        style,
      ])}
      {...rest}
    />
  );
}

export const Title = ({ style, variant = "title", ...rest }: TextProps) => {
  return <Text style={style} variant={variant} {...rest} />;
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
        },
        variant: {
          body: {
            fontSize: 16,
            fontFamily: theme.fontFamily.IBMPlexSans_400Regular,
          },
          label: {
            fontSize: 14,
            fontFamily: theme.fontFamily.IBMPlexSans_500Medium,
          },
          code: {
            fontSize: 14,
            fontFamily: theme.fontFamily.IBMPlexMono_400Regular,
          },
          title: {
            fontSize: 24,
            fontWeight: "bold",
            fontFamily: theme.fontFamily.IBMPlexSerif_600SemiBold,
          },
        },
      },
    },
  };
});
