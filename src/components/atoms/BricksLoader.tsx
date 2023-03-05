import React from 'react'
import Animated from 'react-native-reanimated'

import { useBricksLoader } from '~hooks/loaders'

export type BricksLoaderType = {
  color?: string
  colors?: [string, string, string]
  containerSize?: number
  size?: number
}

export const BricksLoader = ({
  color,
  size = 20,
  colors = ['#0055a5', '#45aee7', '#bda0b2'],
  containerSize = 45,
}: BricksLoaderType): JSX.Element => {
  const { animatedStyleBoxOne, animatedStyleBoxTwo, animatedStyleBoxThree } = useBricksLoader({
    containerSize,
    size,
  })

  const containerStyle = {
    width: containerSize,
    height: containerSize,
  } as const

  const mainBrickStyle = {
    width: size,
    height: size,
    borderRadius: 8,
    position: 'absolute',
  } as const

  const secondBrickStyle = {
    ...mainBrickStyle,
    right: 0,
  } as const

  const thirdBrickStyle = {
    ...mainBrickStyle,
    bottom: 0,
    right: 0,
  } as const

  return (
    <Animated.View style={containerStyle}>
      <Animated.View
        style={[
          {
            backgroundColor: colors[0] || color,
          },
          mainBrickStyle,
          animatedStyleBoxOne,
        ]}
      />
      <Animated.View
        style={[
          {
            backgroundColor: colors[1] || color,
          },
          secondBrickStyle,
          animatedStyleBoxTwo,
        ]}
      />
      <Animated.View
        style={[
          {
            backgroundColor: colors[2] || color,
          },
          thirdBrickStyle,
          animatedStyleBoxThree,
        ]}
      />
    </Animated.View>
  )
}
