import { forwardRef, memo } from 'react'
import { View } from 'react-native'

import { Box, BoxProps } from './Box'

export type CenterProps = Omit<BoxProps, 'justifyContent' | 'alignItems'>
export const Center = memo(
  forwardRef<View, CenterProps>((props, ref) => (
    <Box justifyContent="center" alignItems="center" {...props} ref={ref} />
  ))
)
