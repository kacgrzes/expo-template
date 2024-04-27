import { Text as RNText, TextProps, StyleSheet } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

export function Text({ style, ...rest }: TextProps) {
  const { styles } = useStyles(stylesheet);

  return <RNText style={StyleSheet.compose(styles.base, style)} {...rest} />;
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
      fontFamily: "IBMPlexSans_400Regular",
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      fontFamily: "IBMPlexSerif_600SemiBold",
    },
  };
});
