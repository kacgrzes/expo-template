// TODO: ISSUE-33 (https://github.com/binarapps/expo-ts-template/issues/33)
// Remove native-base components when issue is resolved
import { Box } from 'native-base'
import React from 'react'

import { SpacerProps } from './types'

export const Spacer = React.memo<SpacerProps>(({ x = '0', y = '0', flex }) => (
  <Box mt={y} mr={x} flex={flex} />
))
