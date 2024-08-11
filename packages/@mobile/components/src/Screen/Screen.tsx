import { Box } from "@grapp/stacks";
import { useLayout } from "@react-native-community/hooks";
import React, { useMemo, MemoExoticComponent } from "react";
import { View } from "react-native";
import { KeyboardStickyView } from "react-native-keyboard-controller";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { ScreenProps } from "./Screen.types";
import { ScreenProvider } from "./ScreenContext";
import { ScreenFlatList } from "./ScreenFlatList";
import { ScreenFooter } from "./ScreenFooter";
import { ScrollToBottom, ScrollToTop } from "./ScreenScrollTo";
import { ScreenScrollView } from "./ScreenScrollView";
import { ScreenSectionList } from "./ScreenSectionList";
import { useBottomTabBarHeight } from "./useBottomTabBarHeight";

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
  ScrollToTop: typeof ScrollToTop;
  ScrollToBottom: typeof ScrollToBottom;
};

export const Screen = ScreenComponent as ScreenComposition;

Screen.FlatList = ScreenFlatList;
Screen.ScrollView = ScreenScrollView;
Screen.SectionList = ScreenSectionList;
Screen.ScrollToTop = ScrollToTop;
Screen.ScrollToBottom = ScrollToBottom;

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
