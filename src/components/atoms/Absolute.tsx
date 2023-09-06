// TODO: ISSUE-33 (https://github.com/binarapps/expo-ts-template/issues/33)
// Remove native-base components when issue is resolved
import { Box } from 'native-base'

import type { AbsoluteProps } from './types'

export const Absolute = (props: AbsoluteProps) => <Box {...props} position="absolute" />
