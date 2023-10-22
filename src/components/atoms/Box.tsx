import { memo } from 'react'
import { View, ViewProps } from 'react-native'

import { StyledProps } from './types'
import { generateStyledComponent } from '../utils/generateStyledComponent'

export type BoxProps = StyledProps & ViewProps

export const Box = memo(generateStyledComponent<BoxProps>(View))
