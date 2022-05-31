import { Feather } from '@expo/vector-icons'
import { forwardRef, useCallback, useState } from 'react'
import { ChangeHandler, Control, Controller, get, Path, RegisterOptions } from 'react-hook-form'
import { FieldErrors } from 'react-hook-form/dist/types/errors'
import { StyleProp, StyleSheet, TextInput, TextInputProps, View, ViewStyle } from 'react-native'

import { Box, Touchable } from './Atoms'
import { Text } from './Typography'

import { useTheme, useMemo, useSecurePassword } from '~hooks'

type InputProps = TextInputProps & {
  placeholder: string
  label?: string
  error?: boolean
  inputContainerStyle?: StyleProp<ViewStyle>
  onInputBlur?: () => ChangeHandler
  fullWidth?: boolean
  type?: InputTypes
}

export const Input = forwardRef<TextInput, InputProps>(
  (
    {
      children,
      style,
      placeholder,
      error = false,
      label,
      inputContainerStyle,
      onInputBlur,
      fullWidth,
      type,
      value,
      editable = true,
      ...props
    },
    ref
  ) => {
    const { s, colors } = useTheme()
    const { securePassword, toggleSecurePassword, iconName, isPasswordType } =
      useSecurePassword(type)

    const [isFocused, setIsFocused] = useState(false)

    const isEmailType = type === 'email'

    const handleFocus = useCallback(() => {
      setIsFocused(true)
    }, [])
    const handleBlur = useCallback(() => {
      onInputBlur && onInputBlur()
      setIsFocused(false)
    }, [onInputBlur])

    const composedStyles = useMemo(
      () =>
        StyleSheet.compose<ViewStyle>(
          [
            fullWidth && s.wFull,
            s.fontLato,
            s.itemsCenter,
            s.itemsCenter,
            isPasswordType && s.justifyBetween,
            s.minW48,
            s.pR2,
            s.h10,
            s.roundedSm,
            editable && s.border,
            s.borderGray300,
            isFocused && [s.borderSecondaryDark, s.inputShadow],
            error && s.borderError,
          ],
          style
        ),
      [isPasswordType, fullWidth, s, editable, isFocused, error, style]
    )

    return (
      <View style={inputContainerStyle}>
        {label ? (
          <Text.CaptionBold color={error ? 'error' : 'secondaryDark'} style={[s.selfStart, s.mB1]}>
            {label}
          </Text.CaptionBold>
        ) : null}
        <Box
          alignItems="center"
          flexDirection="row"
          bg="white"
          style={composedStyles}
          bgOpacity={editable ? 0.8 : 1}
        >
          <TextInput
            placeholder={placeholder}
            autoCapitalize="none"
            editable={editable}
            ref={ref}
            secureTextEntry={securePassword}
            onFocus={handleFocus}
            style={[
              s.pX4,
              s.flex1,
              s.textBase,
              s.textSecondaryDark,
              !editable && s.textGray300,
              isFocused && s.textSecondaryDark,
              error && s.textError,
            ]}
            onBlur={handleBlur}
            placeholderTextColor={colors.gray300}
            testID="MAIN_INPUT"
            value={isEmailType ? value?.trim() : value}
            {...props}
          />
          {isPasswordType && (
            <Touchable onPress={toggleSecurePassword}>
              <Feather name={iconName} color={colors.gray300} size={24} />
            </Touchable>
          )}
        </Box>
      </View>
    )
  }
)

type ControlledInputProps = Omit<InputProps, 'style' | 'error' | 'inputContainerStyle'> & {
  // TODO: Think how to change this to proper type
  // Could be helpful when solving
  // - https://fettblog.eu/typescript-react-generic-forward-refs/
  // - https://react-hook-form.com/ts#Control
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  name: Path<any>
  rules?: Omit<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs'>
  errorMessage?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>
  errors: FieldErrors
  inputStyles?: StyleProp<ViewStyle>
  containerStyle?: StyleProp<ViewStyle>
}

export const ControlledInput = forwardRef<TextInput, ControlledInputProps>(
  (
    {
      placeholder,
      containerStyle,
      rules,
      name,
      errorMessage = '',
      errors,
      control,
      inputStyles,
      label,
      fullWidth,
      ...rest
    },
    ref
  ) => {
    const { s } = useTheme()
    const errorMessageText = get(errors, name)?.message

    const renderInput = useCallback(
      ({ field: { onChange, onBlur, value } }) => (
        <Input
          ref={ref}
          onInputBlur={onBlur}
          onChangeText={onChange}
          value={value}
          placeholder={placeholder}
          style={inputStyles}
          error={!!errorMessageText}
          label={label}
          fullWidth={fullWidth}
          {...rest}
        />
      ),
      [errorMessageText, fullWidth, inputStyles, label, placeholder, ref, rest]
    )

    return (
      <View style={[containerStyle, fullWidth && s.wFull]}>
        <Controller control={control} rules={rules} render={renderInput} name={name} />
        <Text style={[s.mT1, s.textError, s.pL1]}>{errorMessageText || ''}</Text>
      </View>
    )
  }
)
