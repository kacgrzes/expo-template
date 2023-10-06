import { forwardRef } from 'react'
import { NativeSyntheticEvent, TextInput, TextInputFocusEventData, TextStyle } from 'react-native'

import { generateStyleSheet, generateStyledSystem } from '../utils'
import { Box } from './Box'
import { Icon } from './Icon'
import { Touchable } from './Touchables/Touchable'
import type { InputProps } from './types'

import {
  useSecurePassword,
  useRef,
  useTheme,
  useState,
  useCallback,
  useImperativeHandle,
  useMemo,
} from '~hooks'
import { convertEmToNumber, getColorValue, getFontWeight } from '~utils'

const layoutPropsKeys = [
  'm',
  'margin',
  'mt',
  'marginTop',
  'mr',
  'marginRight',
  'mb',
  'marginBottom',
  'ml',
  'marginLeft',
  'mx',
  'my',
  'p',
  'padding',
  'pt',
  'paddingTop',
  'pr',
  'paddingRight',
  'pb',
  'paddingBottom',
  'pl',
  'paddingLeft',
  'px',
  'py',
]

const StyledInput = forwardRef<TextInput, InputProps>((props, ref) => {
  const { colors, fontSizes, fontWeights, fonts, lineHeights } = useTheme()

  const fontSize = fontSizes[props.fontSize || 'xs']
  const fontWeight = fontWeights[props.fontWeight || 'normal']
  const fontFamily = fonts[props.fontFamily || 'body']

  const lineHeightStyle = useMemo<TextStyle>(
    () => ({
      lineHeight: props.lineHeight
        ? convertEmToNumber(lineHeights[props.lineHeight], fontSize)
        : undefined,
    }),
    [lineHeights, props.lineHeight, fontSize]
  )

  const letterSpacingStyle = useMemo<TextStyle>(
    () => ({
      letterSpacing: props.letterSpacing
        ? convertEmToNumber(props.letterSpacing, fontSize)
        : undefined,
    }),
    [props.letterSpacing, fontSize]
  )

  const textColorStyle = useMemo<TextStyle>(
    () => ({
      color: props.color ? getColorValue({ color: props.color, colors }) : colors.text,
    }),
    [colors, props.color]
  )

  const textAlignmentStyle = useMemo<TextStyle>(
    () => ({
      textAlign: props.textAlign,
    }),
    [props.textAlign]
  )

  const textTransformStyle = useMemo<TextStyle>(
    () => ({
      textTransform:
        props.capitalize || props.textTransform === 'capitalize'
          ? 'capitalize'
          : props.lowercase || props.textTransform === 'lowercase'
          ? 'lowercase'
          : props.uppercase || props.textTransform === 'uppercase'
          ? 'uppercase'
          : 'none',
    }),
    [props.capitalize, props.lowercase, props.uppercase, props.textTransform]
  )

  const textDecorationStyle = useMemo<TextStyle>(
    () => ({
      textDecorationLine:
        props.underline || props.textDecoration === 'underline'
          ? 'underline'
          : props.strikeThrough || props.textDecoration === 'line-through'
          ? 'line-through'
          : undefined,
    }),
    [props.underline, props.strikeThrough, props.textDecoration]
  )

  const fontWeightStyle = useMemo<TextStyle>(
    () => ({
      fontWeight: (props.bold && 'bold') || (fontWeight && getFontWeight(fontWeight)),
    }),
    [fontWeight, props.bold]
  )

  const fontFamilyStyle = useMemo<TextStyle>(
    () => ({
      fontFamily,
    }),
    [fontFamily]
  )

  const fontSizeStyle = useMemo<TextStyle>(
    () => ({
      fontSize,
    }),
    [fontSize]
  )

  const inputTextStyle = useMemo<TextStyle>(
    () =>
      generateStyleSheet<TextStyle>([
        props.bold && { fontWeight: '500' },
        props.italic && { fontStyle: 'italic' },
        fontFamilyStyle,
        fontSizeStyle,
        fontWeightStyle,
        textDecorationStyle,
        textTransformStyle,
        textAlignmentStyle,
        textColorStyle,
        letterSpacingStyle,
        lineHeightStyle,
      ]),
    [
      fontFamilyStyle,
      fontSizeStyle,
      fontWeightStyle,
      letterSpacingStyle,
      lineHeightStyle,
      props.bold,
      props.italic,
      textAlignmentStyle,
      textColorStyle,
      textDecorationStyle,
      textTransformStyle,
    ]
  )
  const style = generateStyledSystem(props, colors)

  return <TextInput {...props} style={[inputTextStyle, style, props.style]} ref={ref} />
})

export const Input = forwardRef<TextInput, InputProps>(
  (
    {
      isDisabled,
      isInvalid,
      secureTextIconName,
      secureTextIconColor,
      onFocus,
      onBlur,
      lineHeight,
      secureTextIconSize = 24,
      ...props
    },
    ref
  ) => {
    const {
      colors,
      shadows: { inputShadow },
    } = useTheme()

    const [isFocused, setIsFocused] = useState(false)
    const _inputRef = useRef<TextInput>(null)
    const { securePassword, toggleSecurePassword, iconName } = useSecurePassword(props.type)

    const layoutProps = useMemo(
      () =>
        Object.fromEntries(Object.entries(props).filter(([key]) => layoutPropsKeys.includes(key))),
      [props]
    )
    const inputProps = useMemo(
      () =>
        Object.fromEntries(Object.entries(props).filter(([key]) => !layoutPropsKeys.includes(key))),
      [props]
    )

    const handleFocus = useCallback(
      (e?: NativeSyntheticEvent<TextInputFocusEventData>) => {
        _inputRef.current?.focus()
        setIsFocused(true)
        if (onFocus && e) onFocus(e)
      },
      [setIsFocused, onFocus]
    )

    const handleBlur = useCallback(
      (e?: NativeSyntheticEvent<TextInputFocusEventData>) => {
        _inputRef.current?.blur()
        setIsFocused(false)
        if (onBlur && e) onBlur(e)
      },
      [setIsFocused, onBlur]
    )

    useImperativeHandle(
      ref,
      () =>
        ({
          focus: () => handleFocus(),
          blur: () => handleBlur(),
          ..._inputRef.current,
        } as unknown as TextInput),
      [handleBlur, handleFocus]
    )

    return (
      <Box
        flexDirection="row"
        alignItems="center"
        overflow="hidden"
        borderColor={isInvalid ? 'danger' : isFocused ? 'primaryLight' : 'inputBorder'}
        borderRadius={4}
        borderWidth={1}
        backgroundColor={isInvalid ? 'danger' : isFocused ? 'primaryLight' : 'background'}
        bgOpacity={isFocused ? 0.1 : 1}
        {...inputShadow}
        {...layoutProps}
      >
        <StyledInput
          ref={_inputRef}
          autoCapitalize="none"
          color={isInvalid ? 'danger' : 'text'}
          cursorColor={colors.primaryLight}
          editable={!isDisabled}
          flex={1}
          fontFamily="body"
          fontSize="xs"
          fontWeight="bold"
          height="100%"
          letterSpacing="xs"
          placeholder="Enter your email"
          px={3}
          py={2}
          secureTextEntry={securePassword}
          selectionColor={colors.primaryLight}
          width="100%"
          {...inputProps}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {props.type === 'password' ? (
          <Touchable mr={2} onPress={toggleSecurePassword}>
            <Icon
              name={secureTextIconName || iconName}
              color={secureTextIconColor || 'gray.400'}
              size={secureTextIconSize}
            />
          </Touchable>
        ) : (
          props.rightElement
        )}
      </Box>
    )
  }
)
