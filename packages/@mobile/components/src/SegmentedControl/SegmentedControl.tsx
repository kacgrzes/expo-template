import { getValidChildren } from "@common/utils";
import { ReactNode, cloneElement, useMemo, useState } from "react";
import Animated from "react-native-reanimated";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { useDisabledStyle } from "../hooks/useDisabledStyle";
import { Size } from "../types";
import { SegmentedControlProvider } from "./SegmentedControlContext";
import { SegmentedControlIndicator } from "./SegmentedControlIndicator";
import { SegmentedControlItem } from "./SegmentedControlItem";
import { BORDER_RADIUS, BORDER_SIZE } from "./consts";

type SegmentedControlProps = {
  children?: ReactNode;
  defaultSelectedIndex?: number;
  disabled?: boolean;
  full?: boolean;
  onValueChange?: (index: number) => void;
  selectedIndex?: number;
  size?: Size;
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

/**
 * - Usually used for selecting between a small set of mutually exclusive options, often in a more compact space.
 * - Best suited for a small number of options (typically 2-5) due to space constraints.
 * - Typically used to switch between different modes or filter options within the same view.
 */
export function SegmentedControl({
  children,
  disabled = false,
  full = false,
}: SegmentedControlProps) {
  const { styles } = useStyles(stylesheet);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const disabledStyle = useDisabledStyle({ disabled });
  const items = useMemo(() => {
    return getValidChildren(children, SegmentedControl.Item);
  }, [children]);

  return (
    <SegmentedControlProvider
      disabled={disabled}
      full={full}
      numberOfChildren={items.length}
      selectedIndex={selectedIndex}
    >
      <Animated.View style={[styles.track, disabledStyle]}>
        {items.map((child, index) => {
          return cloneElement(child, {
            index,
            onPress: () => setSelectedIndex(index),
          });
        })}
        <SegmentedControlIndicator />
      </Animated.View>
    </SegmentedControlProvider>
  );
}

SegmentedControl.Item = SegmentedControlItem;

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
  };
});
