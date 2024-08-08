import React, { ComponentProps, memo } from "react";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

type AnimatedViewProps = ComponentProps<typeof Animated.View>;

interface FadeInOutProps
  extends Omit<AnimatedViewProps, "entering" | "exiting"> {
  duration?: number;
  enabled?: boolean;
}

export const FadeInOut: React.FC<FadeInOutProps> = memo(
  ({ children, duration = 300, enabled = true, style, ...rest }) => {
    return (
      <Animated.View
        entering={enabled ? FadeIn.duration(duration) : undefined}
        exiting={enabled ? FadeOut.duration(duration) : undefined}
        style={style}
        {...rest}
      >
        {children}
      </Animated.View>
    );
  },
);

export default FadeInOut;
