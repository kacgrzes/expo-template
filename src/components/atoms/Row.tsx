import { memo } from 'react'

import { Box, BoxProps } from './Box'

export type RowProps = Omit<BoxProps, 'flexDirection'>
export const Row = memo<RowProps>((props) => <Box flexDirection="row" {...props} />)
