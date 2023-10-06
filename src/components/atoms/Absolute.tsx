import { memo } from 'react'

import { Box, BoxProps } from './Box'

type AbsoluteProps = Omit<BoxProps, 'position'>
export const Absolute = memo<AbsoluteProps>((props) => <Box {...props} position="absolute" />)
export const AbsoluteFullFill = memo<AbsoluteProps>((props) => (
  <Box top={0} right={0} left={0} bottom={0} {...props} position="absolute" />
))
