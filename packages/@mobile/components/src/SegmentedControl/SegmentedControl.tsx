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

const BORDER_SIZE = 2;
const BORDER_RADIUS = 8;

function Segment({
  active,
  disabled,
  full,
  index,
  label,
  onPress,
}: {
  active?: boolean;
  disabled?: boolean;
  full?: boolean;
  index: number;
  label: string;
  onPress?: () => void;
}) {
  const { setMeasurements, numberOfMeasurements } =
    useSegmentedControlContext();
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
        style={styles.segment(full, active && numberOfMeasurements !== 3)}
      >
        <Text variant="label1">{label}</Text>
      </AnimatedRectButton>
    </View>
  );
}

const useSegmentedControl = () => {
  const [measurements, setMeasurements] = useState<LayoutRectangle[]>([]);

  const value = useMemo(
    () => ({
      measurements,
      numberOfMeasurements: measurements.length,
      setMeasurements,
    }),
    [measurements],
  );

  return value;
};

const [SegmentedControlProvider, useSegmentedControlContext] =
  constate(useSegmentedControl);

const SegmentBackground = ({
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
      opacity: 1,
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
          active={selectedIndex === 0}
          disabled={disabled}
          full={full}
          index={0}
          label="Segment #1"
          onPress={() => setSelectedIndex(0)}
        />
        <Segment
          active={selectedIndex === 1}
          disabled={disabled}
          full={full}
          index={1}
          label="Segment #2"
          onPress={() => setSelectedIndex(1)}
        />
        <Segment
          active={selectedIndex === 2}
          disabled={disabled}
          full={full}
          index={2}
          label="Segment #3"
          onPress={() => setSelectedIndex(2)}
        />
        <SegmentBackground selectedIndex={selectedIndex} full={full} />
      </Animated.View>
    </SegmentedControlProvider>
  );
}

const stylesheet = createStyleSheet((theme) => {
  return {
    track: {
      flexDirection: "row",
      backgroundColor: theme.name === "dark" ? "grey" : "lightgrey",
      padding: BORDER_SIZE,
      borderRadius: BORDER_RADIUS,
      gap: BORDER_SIZE,
      height: 44,
    },
    segment: (full?: boolean, active?: boolean) => {
      return {
        height: "100%",
        borderRadius: BORDER_RADIUS - BORDER_SIZE,
        flexGrow: full ? 1 : undefined,
        backgroundColor: active ? theme.colors.background : undefined,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: BORDER_RADIUS - BORDER_SIZE,
      };
    },
    activeSegment: {
      backgroundColor: theme.colors.background,
      borderRadius: BORDER_RADIUS - BORDER_SIZE,
      position: "absolute",
      top: BORDER_SIZE,
      zIndex: -1,
    },
  };
});
