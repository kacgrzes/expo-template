import React, { useEffect } from "react";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  runOnJS,
} from "react-native-reanimated";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { Shadow, shadowStyle } from "../Shadow";
import { useSliderContext } from "./SliderContext";

type SliderThumbProps = {
  index?: number;
};

export const SliderThumb = ({ index = 0 }: SliderThumbProps) => {
  const { styles } = useStyles(stylesheet);
  const {
    min,
    max,
    value,
    disabled,
    orientation,
    inverted,
    onChange,
    onValueCommit,
  } = useSliderContext();

  const position = useSharedValue(((value[index] - min) / (max - min)) * 100);

  useEffect(() => {
    position.value = ((value[index] - min) / (max - min)) * 100;
  }, [value, min, max, position, index]);

  const updateValue = (newPosition: number) => {
    const actualValue = min + (newPosition / 100) * (max - min);
    const newValues = [...value];
    newValues[index] = actualValue;

    // Ensure thumbs don't cross each other
    if (index > 0 && newValues[index] < newValues[index - 1]) {
      newValues[index] = newValues[index - 1];
    } else if (
      index < value.length - 1 &&
      newValues[index] > newValues[index + 1]
    ) {
      newValues[index] = newValues[index + 1];
    }

    onChange(newValues);
  };

  const gesture = Gesture.Pan()
    .enabled(!disabled)
    .onUpdate((e) => {
      let newPosition = orientation === "vertical" ? e.y : e.x;
      newPosition = Math.max(0, Math.min(newPosition, 100));
      console.log({ newPosition });
      position.value = newPosition;
      // runOnJS(updateValue)(inverted ? 100 - newPosition : newPosition);
    })
    .onEnd(() => {
      if (!disabled) {
        const finalValue = min + (position.value / 100) * (max - min);
        runOnJS(onValueCommit)([...value]);
      }
    });

  const thumbStyle = useAnimatedStyle(() => {
    // const styleKey = orientation === "vertical" ? "bottom" : "left";
    // const positionValue = inverted ? 100 - position.value : position.value;
    return {
      transform: [
        {
          translateX: position.value,
        },
      ],
    };
  });

  return (
    <GestureDetector gesture={gesture}>
      <Shadow
        style={shadowStyle({
          color: "#000",
          offset: [0, 2],
          opacity: 0.2,
          radius: 2,
        })}
      >
        <Animated.View style={[styles.thumb, thumbStyle]} />
      </Shadow>
    </GestureDetector>
  );
};

const stylesheet = createStyleSheet({
  thumb: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#007AFF",
    position: "absolute",
    top: "50%",
    // transform: [{ translateX: -10 }, { translateY: -10 }],
  },
  disabledThumb: {
    backgroundColor: "#A9A9A9",
  },
});
