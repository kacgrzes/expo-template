import { Box, BoxProps } from "@grapp/stacks";
import { ReactNode } from "react";
import { createStyleSheet, useStyles } from "react-native-unistyles";

import { Button, ButtonProps } from "../Button";
import { Text } from "../Text";

type EmptyStateProps = {
  explanation?: string;
  illustration?: ReactNode;
  title: string;
  cta?: ButtonProps;
} & BoxProps;

export function EmptyState({
  cta,
  explanation,
  illustration,
  title,
  ...rest
}: EmptyStateProps) {
  const { styles } = useStyles(stylesheet);

  return (
    <Box style={styles.container} gap={4} marginX={4} {...rest}>
      {illustration}
      <Text textAlign="center" variant="title">
        {title}
      </Text>
      <Text>{explanation}</Text>
      {cta?.title ? <Button {...cta} /> : null}
    </Box>
  );
}

const stylesheet = createStyleSheet((_theme) => {
  return {
    container: {
      alignSelf: "center",
      justifyContent: "center",
      flexDirection: "column",
    },
  };
});
