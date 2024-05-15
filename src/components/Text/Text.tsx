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
};

export function Text({ style, textAlign, ...rest }: TextProps) {
  const { styles } = useStyles(stylesheet);

  return (
    <TextComponent
      style={StyleSheet.flatten([styles.base, { textAlign }, style])}
      {...rest}
    />
  );
}

export const Title = ({ style, ...rest }: TextProps) => {
  const { styles } = useStyles(stylesheet);

  return <Text style={StyleSheet.compose(styles.title, style)} {...rest} />;
};

const stylesheet = createStyleSheet((theme) => {
  return {
    base: {
      fontSize: 16,
      color: theme.colors.typography,
      fontFamily: theme.fontFamily.IBMPlexSans_400Regular,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      fontFamily: theme.fontFamily.IBMPlexSerif_600SemiBold,
    },
  };
});
