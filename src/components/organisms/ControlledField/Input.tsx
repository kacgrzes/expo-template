import { forwardRef, useCallback } from 'react'
import { Controller, get } from 'react-hook-form'
import { TextInput } from 'react-native'

import { Field } from '../../molecules'
import type { ControlledInputProps } from './types'

export const Input = forwardRef<TextInput, ControlledInputProps>(
  ({ control, name, errors, rules, children, ...props }, ref) => {
    const errorMessage = get(errors, name)?.message

    const renderInput = useCallback(
      ({ field: { onChange, name, ...fieldProps } }) => (
        <Field.Input
          {...props}
          {...fieldProps}
          ref={ref}
          errorMessage={errorMessage}
          onChangeText={onChange}
        />
      ),
      [ref, errorMessage, props]
    )

    return <Controller name={name} control={control} rules={rules} render={renderInput} />
  }
)
