import { useEffect } from 'react'
import {
  Easing,
  Extrapolate,
  SharedValue,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated'

type UseCircleLoaderType = {
  progress: SharedValue<number>
  animatedStyle: {
    transform: {
      rotate: string
    }[]
  }
}

export const useCircleLoader = (): UseCircleLoaderType => {
  const progress = useSharedValue(0)
  const easing = Easing.bezier(0.33, 0, 0.68, 1)

  useEffect(() => {
    progress.value = withRepeat(
      withSequence(
        withTiming(1, { duration: 1000, easing }),
        withTiming(2, { duration: 1000, easing })
      ),
      -1
    )
  }, [easing, progress])

  const animatedStyle = useAnimatedStyle(() => {
    const rotateValue = interpolate(progress.value, [0, 2], [0, 720], Extrapolate.CLAMP)
    return {
      transform: [
        {
          rotate: `${rotateValue}deg`,
        },
      ],
    }
  }, [])

  return {
    progress,
    animatedStyle,
  }
}
