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
import {
  MeasuredDimensions,
  SharedValue,
  useDerivedValue,
  useSharedValue,
} from "react-native-reanimated";

export const TooltipOverlay = ({
  measurement,
  offset = 8,
  onPress,
}: {
  measurement: SharedValue<MeasuredDimensions | null>;
  offset?: number;
  onPress: () => void;
}) => {
  const size = useSharedValue<Size>({
    width: 0,
    height: 0,
  });

  const clip = useDerivedValue(() => {
    if (!measurement.value) {
      return undefined;
    }
    const offset = 8;
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

  return (
    <Canvas
      onTouch={onPress}
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
        <Fill opacity={0.4} />
      </Group>
    </Canvas>
  );
};
