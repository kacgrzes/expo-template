import { Box } from 'native-base'
import React from 'react'

import { SpacerProps } from './types'

export const Spacer = React.memo<SpacerProps>(({ x = '0', y = '0', flex }) => (
  <Box mt={y} mr={x} flex={flex} />
))
