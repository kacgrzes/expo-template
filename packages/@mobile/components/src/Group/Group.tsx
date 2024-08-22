import { getValidChildren } from "@common/utils";
import { Box } from "@grapp/stacks";
import React, { cloneElement } from "react";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { GroupProps } from "./Group.types";

export const Group: React.FC<GroupProps> = ({
  children,
  orientation = "vertical",
  borderRadius = 0,
  gap,
  validTypes = [Box],
  style,
  ...otherProps
}) => {
  // TODO: move this out to a helper function
  const validChildren = getValidChildren(children, validTypes);

  const childCount = validChildren.length;

  return (
    <Box
      style={[
        { flexDirection: orientation === "horizontal" ? "row" : "column" },
        style,
      ]}
      gap={gap}
      {...otherProps}
    >
      {validChildren.map((child, index) => {
        const isFirst = index === 0;
        const isLast = index === childCount - 1;

        const childStyle: StyleProp<ViewStyle> = {};

        if (typeof borderRadius === "number" && borderRadius > 0) {
          if (orientation === "horizontal") {
            if (isFirst) childStyle.borderTopLeftRadius = borderRadius;
            if (isFirst) childStyle.borderBottomLeftRadius = borderRadius;
            if (isLast) childStyle.borderTopRightRadius = borderRadius;
            if (isLast) childStyle.borderBottomRightRadius = borderRadius;
          } else {
            if (isFirst) childStyle.borderTopLeftRadius = borderRadius;
            if (isFirst) childStyle.borderTopRightRadius = borderRadius;
            if (isLast) childStyle.borderBottomLeftRadius = borderRadius;
            if (isLast) childStyle.borderBottomRightRadius = borderRadius;
          }
        }

        return cloneElement(child, {
          key: index,
          style: StyleSheet.compose(child.props.style, childStyle),
        });
      })}
    </Box>
  );
};
