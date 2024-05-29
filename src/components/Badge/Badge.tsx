import { View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { Text } from "../Text";
import { Dot } from "../Dot";

type BadgeProps = {
  value?: number;
};

export function Badge({ value }: BadgeProps) {
  const { styles } = useStyles(stylesheet);

  if (!value) {
    return <Dot />;
  }

  return (
    <View style={styles.badge}>
      <Text variant="badge" style={{ color: "#fff" }}>
        {value}
      </Text>
    </View>
  );
}

const stylesheet = createStyleSheet((theme) => {
  return {
    badge: {
      borderRadius: 20,
      alignSelf: "center",
      paddingHorizontal: 4,
      backgroundColor: "rgb(255, 59, 48)",
    },
  };
});
