import { IBoxProps, Theme, IInputProps } from 'native-base'
import { ViewStyle } from 'react-native'

import { IconNames } from '~types/icon'
import { ColorNames } from '~types/native-base'

export type AbsoluteProps = Omit<IBoxProps, 'position'>

export type SpacingValue = keyof Theme['space']
export type SpacerProps = {
  x?: SpacingValue
  y?: SpacingValue
  flex?: ViewStyle['flex']
}

export type InputProps = IInputProps & {
  secureTextIconName?: IconNames
  secureTextIconColor?: ColorNames
  secureTextIconSize?: number
}
