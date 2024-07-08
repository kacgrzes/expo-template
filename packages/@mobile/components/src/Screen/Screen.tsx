import { Box, BoxProps } from "@grapp/stacks";
import { useLayout } from "@react-native-community/hooks";
import React, { ReactElement, Fragment } from "react";
import { KeyboardStickyView } from "react-native-keyboard-controller";
import {
  UnistylesRuntime,
  createStyleSheet,
  useStyles,
} from "react-native-unistyles";
import { FABProps } from "../FAB";
import { GradientOverlay } from "./GradientOverlay";
import { ScreenProvider } from "./ScreenContext";
import { ScreenScrollView } from "./ScreenScrollView";

type ScreenProps = {
  children?: React.ReactNode;
  fab?: ReactElement<FABProps>;
  footer?: ReactElement<BoxProps>;
  edges?: ("bottom" | "top")[];
};

export function Screen({
  children,
  fab,
  footer,
  edges = ["bottom"],
}: ScreenProps) {
  const { styles } = useStyles(stylesheet);
  const { height: footerHeight, onLayout: onFooterLayout } = useLayout();
  const hasBottomEdge = edges.includes("bottom");

  return (
    <ScreenProvider footerHeight={footerHeight} edges={edges}>
      <Box flex={"fluid"}>
        <Box key={footerHeight}>{children}</Box>
        <KeyboardStickyView
          offset={{
            opened: UnistylesRuntime.insets.bottom,
            closed: 0,
          }}
          onLayout={onFooterLayout}
          style={styles.keyboardStickyView}
        >
          {footer ? (
            <Fragment>
              {footer}
              {hasBottomEdge ? <Box style={styles.footer} /> : null}
              <GradientOverlay position="bottom" height={footerHeight + 24} />
            </Fragment>
          ) : null}
        </KeyboardStickyView>
        {fab ? (
          <KeyboardStickyView
            style={styles.fabContainer}
            offset={{
              closed: footerHeight
                ? -footerHeight
                : -(hasBottomEdge ? UnistylesRuntime.insets.bottom : 0),
              opened: footerHeight
                ? -footerHeight + UnistylesRuntime.insets.bottom
                : 0,
            }}
          >
            {fab}
          </KeyboardStickyView>
        ) : null}
      </Box>
    </ScreenProvider>
  );
}

Screen.ScrollView = ScreenScrollView;

const stylesheet = createStyleSheet((_theme, runtime) => {
  return {
    keyboardStickyView: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
    },
    footer: {
      paddingBottom: runtime.insets.bottom,
    },
    fabContainer: {
      position: "absolute",
      bottom: 16,
      right: 16,
    },
  };
});
