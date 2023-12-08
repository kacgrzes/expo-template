import { memo, forwardRef } from 'react'
import { View } from 'react-native'

import { Box, BoxProps } from './Box'

type AbsoluteProps = Omit<BoxProps, 'position'>
export const Absolute = memo<AbsoluteProps>(
  forwardRef<View, AbsoluteProps>((props, ref) => <Box {...props} position="absolute" ref={ref} />)
)
export const AbsoluteFullFill = memo<AbsoluteProps>(
  forwardRef<View, AbsoluteProps>((props, ref) => (
    <Box top={0} right={0} left={0} bottom={0} {...props} position="absolute" ref={ref} />
  ))
)
