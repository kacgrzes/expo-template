import { memo } from 'react'
import { ScrollView as BaseScrollView, ScrollViewProps as BaseScrollViewProps } from 'react-native'

import { StyledProps } from './types'
import { generateStyledComponent } from '../utils/generateStyledComponent'

export type ScrollViewProps = BaseScrollViewProps & StyledProps
export const ScrollView = memo<ScrollViewProps>(
  generateStyledComponent<ScrollViewProps>(BaseScrollView, 'contentContainerStyle')
)
