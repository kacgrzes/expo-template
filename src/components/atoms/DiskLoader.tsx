import React, { useEffect } from 'react'
import Animated, {
  Easing,
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated'

import { Box } from './Box'

export type DiskLoaderType = {
  circleColor?: ColorNames
  containerColor?: string
  size?: number
}

export const DiskLoader = ({
  circleColor = 'green.400',
  containerColor = '#b3c430',
  size = 40,
}: DiskLoaderType): JSX.Element => {
  const moving = useSharedValue(0)
  const easing = Easing.linear
  const containerSize = size / 1.5
  const circleSize = size / 3.2
  const DURATION = 1000

  const containerStyle = {
    width: size,
    height: size,
    backgroundColor: containerColor,
    borderRadius: 999,
    justifyContent: 'center',
    alignItems: 'center',
  } as const

  useEffect(() => {
    moving.value = withRepeat(withSequence(withTiming(1, { duration: DURATION, easing })), -1)
  }, [easing, moving])

  const animatedStyle = useAnimatedStyle(() => {
    const rotate = interpolate(moving.value, [0, 1], [0, 360], Extrapolate.CLAMP)
    return { transform: [{ rotate: `${rotate}deg` }] }
  }, [])

  return (
    <Animated.View style={containerStyle}>
      <Animated.View
        style={[
          {
            width: containerSize,
            height: containerSize,
          },
          animatedStyle,
        ]}
      >
        <Box
          width={circleSize}
          height={circleSize}
          borderRadius={999}
          position="absolute"
          bg={circleColor}
        />
      </Animated.View>
    </Animated.View>
  )
}
