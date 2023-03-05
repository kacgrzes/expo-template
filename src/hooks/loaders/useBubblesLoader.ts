import { useEffect } from 'react'
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

const STRETCHING_DURATION = 500
const ROTATION_DURATION = 1000

type UseBubblesLoaderType = {
  animatedRotate: {
    transform: {
      rotate: string
    }[]
  }
  animatedHeight: {
    height: string
  }
  animatedWidth: {
    width: string
  }
}

const easing = Easing.linear
const clamp = Extrapolate.CLAMP
const stretchingOutputRange = [80, 150]
const stretchingInputRange = [0, 2]

export const useBubblesLoader = (): UseBubblesLoaderType => {
  const stretching = useSharedValue(0)
  const rotation = useSharedValue(0)

  useEffect(() => {
    stretching.value = withRepeat(
      withSequence(
        withTiming(1, { duration: STRETCHING_DURATION, easing }),
        withTiming(2, { duration: STRETCHING_DURATION, easing })
      ),
      -1,
      true
    )
  }, [stretching])

  useEffect(() => {
    rotation.value = withRepeat(
      withSequence(
        withTiming(1, { duration: ROTATION_DURATION, easing }),
        withTiming(2, { duration: ROTATION_DURATION, easing }),
        withTiming(3, { duration: ROTATION_DURATION, easing }),
        withTiming(4, { duration: ROTATION_DURATION, easing })
      ),
      -1
    )
  }, [rotation])

  const animatedRotate = useAnimatedStyle(() => {
    const rotate = interpolate(rotation.value, [0, 4], [0, 360], clamp)
    return {
      transform: [
        {
          rotate: `${rotate}deg`,
        },
      ],
    }
  }, [])

  const animatedWidth = useAnimatedStyle(() => {
    const width = interpolate(stretching.value, stretchingInputRange, stretchingOutputRange, clamp)
    return { width: `${width}%` }
  }, [])

  const animatedHeight = useAnimatedStyle(() => {
    const height = interpolate(stretching.value, stretchingInputRange, stretchingOutputRange, clamp)
    return { height: `${height}%` }
  }, [])

  return {
    animatedRotate,
    animatedHeight,
    animatedWidth,
  }
}
