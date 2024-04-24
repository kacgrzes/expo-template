import { Text, View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

type JSONViewerProps = {
  content: object;
};

export function JSONViewer({ content }: JSONViewerProps) {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.jsonViewer}>
      <Text style={{ fontFamily: "IBMPlexMono_400Regular" }}>
        {JSON.stringify(content, null, 2)}
      </Text>
    </View>
  );
}

const stylesheet = createStyleSheet({
  jsonViewer: {
    padding: 16,
    backgroundColor: "#e6e6e6",
    borderRadius: 4,
  },
});
