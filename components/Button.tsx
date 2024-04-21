import { Text } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

type ButtonProps = {
  name: string;
};

export function Button({ name }: ButtonProps) {
  const { styles } = useStyles(stylesheet);

  return <Text style={styles.name}>Hello, {name}</Text>;
}

const stylesheet = createStyleSheet({
  name: {
    color: "pink",
  },
});
