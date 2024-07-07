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

const AnimatedKeyboardAwareScrollView = Reanimated.createAnimatedComponent(
  KeyboardAwareScrollView,
);

const ScreenContext = createContext<{
  footerHeight?: number;
}>({
  footerHeight: undefined,
});

export const useScreenContext = () => useContext(ScreenContext);

type ScreenProps = {
  children?: React.ReactNode;
  footer?: ReactElement<BoxProps>;
};

const offset = {
  opened: UnistylesRuntime.insets.bottom,
  closed: 0,
};

function ScreenScrollView({ children, ...rest }: KeyboardAwareScrollViewProps) {
  const { footerHeight = 0 } = useScreenContext();
  const { height, progress } = useReanimatedKeyboardAnimation();
  const { bottom } = useSafeAreaInsets();

  const extraBottom = useDerivedValue(() => {
    return footerHeight === 0
      ? interpolate(progress.value, [0, 1], [bottom, 0])
      : interpolate(
          progress.value,
          [0, 1],
          [footerHeight, footerHeight - bottom],
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
      keyboardDismissMode={"interactive"}
      {...rest}
      animatedProps={animatedProps}
      extraKeyboardSpace={0}
      bottomOffset={footerHeight + 16}
    >
      {children}
      <Reanimated.View style={animatedSpacerStyle} />
    </AnimatedKeyboardAwareScrollView>
  );
}

export function Screen({ children, footer }: ScreenProps) {
  const { styles } = useStyles(stylesheet);
  const { height: footerHeight, onLayout: onFooterLayout } = useLayout();

  const value = useMemo(() => {
    return {
      footerHeight,
    };
  }, [footerHeight]);

  return (
    <ScreenContext.Provider value={value}>
      <Box flex={"fluid"}>
        <Box key={footerHeight}>{children}</Box>
        <KeyboardStickyView
          offset={offset}
          onLayout={onFooterLayout}
          style={styles.keyboardStickyView}
        >
          {footer
            ? cloneElement(footer, {
                children: (
                  <Fragment>
                    {footer.props.children}
                    <Box style={styles.footer} />
                  </Fragment>
                ),
              })
            : null}
        </KeyboardStickyView>
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
  };
});
