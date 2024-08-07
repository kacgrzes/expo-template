import React, { createContext, useContext } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  Easing,
} from "react-native-reanimated";

const SkeletonContext = createContext();

export const useSkeletonAnimation = () => useContext(SkeletonContext);

export const SkeletonProvider = ({ children }) => {
  const opacity = useSharedValue(0.3);

  React.useEffect(() => {
    opacity.value = withRepeat(
      withTiming(1, {
        duration: 1000,
        easing: Easing.bezier(0.4, 0, 0.6, 1),
      }),
      -1,
      true,
    );
  }, []);

  const animatedStyles = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return (
    <SkeletonContext.Provider value={animatedStyles}>
      {children}
    </SkeletonContext.Provider>
  );
};
