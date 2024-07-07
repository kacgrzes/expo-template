import { Box, BoxProps } from "@grapp/stacks";
import { useLayout } from "@react-native-community/hooks";
import React, {
  createContext,
  useContext,
  useMemo,
  ReactElement,
  cloneElement,
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
  noBottomEdge?: boolean;
}>({
  footerHeight: undefined,
  noBottomEdge: false,
});

export const useScreenContext = () => useContext(ScreenContext);

type ScreenProps = {
  children?: React.ReactNode;
  fab?: ReactElement<FABProps>;
  footer?: ReactElement<BoxProps>;
  noBottomEdge?: boolean;
};

function ScreenScrollView({
  children,
  contentContainerStyle,
  ...rest
}: KeyboardAwareScrollViewProps) {
  const { footerHeight = 0, noBottomEdge } = useScreenContext();
  const { height, progress } = useReanimatedKeyboardAnimation();
  const { bottom } = useSafeAreaInsets();

  const extraBottom = useDerivedValue(() => {
    return footerHeight === 0
      ? interpolate(progress.value, [0, 1], [noBottomEdge ? 0 : bottom, 0])
      : interpolate(
          progress.value,
          [0, 1],
          [footerHeight, footerHeight - (noBottomEdge ? 0 : bottom)],
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

export function Screen({ children, fab, footer, noBottomEdge }: ScreenProps) {
  const { styles } = useStyles(stylesheet);
  const { height: footerHeight, onLayout: onFooterLayout } = useLayout();

  const value = useMemo(() => {
    return {
      footerHeight,
      noBottomEdge,
    };
  }, [footerHeight, noBottomEdge]);

  return (
    <ScreenContext.Provider value={value}>
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
          {footer
            ? cloneElement(footer, {
                children: (
                  <Fragment>
                    {footer.props.children}
                    {noBottomEdge ? null : <Box style={styles.footer} />}
                  </Fragment>
                ),
              })
            : null}
        </KeyboardStickyView>
        {fab ? (
          <KeyboardStickyView
            style={styles.fabContainer}
            offset={{
              closed: footerHeight
                ? -footerHeight
                : -(noBottomEdge ? 0 : UnistylesRuntime.insets.bottom),
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
