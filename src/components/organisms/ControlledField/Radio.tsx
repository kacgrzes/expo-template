import { Radio as NBRadio } from 'native-base'
import { forwardRef } from 'react'
import { Controller, get } from 'react-hook-form'

import { Field } from '../../molecules'
import type { ControlledRadioProps, RenderInputProps } from './types'

import { useCallback } from '~hooks'

export const Radio = forwardRef<typeof NBRadio, ControlledRadioProps>(
  ({ name, control, errors, isRequired, onChange, ...props }, ref) => {
    const error = !!get(errors, name)

    const renderRadio = useCallback(
      ({ field }: RenderInputProps): JSX.Element => (
        <Field>
          <Field.Radio
            {...props}
            ref={ref}
            name={field.name}
            value={field.value}
            onChange={(newValue: string): void => {
              field.onChange(newValue)
            }}
            isInvalid={error}
            isRequired={isRequired}
          />
        </Field>
      ),
      [error, isRequired, props, ref]
    )

    return (
      <Controller
        name={name}
        control={control}
        rules={{ required: isRequired }}
        render={renderRadio}
      />
    )
  }
)
