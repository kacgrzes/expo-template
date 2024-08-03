import { createStyleSheet, useStyles } from "react-native-unistyles";

import { Box, BoxProps } from "@grapp/stacks";
import { Text } from "./Text";

type JSONViewerProps = {
  content: object;
} & BoxProps;

export function JSONViewer({ content, ...rest }: JSONViewerProps) {
  const { styles } = useStyles(stylesheet);

  return (
    <Box borderRadius={8} padding={4} style={styles.jsonViewer} {...rest}>
      <Text variant="code1">{JSON.stringify(content, null, 2)}</Text>
    </Box>
  );
}

const stylesheet = createStyleSheet((theme) => {
  return {
    jsonViewer: {
      backgroundColor: theme.name === "dark" ? "#202020" : "#e6e6e6",
    },
  };
});
