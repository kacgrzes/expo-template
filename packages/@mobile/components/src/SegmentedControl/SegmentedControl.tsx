import constate from "constate";
import { useCallback, useMemo, useState } from "react";
import { LayoutChangeEvent, LayoutRectangle, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { AnimatedRectButton } from "../AnimatedButtons";
import { Text } from "../Text";
import { useDisabledStyle } from "../hooks/useDisabledStyle";
import { Size } from "../types";

type SegmentedControlProps = {
  disabled?: boolean;
  full?: boolean;
  onValueChange: (index: number) => void;
  selectedIndex?: number;
  defaultSelectedIndex?: number;
  size: Size;
  // animated?: boolean;
  // multiselect?: boolean;
  // testID?: string;
  // onChange (with event)
  // withItemBorders
};

// TODO
// accessibility!!!
// Swipeable?
// interesting scrollable segments - https://ionicframework.com/docs/api/segment
// SegmentedControl.Root
// SegmentedControl.Item (disabled, value)
// SegmentedControl.Icon
// SegmentedControl.Label
// SegmentedControl.Indicator
// can I do some maskview magic to make the active segment look like it's sliding?

const BORDER_SIZE = 2;
const BORDER_RADIUS = 8;

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

/**
 * - Usually used for selecting between a small set of mutually exclusive options, often in a more compact space.
 * - Best suited for a small number of options (typically 2-5) due to space constraints.
 * - Typically used to switch between different modes or filter options within the same view.
 */
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
          label="Segment #3 very very long text"
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
        <Text variant="label1" numberOfLines={1}>
          {label}
        </Text>
      </AnimatedRectButton>
    </View>
  );
}

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
      width: withTiming(measurement?.width, {
        duration: 200,
        easing: Easing.ease,
      }),
      height: withTiming(measurement?.height),
      opacity: 1,
      transform: [
        {
          translateX: withTiming(measurement?.x, {
            duration: 200,
            easing: Easing.ease,
          }),
        },
      ],
    };
  }, [measurements, selectedIndex, full]);

  return <Animated.View style={[styles.activeSegment, animatedStyle]} />;
};
