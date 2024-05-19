import { View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { Text } from "../Text";

type AvatarProps = {};

export function Avatar({}: AvatarProps) {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.avatar}>
      <Text style={styles.text}>K</Text>
    </View>
  );
}

const stylesheet = createStyleSheet((theme) => {
  return {
    avatar: {
      justifyContent: "center",
      alignItems: "center",
      height: 24,
      width: 24,
      backgroundColor: theme.colors.typography,
      borderRadius: 12,
    },
    text: {
      color: theme.colors.background,
      fontSize: 12,
      fontWeight: "500",
      fontFamily: theme.fontFamily.IBMPlexSans_500Medium,
    },
  };
});
