import { memo } from 'react'
import { ScrollView as BaseScrollView, ScrollViewProps as BaseScrollViewProps } from 'react-native'

import { generateStyledComponent } from '../utils/generateStyledComponent'
import { StyledProps } from './types'

export type ScrollViewProps = BaseScrollViewProps & StyledProps
export const ScrollView = memo<ScrollViewProps>(
  generateStyledComponent<ScrollViewProps>(BaseScrollView, 'contentContainerStyle')
)
