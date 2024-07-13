import React, { forwardRef, memo, useMemo } from "react";
import { Fragment, useRef } from "react";
import {
  KeyboardAwareScrollView,
  KeyboardAwareScrollViewProps,
  useReanimatedKeyboardAnimation,
} from "react-native-keyboard-controller";
import Reanimated, {
  interpolate,
  useAnimatedProps,
  useAnimatedStyle,
  useDerivedValue,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useScrollRef } from "../ScrollView";
import { GradientOverlay } from "./GradientOverlay";
import { useScreenContext } from "./ScreenContext";

const AnimatedKeyboardAwareScrollView = Reanimated.createAnimatedComponent(
  KeyboardAwareScrollView,
);

export type ScreenScrollViewProps = KeyboardAwareScrollViewProps & {
  children?: React.ReactNode;
};

const ScreenScrollViewComponent = forwardRef<any, ScreenScrollViewProps>(
  ({ children, contentContainerStyle, ...rest }, ref) => {
    const { footerHeight = 0, hasBottomEdge, hasTopEdge } = useScreenContext();
    const { height, progress } = useReanimatedKeyboardAnimation();
    const { bottom, top } = useSafeAreaInsets();

    const extraBottom = useDerivedValue(() => {
      return footerHeight === 0
        ? interpolate(progress.value, [0, 1], [hasBottomEdge ? bottom : 0, 0])
        : interpolate(
            progress.value,
            [0, 1],
            [footerHeight, footerHeight - (hasBottomEdge ? bottom : 0)],
          );
    }, [footerHeight, hasBottomEdge, bottom, progress]);

    const animatedProps = useAnimatedProps<KeyboardAwareScrollViewProps>(
      () => ({
        scrollIndicatorInsets: {
          bottom: -height.value + extraBottom.value,
          top: hasTopEdge ? top : 0,
        },
      }),
      [height, extraBottom, hasTopEdge, top],
    );

    const animatedSpacerStyle = useAnimatedStyle(
      () => ({
        height: extraBottom.value,
      }),
      [extraBottom],
    );

    const memoizedContentContainerStyle = useMemo(
      () => [
        {
          padding: 16,
          paddingTop: hasTopEdge ? top + 16 : 16,
        },
        contentContainerStyle,
      ],
      [hasTopEdge, top, contentContainerStyle],
    );

    return (
      <Fragment>
        {hasTopEdge ? (
          <GradientOverlay position="top" height={top + 24} />
        ) : null}
        <AnimatedKeyboardAwareScrollView
          ref={ref}
          automaticallyAdjustContentInsets={false}
          automaticallyAdjustKeyboardInsets={false}
          automaticallyAdjustsScrollIndicatorInsets={false}
          bottomOffset={footerHeight + 16}
          extraKeyboardSpace={0}
          keyboardDismissMode="interactive"
          scrollEventThrottle={16}
          {...rest}
          animatedProps={animatedProps}
          contentContainerStyle={memoizedContentContainerStyle}
        >
          {children}
          <Reanimated.View style={animatedSpacerStyle} />
        </AnimatedKeyboardAwareScrollView>
      </Fragment>
    );
  },
);

ScreenScrollViewComponent.displayName = "ScreenScrollView";

export const ScreenScrollView = memo(ScreenScrollViewComponent);

export const useScreenScrollView = useScrollRef;
