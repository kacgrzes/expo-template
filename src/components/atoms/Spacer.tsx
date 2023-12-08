import { forwardRef, memo } from 'react'
import { View, ViewStyle } from 'react-native'

import { Box } from './Box'
import { SizingValue } from './types'

type SpacerProps = {
  x?: SizingValue | number
  y?: SizingValue | number
  flex?: ViewStyle['flex']
}
export const Spacer = memo<SpacerProps>(
  forwardRef<View, SpacerProps>(({ x = 0, y = 0, flex }, ref) => (
    <Box pt={y} pr={x} flex={flex} ref={ref} />
  ))
)
