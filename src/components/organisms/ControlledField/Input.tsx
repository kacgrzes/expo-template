import { useCallback } from 'react'
import { Controller, get } from 'react-hook-form'

import type { ControlledInputProps, RenderInputProps } from './types'
import { Field } from '../../molecules'

export const Input = ({
  control,
  name,
  errors,
  rules,
  children,
  ...props
}: ControlledInputProps) => {
  const errorMessage = get(errors, name)?.message

  const renderInput = useCallback(
    ({ field: { onChange, name, ref, ...fieldProps } }: RenderInputProps) => (
      <Field.Input
        {...props}
        {...fieldProps}
        ref={ref}
        errorMessage={errorMessage}
        onChangeText={onChange}
      />
    ),
    [errorMessage, props]
  )

  return <Controller name={name} control={control} rules={rules} render={renderInput} />
}
