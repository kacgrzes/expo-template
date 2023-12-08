import { forwardRef, memo } from 'react'
import { View } from 'react-native'

import { Box, BoxProps } from './Box'

export type ColumnProps = Omit<BoxProps, 'flexDirection'>
export const Column = memo<ColumnProps>(
  forwardRef<View, ColumnProps>((props, ref) => <Box flexDirection="column" {...props} ref={ref} />)
)
