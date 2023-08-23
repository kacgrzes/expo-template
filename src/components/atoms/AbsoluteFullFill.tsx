import type { AbsoluteProps } from './types'

import { Box } from '~components/atoms'

export const AbsoluteFullFill = (props: AbsoluteProps) => (
  <Box flex={1} top={0} right={0} left={0} bottom={0} {...props} position="absolute" />
)
