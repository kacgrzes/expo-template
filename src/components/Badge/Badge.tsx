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
      alignItems: "center",
      backgroundColor: "rgb(255, 59, 48)",
      borderRadius: 9,
      color: "#fff",
      fontFamily: theme.fontFamily.IBMPlexSans_400Regular,
      fontSize: 14,
      height: 18,
      justifyContent: "center",
      lineHeight: 18,
      paddingHorizontal: 4,
    },
  };
});

export const useBadgeStyle = () => useStyles(stylesheet).styles.badge;
