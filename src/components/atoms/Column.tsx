import { memo } from 'react'

import { Box, BoxProps } from './Box'

export type ColumnProps = Omit<BoxProps, 'flexDirection'>
export const Column = memo<ColumnProps>((props) => <Box flexDirection="column" {...props} />)
