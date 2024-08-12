import { Box } from "@grapp/stacks";
import { StyleSheet, View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { Text } from "../Text";
import { SeparatorProps } from "./Separator.types";

export function Separator({
  children,
  orientation = "horizontal",
}: SeparatorProps) {
  const { styles } = useStyles(stylesheet);

  if (children) {
    return (
      <Box
        direction={orientation === "vertical" ? "column" : "row"}
        gap={4}
        alignX={"center"}
        alignY={"center"}
      >
        <Separator orientation={orientation} />
        {typeof children === "string" ? (
          <Text variant="body2" numberOfLines={1}>
            {children}
          </Text>
        ) : (
          children
        )}
        <Separator orientation={orientation} />
      </Box>
    );
  }

  return <View style={styles.separator({ orientation })} />;
}

const stylesheet = createStyleSheet((theme) => {
  return {
    separator: ({
      orientation,
    }: {
      orientation: "vertical" | "horizontal";
    }) => {
      return {
        backgroundColor: "lightgray",
        flexShrink: 1,
        height: orientation === "vertical" ? "100%" : StyleSheet.hairlineWidth,
        width: orientation === "vertical" ? StyleSheet.hairlineWidth : "100%",
      };
    },
  };
});
