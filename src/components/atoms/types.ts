import { Feather } from '@expo/vector-icons'
import { IBoxProps, Theme, IInputProps } from 'native-base'
import { ComponentProps } from 'react'
import { ViewStyle } from 'react-native'

export type AbsoluteProps = Omit<IBoxProps, 'position'>

export type SpacingValue = keyof Theme['space']
export type SpacerProps = {
  x?: SpacingValue
  y?: SpacingValue
  flex?: ViewStyle['flex']
}

export type InputProps = IInputProps & {
  secureTextIconName?: ComponentProps<typeof Feather>['name']
  secureTextIconColor?: string
  secureTextIconSize?: number
}
