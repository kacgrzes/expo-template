import { useEffect } from 'react'
import { ViewStyle } from 'react-native'
import {
  Easing,
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated'

const DURATION = 500

type UseBricksLoaderType = {
  animatedStyleBoxOne: ViewStyle
  animatedStyleBoxTwo: ViewStyle
  animatedStyleBoxThree: ViewStyle
}

const easing = Easing.cubic

export const useBricksLoader = ({
  containerSize,
  size,
}: {
  containerSize: number
  size: number
}): UseBricksLoaderType => {
  const moving = useSharedValue(0)
  const width = containerSize - size

  useEffect(() => {
    moving.value = withRepeat(
      withSequence(
        withTiming(1, { duration: DURATION, easing }),
        withTiming(2, { duration: DURATION, easing }),
        withTiming(3, { duration: DURATION, easing }),
        withTiming(4, { duration: DURATION, easing }),
        withTiming(5, { duration: DURATION, easing }),
        withTiming(6, { duration: DURATION, easing }),
        withTiming(7, { duration: DURATION, easing }),
        withTiming(8, { duration: DURATION, easing }),
        withTiming(9, { duration: DURATION, easing }),
        withTiming(10, { duration: DURATION, easing }),
        withTiming(11, { duration: DURATION, easing }),
        withTiming(12, { duration: DURATION, easing })
      ),
      -1
    )
  }, [moving])

  const animatedStyleBoxOne = useAnimatedStyle(() => {
    const left =
      moving.value > 8
        ? interpolate(moving.value, [8, 9], [width, 0], Extrapolate.CLAMP)
        : interpolate(moving.value, [2, 3], [0, width], Extrapolate.CLAMP)
    const top =
      moving.value > 11
        ? interpolate(moving.value, [11, 12], [width, 0], Extrapolate.CLAMP)
        : interpolate(moving.value, [5, 6], [0, width], Extrapolate.CLAMP)
    return { left, top }
  }, [])

  const animatedStyleBoxTwo = useAnimatedStyle(() => {
    const top =
      moving.value > 7
        ? interpolate(moving.value, [7, 8], [width, 0], Extrapolate.CLAMP)
        : interpolate(moving.value, [1, 2], [0, width], Extrapolate.CLAMP)
    const left =
      moving.value > 10
        ? interpolate(moving.value, [10, 11], [0, width], Extrapolate.CLAMP)
        : interpolate(moving.value, [4, 5], [width, 0], Extrapolate.CLAMP)
    return { left, top }
  }, [])

  const animatedStyleBoxThree = useAnimatedStyle(() => {
    const top =
      moving.value > 9
        ? interpolate(moving.value, [9, 10], [0, width], Extrapolate.CLAMP)
        : interpolate(moving.value, [3, 4], [width, 0], Extrapolate.CLAMP)
    const left =
      moving.value > 6
        ? interpolate(moving.value, [6, 7], [0, width], Extrapolate.CLAMP)
        : interpolate(moving.value, [0, 1], [width, 0], Extrapolate.CLAMP)
    return { left, top }
  }, [])

  return {
    animatedStyleBoxOne,
    animatedStyleBoxTwo,
    animatedStyleBoxThree,
  }
}
