import { createStyleSheet, useStyles } from "react-native-unistyles";

import { Text } from "./Text";
import { Box, BoxProps } from "@grapp/stacks";

type JSONViewerProps = {
  content: object;
} & BoxProps;

export function JSONViewer({ content, ...rest }: JSONViewerProps) {
  const { styles } = useStyles(stylesheet);

  return (
    <Box borderRadius={8} padding={4} style={styles.jsonViewer} {...rest}>
      <Text variant="code">{JSON.stringify(content, null, 2)}</Text>
    </Box>
  );
}

const stylesheet = createStyleSheet((_, runtime) => {
  return {
    jsonViewer: {
      backgroundColor: runtime.themeName === "dark" ? "#202020" : "#e6e6e6",
    },
  };
});
