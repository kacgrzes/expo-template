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
  useContext,
  useEffect,
  useState,
} from "react";

type SegmentedControlProps = { full?: boolean };

function Segment({
  onPress,
  label,
  full,
  index,
}: {
  onPress?: () => void;
  label: string;
  full?: boolean;
  index: number;
}) {
  const { measurements } = useSegmentedControlContext();
  const { styles } = useStyles(stylesheet);
  const animatedRef = useAnimatedRef();

  useEffect(() => {
    runOnUI(() => {
      const measuredDimensions = measure(animatedRef);
      console.log(measuredDimensions);
      if (measuredDimensions) {
        measurements.value[index] = measuredDimensions;
      }
    })();
  }, [animatedRef, index, measurements, full]);

  return (
    <AnimatedRectButton
      onPress={onPress}
      ref={animatedRef}
      style={styles.segment(full)}>
      <Text>{label}</Text>
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

export function SegmentedControl({ full }: SegmentedControlProps) {
  const { styles } = useStyles(stylesheet);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <SegmentedControlProvider>
      <Animated.View style={styles.track}>
        <Segment
          onPress={() => setSelectedIndex(0)}
          index={0}
          label="Segment #1"
          full={full}
        />
        <Segment
          onPress={() => setSelectedIndex(1)}
          index={1}
          label="Segment #2"
          full={full}
        />
        <Segment
          onPress={() => setSelectedIndex(2)}
          index={2}
          label="Segment #3"
          full={full}
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
