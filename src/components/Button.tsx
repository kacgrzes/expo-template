import { useMemo } from 'react'
import { Pressable, PressableProps, ViewStyle, ActivityIndicator } from 'react-native'

import { Text } from './Typography'

import { AppTheme } from '~constants'
import { useCallback, useTheme } from '~hooks'

type ButtonVariants = 'Primary' | 'Secondary' | 'Flat'

type ButtonProps = PressableProps & {
  title?: string
  style?: ViewStyle
  variant?: ButtonVariants
  disabled?: boolean
  loading?: boolean
  fullWidth?: boolean
}

type ButtonVariantProps = Omit<ButtonProps, 'variant'>

const generateVariants = (s: AppTheme) => ({
  Primary: {
    notPressedStyle: s.bgPrimary,
    pressedStyle: s.bgPrimaryLight,
    disabledStyle: s.bgGray200,
    textStyle: s.textWhite,
    pressedTextStyle: s.textWhite,
  },
  Secondary: {
    notPressedStyle: [s.borderPrimary, s.border, s.bgTransparent],
    pressedStyle: s.bgPrimary,
    disabledStyle: s.borderGray200,
    textStyle: s.textPrimary,
    pressedTextStyle: s.textWhite,
  },
  Flat: {
    notPressedStyle: s.bgTransparent,
    pressedStyle: s.bgPrimary,
    disabledStyle: [],
    textStyle: s.textPrimary,
    pressedTextStyle: s.textWhite,
  },
})

const buttonMinHeightStyle = { minHeight: 40 }

export const Button = ({
  style,
  title,
  variant = 'Primary',
  disabled = false,
  fullWidth = false,
  loading = false,
  children,
  ...props
}: ButtonProps): JSX.Element => {
  const { s } = useTheme()

  const commonStyles = useMemo(
    () => [
      fullWidth && s.wFull,
      buttonMinHeightStyle,
      s.itemsCenter,
      s.alignCenter,
      s.justifyCenter,
      s.pY1,
      s.pX2,
      s.minW48,
      s.roundedSm,
      style,
    ],
    [fullWidth, s, style]
  )

  const variants = generateVariants(s)

  const { pressedStyle, notPressedStyle, disabledStyle, textStyle, pressedTextStyle } =
    variants[variant] || variants['Primary']

  const pressableStyleFunction = useCallback(
    ({ pressed }) => [
      ...commonStyles,
      notPressedStyle,
      pressed && pressedStyle,
      disabled && disabledStyle,
    ],
    [commonStyles, disabled, disabledStyle, notPressedStyle, pressedStyle]
  )

  const textStyleFunction = useCallback(
    ({ pressed }) => {
      if (!title && !children) {
        console.warn('Button should recieve children or title')
        return null
      }
      return (
        <Text.Button
          color="white"
          uppercase
          center
          style={[textStyle, pressed && pressedTextStyle, disabled && s.textDisabled, s.pB0_5]}
        >
          {title}
        </Text.Button>
      )
    },
    [children, disabled, pressedTextStyle, s.pB0_5, s.textDisabled, textStyle, title]
  )

  return (
    <Pressable style={pressableStyleFunction} disabled={disabled} testID="MAIN_BUTTON" {...props}>
      {loading ? <ActivityIndicator size={24} /> : children || textStyleFunction}
    </Pressable>
  )
}

const generateButtonType = (variant: ButtonVariants) => (props: ButtonVariantProps) =>
  <Button {...props} variant={variant} />

Button.Primary = generateButtonType('Primary')
Button.Secondary = generateButtonType('Secondary')
Button.Flat = generateButtonType('Flat')
