import { LinearGradient, LinearGradientProps } from 'expo-linear-gradient'

import { StyledProps } from './types'
import { generateStyledComponent } from '../utils/generateStyledComponent'

export type GradientProps = StyledProps & LinearGradientProps

export const GradientBox = generateStyledComponent<GradientProps, LinearGradient>(LinearGradient)
