import React from 'react'
import Animated from 'react-native-reanimated'

import { Box } from '~components/atoms'
import { useBubblesLoader } from '~hooks/loaders'

export type BubblesLoaderType = {
  color?: string
  size?: number
}

const FullCircle = ({ size = 10, color = 'black' }: BubblesLoaderType): JSX.Element => (
  <Box style={{ backgroundColor: color, borderRadius: size / 2, width: size, height: size }} />
)

export const BubblesLoader = ({ size = 40, color = 'black' }: BubblesLoaderType): JSX.Element => {
  const { animatedHeight, animatedRotate, animatedWidth } = useBubblesLoader()

  const containerStyle = {
    width: size,
    height: size,
    alignItems: 'center',
    justifyContent: 'center',
  } as const

  const rowStyle = {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  } as const

  const absoluteStyle = {
    justifyContent: 'space-between',
    position: 'absolute',
  } as const

  return (
    <Animated.View style={[containerStyle, animatedRotate]}>
      <Animated.View style={[rowStyle, animatedWidth]}>
        <FullCircle color={color} />
        <FullCircle color={color} />
      </Animated.View>
      <Animated.View style={[absoluteStyle, animatedHeight]}>
        <FullCircle color={color} />
        <FullCircle color={color} />
      </Animated.View>
    </Animated.View>
  )
}
