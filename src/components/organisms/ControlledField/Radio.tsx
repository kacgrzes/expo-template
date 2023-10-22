import { Controller, get, ControllerProps } from 'react-hook-form'

import type { ControlledRadioProps } from './types'
import { Field } from '../../molecules'

import { useCallback } from '~hooks'

export const Radio = ({
  name,
  control,
  errors,
  isRequired,
  rules,
  ...props
}: ControlledRadioProps) => {
  const errorMessage = get(errors, name)?.message

  const renderRadio = useCallback(
    ({
      field: { ref, name, value, onChange },
    }: Parameters<ControllerProps['render']>[0]): JSX.Element => (
      <Field.Radio
        {...props}
        ref={ref}
        errorMessage={errorMessage}
        isError={!!errorMessage}
        name={name}
        value={value}
        onChange={onChange}
        isRequired={isRequired}
      />
    ),
    [errorMessage, props, isRequired]
  )

  return <Controller name={name} control={control} rules={rules} render={renderRadio} />
}
