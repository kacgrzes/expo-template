import {
  useSharedValue,
  useAnimatedStyle,
  withSequence,
  withTiming,
} from "react-native-reanimated";

export const useShakeAnimation = () => {
  "use no memo";
  const shakeAnimation = useSharedValue(0);

  const shake = () => {
    console.log("shake!!!");
    shakeAnimation.value = withSequence(
      withTiming(10, { duration: 100 }),
      withTiming(-10, { duration: 100 }),
      withTiming(10, { duration: 100 }),
      withTiming(0, { duration: 100 }),
    );
  };

  const shakeAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: shakeAnimation.value }],
    };
  }, []);

  return { shake, shakeAnimatedStyle };
};
