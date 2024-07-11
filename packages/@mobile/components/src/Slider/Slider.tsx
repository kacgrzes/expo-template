import { Text, View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

type SliderProps = {
  disabled?: boolean;
  initialValue?: number;
  onValueChange?: (value: number) => void;
  value: number;
};

export function Slider({ disabled: _disabled }: SliderProps) {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>This component was generated by Plop</Text>
    </View>
  );
}

const stylesheet = createStyleSheet((theme) => {
  return {
    container: {
      alignSelf: "center",
      flexDirection: "row",
      marginTop: 24,
    },
    text: {
      backgroundColor: theme.colors.typography,
      color: theme.colors.background,
      padding: 8,
    },
  };
});