import { useMemo, memo, useCallback } from 'react'
import {
  Pressable,
  PressableProps,
  PressableStateCallbackType,
  StyleSheet,
  ViewStyle,
  TextStyle,
  StyleProp,
} from 'react-native'

import { generateStyledComponent } from '../../utils'
import { Box } from '../Box'
import { Loader } from '../Loader'
import { Text } from '../Text'
import { StyledProps } from '../types'

import { theme } from '~constants'
import { buttonVariants } from '~constants/buttonVariants'
import { getColorValue } from '~utils'

export type ButtonProps = StyledProps &
  PressableProps & {
    title?: string
    variant?: ButtonVariant
    size?: 'sm' | 'md' | 'lg'
    loading?: boolean
    disabled?: boolean
    leftIcon?: JSX.Element
    rightIcon?: JSX.Element
    loaderElement?: JSX.Element
    textStyle?: StyleProp<TextStyle>
  }

const styles = StyleSheet.create({
  baseButton: {
    alignItems: 'center',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  baseText: {
    color: theme.light.colors.white,
    fontStyle: 'normal',
    fontWeight: '400',
    letterSpacing: 0,
    lineHeight: 21,
  },
})

const RawButton = memo<ButtonProps>(
  ({
    variant = 'Primary',
    size = 'md',
    loading,
    disabled,
    leftIcon,
    rightIcon,
    style,
    title,
    children,
    textStyle,
    ...props
  }) => {
    const { pressedStyle, notPressedStyle, disabledStyle } = useMemo(
      () => buttonVariants[variant],
      [variant]
    )

    const pressedStyles = useMemo<ViewStyle>(
      () => ({
        backgroundColor: getColorValue({
          color: pressedStyle.backgroundColor,
          colors: theme.light.colors,
        }),
        borderColor: getColorValue({
          color: pressedStyle.borderColor!,
          colors: theme.light.colors,
        }),
        borderWidth: pressedStyle.borderWidth,
      }),
      [pressedStyle]
    )

    const pressedColorStyle = useMemo<TextStyle>(
      () => ({
        color: getColorValue({
          color: pressedStyle.color!,
          colors: theme.light.colors,
        }),
      }),
      [pressedStyle]
    )

    const notPressedStyles = useMemo<ViewStyle>(
      () => ({
        backgroundColor: getColorValue({
          color: notPressedStyle.backgroundColor,
          colors: theme.light.colors,
        }),
        borderColor: getColorValue({
          color: notPressedStyle.borderColor!,
          colors: theme.light.colors,
        }),
        borderWidth: notPressedStyle.borderWidth,
      }),
      [notPressedStyle]
    )

    const notPressedColorStyle = useMemo<TextStyle>(
      () => ({
        color: getColorValue({
          color: notPressedStyle.color!,
          colors: theme.light.colors,
        }),
      }),
      [notPressedStyle]
    )

    const disabledStyles = useMemo<ViewStyle>(
      () => ({
        backgroundColor: getColorValue({
          color: disabledStyle.backgroundColor,
          colors: theme.light.colors,
        }),
        borderColor: getColorValue({
          color: disabledStyle.borderColor!,
          colors: theme.light.colors,
        }),
        borderWidth: disabledStyle.borderWidth,
      }),
      [disabledStyle]
    )

    const disabledColorStyle = useMemo<TextStyle>(
      () => ({
        color: getColorValue({
          color: disabledStyle.color!,
          colors: theme.light.colors,
        }),
      }),
      [disabledStyle]
    )

    const buttonSizeStyle = useMemo<ViewStyle>(
      () => ({
        paddingHorizontal: size === 'sm' ? 12 : size === 'md' ? 24 : 48,
        minWidth: size === 'sm' ? 64 : size === 'md' ? 128 : 256,
      }),
      [size]
    )

    const pressableStyleFunction = useCallback(
      ({ pressed }: PressableStateCallbackType): StyleProp<ViewStyle> =>
        StyleSheet.flatten<ViewStyle>([
          styles.baseButton,
          pressed ? pressedStyles : notPressedStyles,
          disabled && disabledStyles,
          loading && disabledStyles,
          buttonSizeStyle,
          typeof style === 'function' ? style({ pressed }) : style,
        ]),
      [pressedStyles, notPressedStyles, loading, buttonSizeStyle, disabled, disabledStyles, style]
    )

    const pressableTextStyleFunction = useCallback(
      ({ pressed }: PressableStateCallbackType) =>
        StyleSheet.flatten([
          styles.baseText,
          pressed ? pressedColorStyle : notPressedColorStyle,
          disabled && disabledColorStyle,
          textStyle,
        ]),
      [pressedColorStyle, notPressedColorStyle, disabled, disabledColorStyle, textStyle]
    )

    const childrenElement = useCallback(
      (props: PressableStateCallbackType) => {
        if (loading) {
          return <Loader type="default" size={24} />
        }
        if (title) {
          return (
            <Text.Bold
              allowFontScaling={false}
              style={pressableTextStyleFunction(props)}
              textAlign="center"
            >
              {title}
            </Text.Bold>
          )
        }

        if (typeof children === 'string') {
          return (
            <Text.Bold
              allowFontScaling={false}
              style={pressableTextStyleFunction(props)}
              textAlign="center"
            >
              {children}
            </Text.Bold>
          )
        }
        return children
      },
      [children, loading, pressableTextStyleFunction, title]
    )

    return (
      <Pressable
        role="button"
        accessibilityRole="button"
        style={pressableStyleFunction}
        disabled={disabled}
        testID="baseButton"
        {...props}
      >
        {(props: PressableStateCallbackType) => (
          <>
            {leftIcon && <Box mr={8}>{leftIcon}</Box>}
            {childrenElement(props)}
            {rightIcon && <Box ml={8}>{rightIcon}</Box>}
          </>
        )}
      </Pressable>
    )
  }
)
export type ButtonVariant = 'Primary' | 'Secondary' | 'Outline' | 'Ghost' | 'Link'
type ButtonComposition = React.ComponentType<ButtonProps> & {
  [key in ButtonVariant]: React.ComponentType<ButtonProps>
}

const Button = generateStyledComponent(RawButton) as ButtonComposition

const generateButtonVariant = (variant: ButtonVariant) => (props: ButtonProps) =>
  <Button variant={variant} {...props} />

Button.Primary = generateButtonVariant('Primary')
Button.Secondary = generateButtonVariant('Secondary')
Button.Outline = generateButtonVariant('Outline')
Button.Ghost = generateButtonVariant('Ghost')
Button.Link = generateButtonVariant('Link')

export { Button }
