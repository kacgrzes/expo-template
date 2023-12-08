import { forwardRef, memo } from 'react'
import { View } from 'react-native'

import { Box, BoxProps } from './Box'

export type RowProps = Omit<BoxProps, 'flexDirection'>
export const Row = memo<RowProps>(
  forwardRef<View, RowProps>((props, ref) => <Box flexDirection="row" {...props} ref={ref} />)
)
