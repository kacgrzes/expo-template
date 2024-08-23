import { Portal } from "@gorhom/portal";
import { FloatBox } from "@grapp/stacks";
import {
  Canvas,
  Fill,
  Group,
  Size,
  rect,
  rrect,
} from "@shopify/react-native-skia";
import React from "react";
import { StyleSheet } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import {
  runOnJS,
  useDerivedValue,
  useSharedValue,
} from "react-native-reanimated";
import { useStyles } from "react-native-unistyles";
import { useTooltipContext } from "./TooltipProvider";

export const TooltipOverlay = ({
  offset = 8,
  transparent = false,
}: {
  offset?: number;
  transparent?: boolean;
}) => {
  const { theme } = useStyles();
  const { measurement, setVisible, visible } = useTooltipContext();
  const size = useSharedValue<Size>({
    width: 0,
    height: 0,
  });

  const clip = useDerivedValue(() => {
    if (!measurement.value) {
      return undefined;
    }
    const { pageX, pageY, width, height } = measurement.value;
    return rrect(
      rect(
        pageX - offset,
        pageY - offset,
        width + 2 * offset,
        height + 2 * offset,
      ),
      16,
      16,
    );
  }, [measurement, offset]);

  const tapGesture = Gesture.Tap().onEnd(() => {
    runOnJS(setVisible)(false);
  });

  if (!visible) {
    return null;
  }

  if (transparent) {
    return (
      <Portal hostName="overlay">
        <FloatBox onTouchEnd={() => setVisible(false)} offset={0} />
      </Portal>
    );
  }

  return (
    <Portal hostName="overlay">
      <GestureDetector gesture={tapGesture}>
        <Canvas
          onSize={size}
          mode="default"
          style={{
            ...StyleSheet.absoluteFillObject,
            width: "100%",
            height: "100%",
            flex: 1,
          }}
        >
          <Group clip={clip} invertClip>
            <Fill opacity={theme.opacity} />
          </Group>
        </Canvas>
      </GestureDetector>
    </Portal>
  );
};
