import { Box, BoxProps } from "@grapp/stacks";
import { useLayout } from "@react-native-community/hooks";
import React, { ReactElement, useMemo, MemoExoticComponent } from "react";
import { View } from "react-native";
import { KeyboardStickyView } from "react-native-keyboard-controller";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { FABProps } from "../FAB";
import { ScreenProvider } from "./ScreenContext";
import { ScreenFlatList } from "./ScreenFlatList";
import { ScreenFooter } from "./ScreenFooter";
import { ScreenScrollView } from "./ScreenScrollView";
import { ScreenSectionList } from "./ScreenSectionList";
import { useBottomTabBarHeight } from "./useBottomTabBarHeight";

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
    const bottomTabBarHeight = useBottomTabBarHeight();
    const { bottom: bottomInsets } = useSafeAreaInsets();
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

    const offset = useMemo(() => {
      return {
        opened: bottomTabBarHeight ? bottomTabBarHeight : bottomInsets,
        closed: hasBottomEdge && !footer ? -bottomInsets : 0,
      };
    }, [bottomTabBarHeight, bottomInsets, footer, hasBottomEdge]);

    return (
      <ScreenProvider footerHeight={footerHeight} edges={edges}>
        <Box flex="fluid" style={styles.screen}>
          <Box flex={"fluid"}>{children}</Box>
          <KeyboardStickyView offset={offset} style={styles.keyboardStickyView}>
            <View
              style={{
                bottom: footerHeight + 16,
                right: 16,
                position: "absolute",
              }}
            >
              {fab}
            </View>
            <View onLayout={onFooterLayout}>{memoizedFooter}</View>
          </KeyboardStickyView>
        </Box>
      </ScreenProvider>
    );
  },
);

type ScreenComposition = MemoExoticComponent<typeof ScreenComponent> & {
  FlatList: typeof ScreenFlatList;
  ScrollView: typeof ScreenScrollView;
  SectionList: typeof ScreenSectionList;
};

export const Screen = ScreenComponent as ScreenComposition;

Screen.FlatList = ScreenFlatList;
Screen.ScrollView = ScreenScrollView;
Screen.SectionList = ScreenSectionList;

const stylesheet = createStyleSheet((theme) => ({
  screen: {
    backgroundColor: theme.colors.background,
  },
  keyboardStickyView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
}));
