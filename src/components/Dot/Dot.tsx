import { View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

export function Dot() {
  const { styles } = useStyles(stylesheet);

  return <View style={styles.dot} />;
}

const stylesheet = createStyleSheet((theme) => {
  return {
    dot: {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: "rgb(255, 59, 48)",
    },
  };
});
