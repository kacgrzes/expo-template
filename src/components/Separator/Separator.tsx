import { View, StyleSheet } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

export function Separator() {
  const { styles } = useStyles(stylesheet);

  return <View style={styles.separator} />;
}

const stylesheet = createStyleSheet((theme) => {
  return {
    separator: {
      alignSelf: "stretch",
      flexDirection: "row",
      flexGrow: 1,
      backgroundColor: theme.colors.typography,
      height: StyleSheet.hairlineWidth,
    },
  };
});
