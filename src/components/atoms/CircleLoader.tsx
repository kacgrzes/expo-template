import React from 'react'
import Animated, {
  Extrapolate,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated'

import { Box } from '~components/atoms'
import { useCircleLoader } from '~hooks/loaders'

type HalfCircleProps = {
  progress: SharedValue<number>
  isFlipped?: boolean
  color?: string
  size?: number
  thickness?: number
}

export type CircleLoaderType = Omit<HalfCircleProps, 'progress'>

const HalfCircle = ({
  thickness,
  size = 20,
  progress,
  isFlipped = false,
  color,
}: HalfCircleProps): JSX.Element => {
  const fullCircleStyle = {
    width: size,
    height: size,
    borderRadius: size / 2,
  } as const

  const halfCircleContainerStyle = {
    width: size / 2,
    height: size,
    overflow: 'hidden',
  } as const

  const animatedStyle = useAnimatedStyle(() => {
    if (progress.value > 1) {
      const rotateValue = interpolate(
        progress.value,
        isFlipped ? [1, 1.5] : [1.5, 2],
        isFlipped ? [0, -180] : [0, 180],
        Extrapolate.CLAMP
      )
      return {
        transform: [
          {
            rotate: `${rotateValue}deg`,
          },
        ],
      }
    }
    const rotateValue = interpolate(
      progress.value,
      isFlipped ? [0, 0.5] : [0.5, 1],
      isFlipped ? [180, 0] : [-180, 0],
      Extrapolate.CLAMP
    )
    return {
      transform: [
        {
          rotate: `${rotateValue}deg`,
        },
      ],
    }
  })
  return (
    <Box
      pointerEvents="none"
      style={{
        ...halfCircleContainerStyle,
        transform: [{ scaleX: isFlipped ? -1 : 1 }],
      }}
    >
      <Animated.View
        style={[
          {
            width: size,
            height: size,
          },
          animatedStyle,
        ]}
      >
        <Box style={halfCircleContainerStyle}>
          <Box
            style={{
              ...fullCircleStyle,
              borderWidth: thickness,
              borderColor: color,
            }}
          />
        </Box>
      </Animated.View>
    </Box>
  )
}

export const CircleLoader = ({
  size = 32,
  thickness = 2,
  color = 'black',
}: CircleLoaderType): JSX.Element => {
  const { animatedRotate, progress } = useCircleLoader()

  const fullCircleStyle = {
    width: size,
    height: size,
    borderRadius: size / 2,
    flexDirection: 'row',
  } as const

  const circleStyleProps = {
    color,
    size,
    thickness,
  }

  return (
    <Animated.View style={[animatedRotate, fullCircleStyle]}>
      <HalfCircle progress={progress} isFlipped={false} {...circleStyleProps} />
      <HalfCircle progress={progress} isFlipped={true} {...circleStyleProps} />
    </Animated.View>
  )
}
