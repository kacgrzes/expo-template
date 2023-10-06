import { memo } from 'react'

import { Box, BoxProps } from './Box'

export type CenterProps = Omit<BoxProps, 'justifyContent' | 'alignItems'>
export const Center = memo<CenterProps>((props) => (
  <Box justifyContent="center" alignItems="center" {...props} />
))
