import { LucideIcon, Plus } from "lucide-react-native";
import {
  ComponentProps,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { LayoutChangeEvent, LayoutRectangle, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";
import { createStyleSheet, useStyles } from "react-native-unistyles";
// TODO: check why this component has such a big hit slop
import { AnimatedRectButton } from "../AnimatedButtons";
import { Shadow, shadowStyle } from "../Shadow";

export type FABProps = Pick<
  ComponentProps<typeof AnimatedRectButton>,
  "onPress"
> & {
  Icon?: LucideIcon;
  extended?: boolean;
  label?: string;
};

// TODO: refactor this component to use smaller components
// TODO: fix dynamic label change because right now it doen't work as expected
/**
 * # FAB
 *
 * @component
 *
 * @description A floating action button (FAB) is a design component commonly used in user interfaces to provide a prominent and easily accessible action or function.
 *
 * @example
 *
 * ```tsx
 * <FAB
 *   onPress={() => { console.log("Some action" }}
 * />
 * ```
 */
export function FAB({ onPress, Icon = Plus, extended, label }: FABProps) {
  "use no memo";
  const { styles } = useStyles(stylesheet);
  const [layout, setLayout] = useState<LayoutRectangle>({
    width: 0,
    height: 0,
    x: 0,
    y: 0,
  });

  const opacity = useSharedValue(0);
  const width = useSharedValue(0);

  const firstTime = useRef(false);

  useEffect(() => {
    if (extended && layout.width !== 0 && firstTime.current === false) {
      width.value = withTiming(layout.width, { duration: 300 });
      opacity.value = withDelay(300, withTiming(1, { duration: 300 }));
      firstTime.current = true;
    }
  }, [extended, layout.width, opacity, width]);

  const open = useCallback(() => {
    width.value = withTiming(layout.width, { duration: 300 });
    opacity.value = withDelay(300, withTiming(1, { duration: 300 }));
  }, [opacity, width, layout.width]);

  const close = useCallback(() => {
    opacity.value = withTiming(0, { duration: 300 });
    width.value = withDelay(300, withTiming(0, { duration: 300 }));
  }, [opacity, width]);

  useEffect(() => {
    if (extended) {
      open();
    } else {
      close();
    }
  }, [close, extended, open]);

  const handleLayout = useCallback(
    (event: LayoutChangeEvent) => {
      if (layout.width === 0) {
        setLayout(event.nativeEvent.layout);
      }
    },
    [layout],
  );

  const animatedLabelContainer = useAnimatedStyle(() => {
    return {
      width: width.value,
    };
  }, []);

  const animatedLabel = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  }, [extended]);

  return (
    <Shadow
      style={shadowStyle({
        color: "#000",
        offset: [0, 1],
        opacity: 0.22,
        radius: 2.22,
      })}
    >
      <AnimatedRectButton style={styles.container} onPress={onPress}>
        {/* TODO: add proper color here */}
        <View style={styles.iconContainer}>
          <Icon color={"#fff"} size={24} strokeWidth={2} />
        </View>
        <Animated.View
          style={[
            {
              position: "relative",
              justifyContent: "center",
              alignItems: "center",
              height: 48,
            },
            animatedLabelContainer,
          ]}
        >
          {label ? (
            <Animated.Text
              onLayout={handleLayout}
              style={[styles.label, animatedLabel]}
            >
              {label}
            </Animated.Text>
          ) : null}
        </Animated.View>
      </AnimatedRectButton>
    </Shadow>
  );
}

const stylesheet = createStyleSheet((theme) => {
  const size = 48;

  return {
    iconContainer: {
      height: size,
      width: size,
      justifyContent: "center",
      alignItems: "center",
    },
    container: {
      minHeight: size,
      minWidth: size,
      backgroundColor: theme.colors.primary,
      borderRadius: size / 2,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
    },
    label: {
      paddingRight: 20,
      position: "absolute",
      color: "#fff",
    },
  };
});
