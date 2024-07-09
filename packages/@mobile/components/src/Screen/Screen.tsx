import { Box, BoxProps } from "@grapp/stacks";
import { useLayout } from "@react-native-community/hooks";
import React, { ReactElement, useMemo, FC, MemoExoticComponent } from "react";
import { KeyboardStickyView } from "react-native-keyboard-controller";
import {
  UnistylesRuntime,
  createStyleSheet,
  useStyles,
} from "react-native-unistyles";
import { FABProps } from "../FAB";
import { ScreenProvider } from "./ScreenContext";
import { ScreenFAB } from "./ScreenFAB";
import { ScreenFooter } from "./ScreenFooter";
import { ScreenScrollView, ScreenScrollViewProps } from "./ScreenScrollView";

type ScreenProps = {
  children?: React.ReactNode;
  fab?: ReactElement<FABProps>;
  footer?: ReactElement<BoxProps>;
  edges?: ("bottom" | "top")[];
};

const ScreenComponent = React.memo(
  ({ children, fab, footer, edges = ["bottom"] }: ScreenProps) => {
    const { styles } = useStyles(stylesheet);
    const { height: footerHeight, onLayout: onFooterLayout } = useLayout();
    const hasBottomEdge = edges.includes("bottom");

    const memoizedFooter = useMemo(
      () =>
        footer && (
          <ScreenFooter
            footer={footer}
            hasBottomEdge={hasBottomEdge}
            footerHeight={footerHeight}
          />
        ),
      [footer, hasBottomEdge, footerHeight],
    );

    const memoizedFAB = useMemo(
      () =>
        fab && (
          <ScreenFAB
            fab={fab}
            footerHeight={footerHeight}
            hasBottomEdge={hasBottomEdge}
          />
        ),
      [fab, footerHeight, hasBottomEdge],
    );

    return (
      <ScreenProvider footerHeight={footerHeight} edges={edges}>
        <Box flex="fluid">
          <Box>{children}</Box>
          <KeyboardStickyView
            offset={{
              opened: UnistylesRuntime.insets.bottom,
              closed: 0,
            }}
            onLayout={onFooterLayout}
            style={styles.keyboardStickyView}
          >
            {memoizedFooter}
          </KeyboardStickyView>
          {memoizedFAB}
        </Box>
      </ScreenProvider>
    );
  },
);

type ScreenComposition = MemoExoticComponent<typeof ScreenComponent> & {
  ScrollView: FC<ScreenScrollViewProps>;
};

export const Screen = ScreenComponent as ScreenComposition;

Screen.ScrollView = ScreenScrollView;

const stylesheet = createStyleSheet(() => ({
  keyboardStickyView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
}));
