import {
  Text as TextComponent,
  TextProps as TextComponentProps,
  TextStyle,
  StyleSheet,
} from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

type TextAlign = TextStyle["textAlign"];
type TextProps = TextComponentProps & {
  textAlign?: TextAlign;
  variant?: "body" | "code" | "title" | "label";
};

// TODO: create animated version of Text
export function Text({
  style,
  textAlign,
  variant = "body",
  ...rest
}: TextProps) {
  const { styles } = useStyles(stylesheet, { variant });

  return (
    <TextComponent
      style={StyleSheet.flatten([styles.text, { textAlign }, style])}
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
