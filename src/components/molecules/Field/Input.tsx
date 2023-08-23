import { Box, Text } from 'native-base'
import { forwardRef, useCallback, useImperativeHandle, useRef } from 'react'
import { NativeSyntheticEvent, Pressable, TextInput, TextInputFocusEventData } from 'react-native'

import { Input as BaseInput } from '../../atoms/Input'
import type { FieldInputProps } from './types'

import { useMemo } from '~hooks'

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

export const Input = forwardRef<Partial<TextInput>, FieldInputProps>(
  (
    {
      isDisabled,
      isRequired,
      isInvalid,
      label,
      helperText,
      errorMessage,
      onFocus,
      onBlur,
      ...props
    },
    ref
  ) => {
    const _inputRef = useRef<TextInput>(null)

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
        onFocus && e && onFocus?.(e)
        _inputRef?.current?.focus()
      },
      [onFocus]
    )
    const handleBlur = useCallback(
      (e?: NativeSyntheticEvent<TextInputFocusEventData>) => {
        onBlur && e && onBlur(e)
        _inputRef.current?.blur()
      },
      [onBlur]
    )

    useImperativeHandle(
      ref,
      () => ({
        focus: handleFocus,
        blur: handleBlur,
        ..._inputRef.current,
      }),
      [handleBlur, handleFocus]
    )

    return (
      <Box {...layoutProps} width="100%" mb="2">
        <Pressable onPress={() => handleFocus()}>
          {label && (
            <Text color="gray.600" mb="1">
              {label}
              {isRequired && <Text color="error.600">*</Text>}
            </Text>
          )}
          <BaseInput
            isRequired={isRequired}
            isInvalid={isInvalid || Boolean(errorMessage)}
            {...inputProps}
            ref={_inputRef}
          />
          {errorMessage && (
            <Text mt="1" color="error.600">
              {errorMessage}
            </Text>
          )}
        </Pressable>
      </Box>
    )
  }
)
