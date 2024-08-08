import React, {
  forwardRef,
  useCallback,
  useEffect,
  useState,
  useImperativeHandle,
  useRef,
} from "react";
import { StyleSheet } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolateColor,
  runOnJS,
} from "react-native-reanimated";
import { Shadow, shadowStyle } from "../Shadow";

interface SwitchProps {
  value?: boolean;
  defaultValue?: boolean;
  onValueChange?: (value: boolean) => void;
  activeColor?: string;
  inactiveColor?: string;
  thumbColor?: string;
}

export interface SwitchHandle {
  toggle: () => void;
  setOn: () => void;
  setOff: () => void;
}

const SPACING = 2;
const SWITCH_WIDTH = 50;
const SWITCH_HEIGHT = 30;
const THUMB_SIZE = SWITCH_HEIGHT - SPACING * 2;
const THUMB_TRAVEL = SWITCH_WIDTH - THUMB_SIZE - SPACING * 2;

export const Switch = forwardRef<SwitchHandle, SwitchProps>(
  (
    {
      value,
      defaultValue = false,
      onValueChange,
      activeColor = "#4CD964",
      inactiveColor = "#D1D1D6",
      thumbColor = "#FFFFFF",
    },
    ref,
  ) => {
    const isControlled = value !== undefined;
    const [internalValue, setInternalValue] = useState(
      isControlled ? value : defaultValue,
    );

    const offset = useSharedValue(internalValue ? THUMB_TRAVEL : 0);

    useEffect(() => {
      if (isControlled && value !== internalValue) {
        setInternalValue(value);
        offset.value = withTiming(value ? THUMB_TRAVEL : 0, {
          duration: 150,
        });
      }
    }, [isControlled, value, internalValue, offset]);

    const animatedStyles = useAnimatedStyle(() => ({
      transform: [{ translateX: offset.value }],
    }));

    const backgroundColorStyle = useAnimatedStyle(() => ({
      backgroundColor: interpolateColor(
        offset.value,
        [0, THUMB_TRAVEL],
        [inactiveColor, activeColor],
      ),
    }));

    const updateValue = useCallback(
      (newValue: boolean) => {
        offset.value = withTiming(newValue ? THUMB_TRAVEL : 0, {
          duration: 150,
        });
        if (!isControlled) {
          setInternalValue(newValue);
        }
        onValueChange?.(newValue);
      },
      [isControlled, offset, onValueChange],
    );

    useImperativeHandle(
      ref,
      () => ({
        toggle: () => {
          updateValue(!internalValue);
        },
        setOn: () => {
          updateValue(true);
        },
        setOff: () => {
          updateValue(false);
        },
      }),
      [internalValue, updateValue],
    );

    const tap = Gesture.Tap().onStart(() => {
      runOnJS(updateValue)(!internalValue);
    });

    const pan = Gesture.Pan()
      .activeOffsetX([-10, 10])
      .onUpdate((event) => {
        let newOffset;
        if (internalValue) {
          // If switch is on, allow dragging from THUMB_TRAVEL to 0
          newOffset = Math.max(
            0,
            Math.min(THUMB_TRAVEL + event.translationX, THUMB_TRAVEL),
          );
        } else {
          // If switch is off, allow dragging from 0 to THUMB_TRAVEL
          newOffset = Math.max(0, Math.min(event.translationX, THUMB_TRAVEL));
        }
        offset.value = newOffset;
      })
      .onEnd(() => {
        const newValue = offset.value > THUMB_TRAVEL / 2;
        runOnJS(updateValue)(newValue);
      });

    const gesture = Gesture.Race(tap, pan);

    return (
      <GestureDetector gesture={gesture}>
        <Animated.View style={[styles.switch, backgroundColorStyle]}>
          <Shadow
            style={shadowStyle({
              color: "#000",
              offset: [0, 2],
              opacity: 0.2,
              radius: 2,
            })}
          >
            <Animated.View
              style={[
                styles.thumb,
                animatedStyles,
                { backgroundColor: thumbColor },
              ]}
            />
          </Shadow>
        </Animated.View>
      </GestureDetector>
    );
  },
);

const styles = StyleSheet.create({
  switch: {
    width: SWITCH_WIDTH,
    height: SWITCH_HEIGHT,
    borderRadius: SWITCH_HEIGHT / 2,
    justifyContent: "center",
  },
  thumb: {
    width: THUMB_SIZE,
    height: THUMB_SIZE,
    borderRadius: THUMB_SIZE / 2,
    margin: 2,
  },
});

export const useSwitchRef = () => useRef<SwitchHandle>(null);
