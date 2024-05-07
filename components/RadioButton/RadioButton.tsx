import { View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

type RadioButtonProps = {
  checked?: boolean;
};

export function RadioButton({ checked }: RadioButtonProps) {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      {checked ? <View style={styles.dot} /> : null}
    </View>
  );
}

const stylesheet = createStyleSheet((theme) => {
  return {
    container: {
      height: 24,
      width: 24,
      borderRadius: 12,
      borderWidth: 2,
      borderColor: theme.colors.typography,
      alignItems: "center",
      justifyContent: "center",
    },
    dot: {
      height: 12,
      width: 12,
      borderRadius: 6,
      backgroundColor: theme.colors.typography,
    },
  };
});
