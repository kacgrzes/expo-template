import { Portal } from "@gorhom/portal";
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
import { useDerivedValue, useSharedValue } from "react-native-reanimated";
import { useStyles } from "react-native-unistyles";
import { useTooltipContext } from "./TooltipProvider";

export const TooltipOverlay = ({ offset = 8 }: { offset?: number }) => {
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

  if (!visible) {
    return null;
  }

  return (
    <Portal hostName="overlay">
      <Canvas
        onTouch={() => {
          setVisible(false);
        }}
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
    </Portal>
  );
};
