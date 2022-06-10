import { useMemo } from 'react'
import {
  Pressable,
  PressableProps,
  ViewStyle,
  ActivityIndicator,
  Platform,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'

import { Text } from './Typography'

import { AppTheme, Colors } from '~constants'
import { useCallback, useTheme } from '~hooks'

type ButtonVariants = 'Primary' | 'Secondary' | 'Flat'

type ButtonProps = Omit<PressableProps, 'style'> & {
  title?: string
  style?: ViewStyle
  variant?: ButtonVariants
  disabled?: boolean
  loading?: boolean
  fullWidth?: boolean
}

type ButtonVariantProps = Omit<ButtonProps, 'variant'>

const generateVariants = (s: AppTheme, colors: Colors) => ({
  Primary: {
    notPressedStyle: {
      backgroundColor: colors.primary,
    },
    pressedStyle: {
      backgroundColor: colors.primaryLight,
    },
    disabledStyle: {
      backgroundColor: colors.gray200,
    },

    textStyle: {
      color: colors.white,
    },
    pressedTextStyle: { color: colors.white },
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
  const { s, colors } = useTheme()

  const commonStyles = useMemo(
    () => [
      fullWidth && { width: '100%' },
      buttonMinHeightStyle,
      {
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: 48,
        borderRadius: 10,
        paddingHorizontal: 4,
        paddingVertical: 8,
      },
      style,
    ],
    [fullWidth, style]
  )

  const variants = generateVariants(s, colors)

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

  if (Platform.OS === 'web') {
    return (
      <TouchableOpacity
        style={styles.button}
        disabled={disabled}
        testID="MAIN_BUTTON"
        // TODO: Uncomment this when start implementing web
        // {...props}
      >
        {loading ? (
          <ActivityIndicator size={24} />
        ) : (
          children || (
            <Text.Button
              color="white"
              uppercase
              center
              style={[textStyle, disabled && s.textDisabled, s.pB0_5]}
            >
              {title}
            </Text.Button>
          )
        )}
      </TouchableOpacity>
    )
  }

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

const styles = StyleSheet.create({
  // eslint-disable-next-line
  button: {
    alignItems: 'center',
    backgroundColor: '#3f51b5',
    borderRadius: 10,
    justifyContent: 'center',
    minWidth: 48,
    paddingHorizontal: 4,
    paddingVertical: 8,
  },
})
