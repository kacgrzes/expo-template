import React, { useCallback } from "react";
import { LayoutChangeEvent, View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { Pressable } from "../Pressable";
import { Text } from "../Text";
import { SegmentedControlItemProps } from "./SegmentedControl.types";
import { useSegmentedControlContext } from "./SegmentedControlContext";
import { BORDER_RADIUS, BORDER_SIZE } from "./consts";

export function SegmentedControlItem({
  index,
  label,
  onPress,
}: SegmentedControlItemProps) {
  const { disabled, full, ready, selectedIndex, setMeasurements } =
    useSegmentedControlContext();
  const active = index === selectedIndex;
  const { styles } = useStyles(stylesheet);

  const handleLayout = useCallback(
    (event: LayoutChangeEvent) => {
      const layout = event.nativeEvent.layout;
      setMeasurements((p) => {
        const measurements = [...p];
        measurements[index!] = layout;
        return measurements;
      });
    },
    [index, setMeasurements],
  );

  return (
    <View onLayout={handleLayout} style={{ flex: full ? 1 : 0 }}>
      <Pressable
        disabled={disabled || active}
        onPress={onPress}
        style={styles.item({
          full,
          active: active && !ready,
        })}
      >
        <Text variant="label1" numberOfLines={1}>
          {label}
        </Text>
      </Pressable>
    </View>
  );
}

const stylesheet = createStyleSheet((theme) => {
  return {
    item: ({
      full = false,
      active = false,
    }: {
      full?: boolean;
      active?: boolean;
    }) => {
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
  };
});
