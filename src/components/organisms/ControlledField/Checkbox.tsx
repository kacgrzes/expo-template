import { Controller, ControllerProps, get } from 'react-hook-form'

import { Field } from '../../molecules'
import type { ControlledCheckboxProps } from './types'

import { useCallback } from '~hooks'

export const Checkbox: React.FC<ControlledCheckboxProps> = ({
  name,
  control,
  errors,
  isRequired,
  rules,
  ...props
}) => {
  const errorMessage = get(errors, name)?.message

  const renderCheckbox = useCallback(
    ({ field }: Parameters<ControllerProps['render']>[0]) => (
      <Field>
        <Field.Checkbox
          {...props}
          name={field.name}
          value={field.value}
          errorMessage={errorMessage}
          onChange={(newValue) => field.onChange(newValue)}
          isError={!!errorMessage}
          isRequired={isRequired}
        />
      </Field>
    ),
    [errorMessage, isRequired, props]
  )
  return <Controller name={name} control={control} rules={rules} render={renderCheckbox} />
}
