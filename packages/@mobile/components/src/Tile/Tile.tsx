import { Box } from "@grapp/stacks";
import React from "react";
import Animated from "react-native-reanimated";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { Pressable } from "../Pressable";
import { useDisabledStyle } from "../hooks/useDisabledStyle";
import { TileProps } from "./Tile.types";

export const Tile = ({
  children,
  selected = false,
  disabled = false,
  style,
  ...props
}: TileProps) => {
  const { styles } = useStyles(stylesheet);
  const disabledStyle = useDisabledStyle({ disabled });

  const tileContent =
    typeof children === "function"
      ? children({ selected, disabled })
      : children;

  return (
    <Pressable
      disabled={disabled}
      style={[styles.tile, selected && styles.selected, disabledStyle, style]}
      {...props}
    >
      {tileContent}
    </Pressable>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  tile: {
    alignSelf: "flex-start",
    borderColor: "lightgrey",
    borderCurve: "circular",
    borderRadius: 16,
    borderWidth: 2,
    padding: 16,
  },
  selected: {
    borderColor: "black",
  },
}));
