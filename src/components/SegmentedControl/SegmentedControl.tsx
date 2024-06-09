import { createStyleSheet, useStyles } from "react-native-unistyles";
import { Text } from "components/Text";
import { AnimatedRectButton } from "components/AnimatedButtons";
import Animated, {
  MeasuredDimensions,
  SharedValue,
  measure,
  runOnUI,
  useAnimatedRef,
  useSharedValue,
  makeMutable,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";
import { useDisabledStyle } from "components/hooks/useDisabledStyle";
import { View } from "react-native";

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
  const { measurements } = useSegmentedControlContext();
  const { styles } = useStyles(stylesheet);
  const animatedRef = useAnimatedRef();

  const handleLayout = useCallback(() => {
    runOnUI(() => {
      const measuredDimensions = measure(animatedRef);
      console.log(measuredDimensions);
      if (measuredDimensions) {
        measurements.value[index] = measuredDimensions;
      }
    })();
  }, [animatedRef, index, measurements]);

  return (
    <AnimatedRectButton enabled={!disabled} onPress={onPress} ref={animatedRef}>
      <View style={styles.segment(full)} onLayout={handleLayout}>
        <Text>{label}</Text>
      </View>
    </AnimatedRectButton>
  );
}

const SegmentedControlContext = createContext<{
  measurements: SharedValue<MeasuredDimensions[]>;
}>({
  measurements: makeMutable([]),
});

const useSegmentedControlContext = () => useContext(SegmentedControlContext);

const SegmentedControlProvider = ({ children }: { children: ReactNode }) => {
  const measurements = useSharedValue<MeasuredDimensions[]>([]);

  return (
    <SegmentedControlContext.Provider
      value={{
        measurements,
      }}>
      {children}
    </SegmentedControlContext.Provider>
  );
};

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
    const measurement = measurements.value[selectedIndex];
    console.log({ measurement });

    if (!measurement) {
      return {};
    }

    return {
      width: withTiming(measurement?.width),
      height: withTiming(measurement?.height),
      transform: [
        {
          translateX: withTiming(measurement?.x),
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
      backgroundColor: "grey",
      padding: 2,
      borderRadius: 4,
    },
    segment: (full?: boolean) => {
      return {
        padding: 8,
        borderRadius: 2,
        flexGrow: full ? 1 : undefined,
        justifyContent: "center",
        alignItems: "center",
      };
    },
    activeSegment: {
      backgroundColor: "black",
      borderRadius: 2,
      position: "absolute",
      top: 2,
      zIndex: -1,
    },
  };
});
