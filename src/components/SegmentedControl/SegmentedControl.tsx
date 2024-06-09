import { View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { Text } from "components/Text";

type SegmentedControlProps = { full?: boolean };

export function SegmentedControl({ full }: SegmentedControlProps) {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.track}>
      <View style={styles.segment(true, full)}>
        <Text>Segment #1</Text>
      </View>
      <View style={styles.segment(false, full)}>
        <Text>Segment #2</Text>
      </View>
      <View style={styles.segment(false, full)}>
        <Text>Segment #3</Text>
      </View>
    </View>
  );
}

const stylesheet = createStyleSheet((theme) => {
  return {
    track: {
      flexDirection: "row",
      backgroundColor: "red",
      padding: 2,
      borderRadius: 4,
    },
    segment: (active: boolean, full) => {
      return {
        backgroundColor: active ? "lightgrey" : undefined,
        padding: 8,
        borderRadius: 2,
        flex: full ? 1 : undefined,
        justifyContent: "center",
        alignItems: "center",
      };
    },
  };
});
