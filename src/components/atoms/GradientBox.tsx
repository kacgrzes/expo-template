import { LinearGradient, LinearGradientProps } from 'expo-linear-gradient'

import { generateStyledComponent } from '../utils/generateStyledComponent'
import { StyledProps } from './types'

export type GradientProps = StyledProps & LinearGradientProps

export const GradientBox = generateStyledComponent<GradientProps>(LinearGradient)
