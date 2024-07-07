import { Box, BoxProps } from "@grapp/stacks";
import { useLayout } from "@react-native-community/hooks";
import { LinearGradient } from "expo-linear-gradient";
import React, {
  createContext,
  useContext,
  useMemo,
  ReactElement,
  Fragment,
} from "react";
import {
  KeyboardAwareScrollView,
  KeyboardAwareScrollViewProps,
  KeyboardStickyView,
  useReanimatedKeyboardAnimation,
} from "react-native-keyboard-controller";
import Reanimated, {
  interpolate,
  useAnimatedProps,
  useAnimatedStyle,
  useDerivedValue,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  UnistylesRuntime,
  createStyleSheet,
  useStyles,
} from "react-native-unistyles";
import { FABProps } from "../FAB";

const AnimatedKeyboardAwareScrollView = Reanimated.createAnimatedComponent(
  KeyboardAwareScrollView,
);

const ScreenContext = createContext<{
  footerHeight?: number;
  hasBottomEdge?: boolean;
}>({
  footerHeight: undefined,
  hasBottomEdge: false,
});

export const useScreenContext = () => useContext(ScreenContext);

type ScreenProps = {
  children?: React.ReactNode;
  fab?: ReactElement<FABProps>;
  footer?: ReactElement<BoxProps>;
  edges?: ("bottom" | "top")[];
};

function ScreenScrollView({
  children,
  contentContainerStyle,
  ...rest
}: KeyboardAwareScrollViewProps) {
  const { footerHeight = 0, hasBottomEdge } = useScreenContext();
  const { height, progress } = useReanimatedKeyboardAnimation();
  const { bottom } = useSafeAreaInsets();

  const extraBottom = useDerivedValue(() => {
    return footerHeight === 0
      ? interpolate(progress.value, [0, 1], [hasBottomEdge ? bottom : 0, 0])
      : interpolate(
          progress.value,
          [0, 1],
          [footerHeight, footerHeight - (hasBottomEdge ? bottom : 0)],
        );
  });

  const animatedProps = useAnimatedProps<KeyboardAwareScrollViewProps>(() => {
    return {
      scrollIndicatorInsets: {
        bottom: -height.value + extraBottom.value,
      },
    };
  });

  const animatedSpacerStyle = useAnimatedStyle(() => {
    return {
      height: extraBottom.value,
    };
  });

  return (
    <AnimatedKeyboardAwareScrollView
      automaticallyAdjustContentInsets={false}
      automaticallyAdjustKeyboardInsets={false}
      automaticallyAdjustsScrollIndicatorInsets={false}
      bottomOffset={footerHeight + 16}
      extraKeyboardSpace={0}
      keyboardDismissMode={"interactive"}
      scrollEventThrottle={1000 / 60} // 60 FPS
      {...rest}
      animatedProps={animatedProps}
    >
      <Box padding={4} style={contentContainerStyle}>
        {children}
      </Box>
      <Reanimated.View style={animatedSpacerStyle} />
    </AnimatedKeyboardAwareScrollView>
  );
}

export function Screen({
  children,
  fab,
  footer,
  edges = ["bottom"],
}: ScreenProps) {
  const { styles, theme } = useStyles(stylesheet);
  const { height: footerHeight, onLayout: onFooterLayout } = useLayout();

  const hasBottomEdge = edges.includes("bottom");
  const hasTopEdge = edges.includes("top");

  const value = useMemo(() => {
    return {
      footerHeight,
      hasBottomEdge,
    };
  }, [footerHeight, hasBottomEdge]);

  return (
    <ScreenContext.Provider value={value}>
      <Box
        flex={"fluid"}
        style={{ marginTop: hasTopEdge ? UnistylesRuntime.insets.top : 0 }}
      >
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
              <LinearGradient
                colors={[
                  theme.colors.background + "00",
                  theme.colors.background,
                ]}
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: footerHeight,
                  zIndex: -20,
                }}
              />
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
    </ScreenContext.Provider>
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
