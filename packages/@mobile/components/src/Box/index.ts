import { useResponsiveProp, useSpacingHelpers } from "@grapp/stacks";
import partition from "lodash/partition";
import { createStyleSheet, useStyles } from "react-native-unistyles";

const boxPropsList = [
  "alignX",
  "alignY",
  "gap",
  "rowGap",
  "columnGap",
  "padding",
  "paddingX",
  "paddingY",
  "paddingTop",
  "paddingBottom",
  "paddingLeft",
  "paddingRight",
  "paddingEnd",
  "paddingStart",
  "margin",
  "marginX",
  "marginY",
  "marginTop",
  "marginBottom",
  "marginLeft",
  "marginRight",
  "marginStart",
  "marginEnd",
  "direction",
  "wrap",
  "flex",
  "reverse",
  "backgroundColor",
  "borderRadius",
  "borderTopLeftRadius",
  "borderTopRightRadius",
  "borderBottomLeftRadius",
  "borderBottomRightRadius",
  "borderWidth",
  "borderTopWidth",
  "borderRightWidth",
  "borderBottomWidth",
  "borderLeftWidth",
  "borderColor",
  "width",
  "height",
];

type Direction = "row" | "row-reverse" | "column" | "column-reverse";

const resolveDirectionAndReverse = (
  direction?: Direction,
  reversed?: boolean,
) => {
  switch (true) {
    case direction === "row" && reversed:
      return "row-reverse";
    case direction === "row-reverse" && reversed:
      return "row";
    case direction === "column" && reversed:
      return "column-reverse";
    case direction === "column-reverse" && reversed:
      return "column";
    default:
      return direction;
  }
};

export const useBoxProps = (props: Record<string, any>) => {
  const [boxProps, otherProps] = partition(Object.entries(props), ([key]) =>
    boxPropsList.includes(key),
  );

  return {
    boxProps: Object.fromEntries(boxProps),
    otherProps: Object.fromEntries(otherProps),
  };
};

export const useBoxStyle = ({
  alignX,
  alignY,
  direction = "column",
  flexBasis,
  flexWrap,
  reverse,
  ...boxProps
}: Record<(typeof boxPropsList)[0], any>) => {
  const { multiply } = useSpacingHelpers();
  const resolveResponsiveProp = useResponsiveProp();

  const reversed = resolveResponsiveProp(reverse);
  const flexDirection = resolveDirectionAndReverse(
    resolveResponsiveProp(direction),
    reversed,
  );

  const isDirectionColumn =
    flexDirection === "column" || flexDirection === "column-reverse";
  const alignItems = resolveResponsiveProp(isDirectionColumn ? alignX : alignY);
  const justifyContent = resolveResponsiveProp(
    isDirectionColumn ? alignY : alignX,
  );

  console.log({ alignItems, justifyContent });

  const { styles } = useStyles(stylesheet, {
    justifyContent,
    alignItems,
    flexBasis,
    flexWrap,
    flexDirection,
  });

  return {
    ...styles.root,
    gap: multiply(resolveResponsiveProp(boxProps.gap)),
    rowGap: multiply(resolveResponsiveProp(boxProps.rowGap)),
    columnGap: multiply(resolveResponsiveProp(boxProps.columnGap)),
    padding: multiply(resolveResponsiveProp(boxProps.padding)),
    paddingHorizontal: multiply(resolveResponsiveProp(boxProps.paddingX)),
    paddingVertical: multiply(resolveResponsiveProp(boxProps.paddingY)),
    paddingTop: multiply(resolveResponsiveProp(boxProps.paddingTop)),
    paddingBottom: multiply(resolveResponsiveProp(boxProps.paddingBottom)),
    paddingLeft: multiply(resolveResponsiveProp(boxProps.paddingLeft)),
    paddingRight: multiply(resolveResponsiveProp(boxProps.paddingRight)),
    paddingEnd: multiply(resolveResponsiveProp(boxProps.paddingEnd)),
    paddingStart: multiply(resolveResponsiveProp(boxProps.paddingStart)),
    margin: multiply(resolveResponsiveProp(boxProps.margin)),
    marginHorizontal: multiply(resolveResponsiveProp(boxProps.marginX)),
    marginVertical: multiply(resolveResponsiveProp(boxProps.marginY)),
    marginTop: multiply(resolveResponsiveProp(boxProps.marginTop)),
    marginBottom: multiply(resolveResponsiveProp(boxProps.marginBottom)),
    marginLeft: multiply(resolveResponsiveProp(boxProps.marginLeft)),
    marginRight: multiply(resolveResponsiveProp(boxProps.marginRight)),
    marginEnd: multiply(resolveResponsiveProp(boxProps.marginEnd)),
    marginStart: multiply(resolveResponsiveProp(boxProps.marginStart)),
  };
};

const stylesheet = createStyleSheet({
  root: {
    variants: {
      alignItems: {
        left: {
          alignItems: "flex-start",
        },
        center: {
          alignItems: "center",
        },
        right: {
          alignItems: "flex-end",
        },
        stretch: {
          alignItems: "stretch",
        },
        top: {
          alignItems: "flex-start",
        },
        bottom: {
          alignItems: "flex-end",
        },
        between: undefined!,
        around: undefined!,
        evenly: undefined!,
      },
      justifyContent: {
        top: {
          justifyContent: "flex-start",
        },
        center: {
          justifyContent: "center",
        },
        bottom: {
          justifyContent: "flex-end",
        },
        stretch: undefined!,
        left: {
          justifyContent: "flex-start",
        },
        right: {
          justifyContent: "flex-end",
        },
        between: {
          justifyContent: "space-between",
        },
        around: {
          justifyContent: "space-around",
        },
        evenly: {
          justifyContent: "space-evenly",
        },
      },
      flexDirection: {
        row: {
          flexDirection: "row",
        },
        ["row-reverse"]: {
          flexDirection: "row-reverse",
        },
        column: {
          flexDirection: "column",
        },
        ["column-reverse"]: {
          flexDirection: "column-reverse",
        },
      },
      flexWrap: {
        wrap: {
          flexWrap: "wrap",
        },
        ["no-wrap"]: {
          flexWrap: "nowrap",
        },
        ["wrap-reverse"]: {
          flexWrap: "wrap-reverse",
        },
      },
      flexBasis: {
        content: {
          flex: 0,
          flexBasis: "auto",
        },
        fluid: {
          flexGrow: 1,
          flexShrink: 0,
          flexBasis: "0%",
        },
        ["1/2"]: {
          flexBasis: "50%",
        },
        ["1/3"]: {
          flexBasis: "33.3333%",
        },
        ["1/4"]: {
          flexBasis: "25%",
        },
        ["2/3"]: {
          flexBasis: "66.6667%",
        },
        ["3/4"]: {
          flexBasis: "75%",
        },
        ["1/5"]: {
          flexBasis: "20%",
        },
        ["2/5"]: {
          flexBasis: "40%",
        },
        ["3/5"]: {
          flexBasis: "60%",
        },
        ["4/5"]: {
          flexBasis: "80%",
        },
      },
    },
  },
});
