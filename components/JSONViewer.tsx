import { View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

import { Text } from "./Text";

type JSONViewerProps = {
  content: object;
};

export function JSONViewer({ content }: JSONViewerProps) {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.jsonViewer}>
      <Text style={styles.mono}>{JSON.stringify(content, null, 2)}</Text>
    </View>
  );
}

const stylesheet = createStyleSheet((theme, runtime) => {
  return {
    jsonViewer: {
      padding: 16,
      backgroundColor: runtime.colorScheme === "dark" ? "#202020" : "#e6e6e6",
      borderRadius: 8,
    },
    mono: {
      fontFamily: theme.fontFamily.IBMPlexMono_400Regular,
    },
  };
});
