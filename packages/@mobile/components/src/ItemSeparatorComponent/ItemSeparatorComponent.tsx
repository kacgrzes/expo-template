import { Box } from "@grapp/stacks";
import React, { memo, useMemo } from "react";
import { createStyleSheet, useStyles } from "react-native-unistyles";

export const ItemSeparatorComponent = memo(({ size }: { size: number }) => {
  const { styles } = useStyles(stylesheet);

  return <Box style={styles.separator(size)} />;
});

const stylesheet = createStyleSheet((theme) => ({
  separator: (size: number) => {
    return {
      width: theme.stacks.spacing * size,
      height: theme.stacks.spacing * size,
    };
  },
}));

export const useItemSeparatorComponent = ({
  gap,
  ItemSeparatorComponentFromProp,
}: {
  gap?: number;
  // TODO: fix this typign here
  ItemSeparatorComponentFromProp?: any;
}) => {
  return useMemo(() => {
    if (gap) {
      return () => <ItemSeparatorComponent size={gap} />;
    } else {
      return ItemSeparatorComponentFromProp;
    }
  }, [gap, ItemSeparatorComponentFromProp]);
};
