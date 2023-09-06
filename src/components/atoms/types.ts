import { IBoxProps, Theme, IInputProps } from 'native-base'
import { TextStyle, ViewProps, ViewStyle } from 'react-native'

import { IconNames } from '~types/icon'
import { ColorNames } from '~types/native-base'

export type FormLabelProps = {
  label?: string
  isRequired?: boolean
  labelStyle?: TextStyle
}

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

export type SelectKey = string | number

export type SelectItemProps<T> = {
  label: string
  labelInDropdown?: string
  value: T
}

export type SelectProps<T> = {
  placeholder?: string
  label?: string
  disabled?: boolean
  items: SelectItemProps<T>[]
  value: T[]
  setValue: (newValue: T[]) => void
  maxSelectedItems?: number
  isError?: boolean
  onOpen?: () => void
}

export type RadioProps = {
  onChange: (val: string) => void
  label?: string
  radioOptions?: string[]
  isError?: boolean
  value?: string | number
}

export type CheckboxProps = ViewProps & {
  value: boolean | string[]
  onChange: (newValue: boolean | string[]) => void
  checkboxText?: string
  disabled?: boolean
  size?: number
  isError?: boolean
  isChecked?: boolean
  checkboxes?: string[]
}
