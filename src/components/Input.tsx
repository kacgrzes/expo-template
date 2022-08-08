import { Feather } from '@expo/vector-icons'
import { IInputProps, FormControl, useTheme, Input as NBInput } from 'native-base'
import { forwardRef } from 'react'
import {
  ChangeHandler,
  Control,
  Controller,
  FieldErrors,
  Path,
  RegisterOptions,
  get,
} from 'react-hook-form'
import { TextInput } from 'react-native'

import { Touchable } from './Atoms'

import { useSecurePassword, useCallback, useMemo } from '~hooks'

type InputProps = IInputProps & {
  label?: string
  helperText?: string
  errorMessage?: string
  errorIcon?: JSX.Element
  onInputBlur?: () => ChangeHandler
}

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

export const Input = forwardRef<TextInput, InputProps>(
  ({ label, helperText, isRequired, errorMessage, errorIcon, onInputBlur, ...props }, ref) => {
    const { colors } = useTheme()

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

    const { securePassword, toggleSecurePassword, iconName } = useSecurePassword(props.type)
    const handleBlur = useCallback(() => {
      onInputBlur?.()
    }, [onInputBlur])

    return (
      <FormControl isRequired={isRequired} isInvalid={Boolean(errorMessage)} {...layoutProps}>
        {label && (
          <FormControl.Label
            _disabled={{
              _text: {
                color: 'gray.400',
                fontWeight: 'bold',
              },
            }}
          >
            {label}
          </FormControl.Label>
        )}
        <NBInput
          {...inputProps}
          onBlur={handleBlur}
          ref={ref || undefined}
          secureTextEntry={securePassword}
          rightElement={
            inputProps.type === 'password' ? (
              <Touchable mr={2} onPress={toggleSecurePassword}>
                <Feather name={iconName} color={colors.gray['400']} size={24} />
              </Touchable>
            ) : (
              inputProps.rightElement
            )
          }
        />
        {helperText && <FormControl.HelperText>{helperText}</FormControl.HelperText>}
        {errorMessage && (
          <FormControl.ErrorMessage leftIcon={errorIcon}>{errorMessage}</FormControl.ErrorMessage>
        )}
      </FormControl>
    )
  }
)

type ControlledInputProps = InputProps & {
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
}

export const ControlledInput = forwardRef<TextInput, ControlledInputProps>(
  ({ placeholder, label, control, rules, name, errors, ...props }, ref) => {
    const errorMessage = get(errors, name)?.message
    const renderInput = useCallback(
      // @ts-expect-error: field parameters should be typed
      ({ field: { onChange, onBlur, value } }) => (
        <Input
          {...props}
          ref={ref}
          onInputBlur={onBlur}
          onChangeText={onChange}
          value={value}
          placeholder={placeholder}
          errorMessage={errorMessage}
          label={label}
        />
      ),
      [ref, placeholder, errorMessage, label, props]
    )

    return <Controller name={name} control={control} rules={rules} render={renderInput} />
  }
)
