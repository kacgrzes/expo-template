import constate from "constate";
import { useCallback, useMemo, useState } from "react";
import { LayoutChangeEvent, LayoutRectangle, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { AnimatedRectButton } from "../AnimatedButtons";
import { Text } from "../Text";
import { useDisabledStyle } from "../hooks/useDisabledStyle";

type SegmentedControlProps = { disabled?: boolean; full?: boolean };

function Segment({
  disabled,
  full,
  index,
  label,
  onPress,
}: {
  disabled?: boolean;
  full?: boolean;
  index: number;
  label: string;
  onPress?: () => void;
}) {
  const { setMeasurements } = useSegmentedControlContext();
  const { styles } = useStyles(stylesheet);

  const handleLayout = useCallback(
    (event: LayoutChangeEvent) => {
      const layout = event.nativeEvent.layout;
      setMeasurements((p) => {
        const measurements = [...p];
        measurements[index] = layout;
        return measurements;
      });
    },
    [index, setMeasurements],
  );

  return (
    <View onLayout={handleLayout} style={{ flex: full ? 1 : 0 }}>
      <AnimatedRectButton
        enabled={!disabled}
        onPress={onPress}
        style={styles.segment(full)}
      >
        <Text variant="label1">{label}</Text>
      </AnimatedRectButton>
    </View>
  );
}

const useSegmentedControl = () => {
  const [measurements, setMeasurements] = useState<LayoutRectangle[]>([]);

  const value = useMemo(
    () => ({ measurements, setMeasurements }),
    [measurements],
  );

  return value;
};

const [SegmentedControlProvider, useSegmentedControlContext] =
  constate(useSegmentedControl);

const ActiveSegment = ({
  selectedIndex,
  full,
}: {
  selectedIndex: number;
  full?: boolean;
}) => {
  const { styles } = useStyles(stylesheet);
  const { measurements } = useSegmentedControlContext();

  const animatedStyle = useAnimatedStyle(() => {
    const measurement = measurements[selectedIndex];

    if (!measurement) {
      return {
        opacity: 0,
      };
    }

    return {
      width: withTiming(measurement?.width, { duration: 300 }),
      height: withTiming(measurement?.height),
      opacity: withTiming(1, { duration: 300 }),
      transform: [
        {
          translateX: withTiming(measurement?.x, { duration: 300 }),
        },
      ],
    };
  }, [measurements, selectedIndex, full]);

  return <Animated.View style={[styles.activeSegment, animatedStyle]} />;
};

export function SegmentedControl({ disabled, full }: SegmentedControlProps) {
  const { styles } = useStyles(stylesheet);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const disabledStyle = useDisabledStyle({ disabled });

  return (
    <SegmentedControlProvider>
      <Animated.View style={[styles.track, disabledStyle]}>
        <Segment
          disabled={disabled}
          full={full}
          index={0}
          label="Segment #1"
          onPress={() => setSelectedIndex(0)}
        />
        <Segment
          disabled={disabled}
          full={full}
          index={1}
          label="Segment #2"
          onPress={() => setSelectedIndex(1)}
        />
        <Segment
          disabled={disabled}
          full={full}
          index={2}
          label="Segment #3"
          onPress={() => setSelectedIndex(2)}
        />
        <ActiveSegment selectedIndex={selectedIndex} full={full} />
      </Animated.View>
    </SegmentedControlProvider>
  );
}

const stylesheet = createStyleSheet((theme) => {
  return {
    track: {
      flexDirection: "row",
      backgroundColor: theme.name === "dark" ? "grey" : "lightgrey",
      padding: 2,
      borderRadius: 8,
      gap: 2,
      height: 44,
    },
    segment: (full?: boolean) => {
      return {
        height: "100%",
        borderRadius: 6,
        flexGrow: full ? 1 : undefined,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 8,
      };
    },
    activeSegment: {
      backgroundColor: theme.colors.background,
      borderRadius: 6,
      position: "absolute",
      top: 2,
      zIndex: -1,
    },
  };
});
