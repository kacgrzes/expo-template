import { Text as RNText, TextProps, StyleSheet } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

export function Text({ style, ...rest }: TextProps) {
  const { styles } = useStyles(stylesheet);

  return <RNText style={StyleSheet.compose(styles.base, style)} {...rest} />;
}

const stylesheet = createStyleSheet((theme) => {
  return {
    base: {
      fontSize: 16,
      color: theme.colors.typography,
      fontFamily: "OpenSans_400Regular",
    },
  };
});
