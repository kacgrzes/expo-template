import { mergeRefs } from "@common/utils";
import { BoxProps } from "@grapp/stacks";
import React, { Fragment, forwardRef, memo, useMemo } from "react";
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
import { useBoxProps, useBoxStyle } from "../Box";
import { ScrollViewRef, useScrollRef } from "../ScrollView";
import { GradientOverlay } from "./GradientOverlay";
import { useScreenContext } from "./ScreenContext";
import { useBottomTabBarHeight } from "./useBottomTabBarHeight";

const AnimatedKeyboardAwareScrollView = Reanimated.createAnimatedComponent(
  KeyboardAwareScrollView,
);

export type ScreenScrollViewProps = KeyboardAwareScrollViewProps & {
  children?: React.ReactNode;
} & BoxProps;

const ScreenScrollViewComponent = forwardRef<
  ScrollViewRef,
  ScreenScrollViewProps
>(({ children, contentContainerStyle, padding = 3, ...rest }, ref) => {
  const { boxProps, otherProps } = useBoxProps({ padding, ...rest });
  const boxStyle = useBoxStyle(boxProps);
  const { footerHeight = 0, hasBottomEdge, hasTopEdge } = useScreenContext();
  const { height, progress } = useReanimatedKeyboardAnimation();
  const { bottom: bottomInsets, top } = useSafeAreaInsets();
  const bottomTabBarHeight = useBottomTabBarHeight();
  const bottom = useMemo(() => {
    if (bottomTabBarHeight) {
      if (footerHeight === 0) {
        return 0;
      }
      return bottomTabBarHeight;
    }

    return hasBottomEdge ? bottomInsets : 0;
  }, [bottomTabBarHeight, hasBottomEdge, bottomInsets, footerHeight]);

  const extraBottom = useDerivedValue(() => {
    return footerHeight === 0
      ? interpolate(progress.value, [0, 1], [bottom, 0])
      : interpolate(
          progress.value,
          [0, 1],
          [footerHeight, footerHeight - bottom],
        );
  }, [bottom, footerHeight, progress]);

  const animatedProps = useAnimatedProps<KeyboardAwareScrollViewProps>(
    () => ({
      scrollIndicatorInsets: {
        bottom: -height.value + extraBottom.value,
        top: hasTopEdge ? top : 0,
      },
    }),
    [height, extraBottom, hasTopEdge, top],
  );

  const animatedSpacerStyle = useAnimatedStyle(() => {
    const height = extraBottom.value - 2 * (boxStyle?.gap ?? 0);
    return {
      height,
    };
  }, [extraBottom, boxStyle.gap]);

  const memoizedContentContainerStyle = useMemo(() => {
    const paddingTop = boxStyle.paddingTop || boxStyle.padding || 0;

    return [
      boxStyle,
      {
        paddingTop: hasTopEdge ? top + paddingTop : paddingTop,
        // flexGrow: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
      },
      contentContainerStyle,
    ];
  }, [hasTopEdge, top, boxStyle, contentContainerStyle]);

  return (
    <Fragment>
      {hasTopEdge ? <GradientOverlay position="top" height={top + 24} /> : null}
      <AnimatedKeyboardAwareScrollView
        automaticallyAdjustContentInsets={false}
        automaticallyAdjustKeyboardInsets={false}
        automaticallyAdjustsScrollIndicatorInsets={false}
        bottomOffset={footerHeight + 16}
        extraKeyboardSpace={0}
        keyboardDismissMode="interactive"
        keyboardShouldPersistTaps="handled"
        // @ts-ignore
        ref={mergeRefs(ref)}
        {...otherProps}
        animatedProps={animatedProps}
        contentContainerStyle={memoizedContentContainerStyle}
      >
        {children}
        <Reanimated.View style={animatedSpacerStyle} />
      </AnimatedKeyboardAwareScrollView>
    </Fragment>
  );
});

ScreenScrollViewComponent.displayName = "ScreenScrollView";

export const ScreenScrollView = memo(ScreenScrollViewComponent);

export const useScreenScrollView = useScrollRef;
