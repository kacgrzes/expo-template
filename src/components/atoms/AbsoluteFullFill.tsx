// TODO: ISSUE-33 (https://github.com/binarapps/expo-ts-template/issues/33)
// Remove native-base components when issue is resolved
import { Box } from 'native-base'

import type { AbsoluteProps } from './types'

export const AbsoluteFullFill = (props: AbsoluteProps) => (
  <Box flex={1} top={0} right={0} left={0} bottom={0} {...props} position="absolute" />
)
