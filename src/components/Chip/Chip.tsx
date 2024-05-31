import { View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { Text } from "../Text";

type ChipProps = {
  name: string;
};

/**
Use when
- you can select multiple options
- the options are short and consistant (1 or 2 words)
*/
export function Chip({ name = "Plop" }: ChipProps) {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Chip</Text>
    </View>
  );
}

const stylesheet = createStyleSheet((theme) => {
  return {
    container: {
      alignItems: "center",
      backgroundColor: theme.colors.typography,
      borderRadius: 20,
      flexDirection: "row",
      gap: 4,
      height: 40,
      justifyContent: "center",
      marginTop: 24,
      paddingHorizontal: 12,
    },
    text: {
      color: theme.colors.background,
    },
  };
});
