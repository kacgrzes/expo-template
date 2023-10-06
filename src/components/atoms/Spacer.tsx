import { memo } from 'react'
import { ViewStyle } from 'react-native'

import { Box } from './Box'
import { SizingValue } from './types'

type SpacerProps = {
  x?: SizingValue | number
  y?: SizingValue | number
  flex?: ViewStyle['flex']
}
export const Spacer = memo<SpacerProps>(({ x = 0, y = 0, flex }) => (
  <Box pt={y} pr={x} flex={flex} />
))
