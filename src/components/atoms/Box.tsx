import { memo } from 'react'
import { View, ViewProps } from 'react-native'

import { generateStyledComponent } from '../utils/generateStyledComponent'
import { StyledProps } from './types'

export type BoxProps = StyledProps & ViewProps

export const Box = memo(generateStyledComponent<BoxProps>(View))
