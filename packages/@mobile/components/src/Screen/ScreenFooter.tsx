import { Box, BoxProps } from "@grapp/stacks";
import React, { ReactElement } from "react";
import {
  UnistylesRuntime,
  createStyleSheet,
  useStyles,
} from "react-native-unistyles";
import { GradientOverlay } from "./GradientOverlay";

type ScreenFooterProps = {
  footer: ReactElement<BoxProps>;
  hasBottomEdge: boolean;
  footerHeight: number;
};

export const ScreenFooter: React.FC<ScreenFooterProps> = React.memo(
  ({ footer, hasBottomEdge, footerHeight }) => {
    const { styles } = useStyles(stylesheet);

    return (
      <>
        {footer}
        {hasBottomEdge && <Box style={styles.footer} />}
        <GradientOverlay position="bottom" height={footerHeight + 24} />
      </>
    );
  },
);

const stylesheet = createStyleSheet((_theme, runtime) => ({
  footer: {
    paddingBottom: runtime.insets.bottom,
  },
}));
