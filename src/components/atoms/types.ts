import { DimensionValue, TextStyle, ViewProps, ViewStyle, TextInputProps } from 'react-native'

import { BoxProps } from './Box'

import { _appTheme } from '~constants'
import { IconNames } from '~types/icon'

type Sizing =
  | 'w'
  | 'width'
  | 'minW'
  | 'minWidth'
  | 'maxW'
  | 'maxWidth'
  | 'h'
  | 'height'
  | 'minH'
  | 'minHeight'
  | 'maxH'
  | 'maxHeight'
export type SizingValue =
  | keyof typeof _appTheme.size
  | DimensionValue
  | `${number}%`
  | `${number}px`
  | number
export type SizingProps = {
  [key in Sizing]?: SizingValue
}

export type BackgroundProps = {
  bg?: ColorNames
  backgroundColor?: ColorNames
  bgOpacity?: ViewStyle['opacity']
  backgroundOpacity?: ViewStyle['opacity']
}

export type Spacing =
  | 'm'
  | 'mt'
  | 'ml'
  | 'mr'
  | 'mb'
  | 'mx'
  | 'my'
  | 'p'
  | 'pr'
  | 'pt'
  | 'pl'
  | 'pb'
  | 'px'
  | 'py'
export type SpacingProps = {
  [key in Spacing]?: SizingValue
}

export type FlexProps = {
  flex?: ViewStyle['flex']
  flexGrow?: ViewStyle['flexGrow']
  flexBasis?: ViewStyle['flexBasis']
  flexShrink?: ViewStyle['flexShrink']
  justifyContent?: ViewStyle['justifyContent']
  alignItems?: ViewStyle['alignItems']
  alignContent?: ViewStyle['alignContent']
  alignSelf?: ViewStyle['alignSelf']
  flexDirection?: ViewStyle['flexDirection']
  flexWrap?: ViewStyle['flexWrap']
}

export type EffectsProps = {
  /**
   * **Float value**, from 0 to 1
   */
  opacity?: ViewStyle['opacity']
}

export type BordersProps = {
  borderColor?: ColorNames
  /**
   * **Number value in pixels**
   */
  borderRadius?: ViewStyle['borderRadius']
  /**
   * **Number value in pixels**
   */
  borderWidth?: ViewStyle['borderWidth']
  /**
   * **Number value in pixels**
   */
  borderStyle?: ViewStyle['borderStyle']
  /**
   * **Number value in pixels**
   */
  borderBottomEndRadius?: ViewStyle['borderBottomEndRadius']
  /**
   * **Number value in pixels**
   */
  borderBottomLeftRadius?: ViewStyle['borderBottomLeftRadius']
  /**
   * **Number value in pixels**
   */
  borderTopEndRadius?: ViewStyle['borderTopEndRadius']
  /**
   * **Number value in pixels**
   */
  borderTopLeftRadius?: ViewStyle['borderTopLeftRadius']
  /**
   * **Number value in pixels**
   */
  borderTopWidth?: ViewStyle['borderTopWidth']
  /**
   * **Number value in pixels**
   */
  borderBottomWidth?: ViewStyle['borderBottomWidth']
  /**
   * **Number value in pixels**
   */
  borderLeftWidth?: ViewStyle['borderLeftWidth']
  /**
   * **Number value in pixels**
   */
  borderRightWidth?: ViewStyle['borderRightWidth']
}

export type TextProps = {
  color?: ColorNames
  fontSize?: FontSizes
  letterSpacing?: LetterSpacings
  lineHeight?: LineHeights
  fontWeight?: FontWeights
  fontFamily?: Fonts
  bold?: boolean
  italic?: boolean
  capitalize?: boolean
  lowercase?: boolean
  uppercase?: boolean
  underline?: boolean
  strikeThrough?: boolean
  textDecoration?: TextStyle['textDecorationLine']
  textTransform?: TextStyle['textTransform']
}

export type LayoutsProps = {
  position?: ViewStyle['position']
  zIndex?: ViewStyle['zIndex']
  top?: ViewStyle['top']
  bottom?: ViewStyle['bottom']
  right?: ViewStyle['right']
  left?: ViewStyle['left']
  overflow?: ViewStyle['overflow']
}

export type StyledProps = SizingProps &
  BackgroundProps &
  SpacingProps &
  FlexProps &
  EffectsProps &
  BordersProps &
  LayoutsProps

export type FormLabelProps = {
  label?: string
  isRequired?: boolean
  labelStyle?: TextStyle
}

export type AbsoluteProps = Omit<BoxProps, 'position'>

export type SpacerProps = {
  x?: SizingValue
  y?: SizingValue
  flex?: ViewStyle['flex']
}

export type InputProps = TextProps &
  StyledProps &
  TextInputProps & {
    isDisabled?: boolean
    isInvalid?: boolean
    rightElement?: JSX.Element
    leftElement?: JSX.Element

    secureTextIconName?: IconNames
    secureTextIconColor?: ColorNames
    secureTextIconSize?: number
    type?: 'text' | 'password'
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
