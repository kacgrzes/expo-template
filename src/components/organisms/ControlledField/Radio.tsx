import { forwardRef } from 'react'
import { Controller, get, ControllerProps } from 'react-hook-form'

import { Field } from '../../molecules'
import type { ControlledRadioProps } from './types'

import { RadioProps } from '~components/atoms'
import { useCallback } from '~hooks'

export const Radio = forwardRef<RadioProps, ControlledRadioProps>(
  ({ name, control, errors, isRequired, rules, ...props }, ref) => {
    const errorMessage = get(errors, name)?.message

    const renderRadio = useCallback(
      ({ field }: Parameters<ControllerProps['render']>[0]): JSX.Element => (
        <Field>
          <Field.Radio
            {...props}
            ref={ref}
            errorMessage={errorMessage}
            isError={!!errorMessage}
            name={field.name}
            value={field.value}
            onChange={(newValue: string): void => {
              field.onChange(newValue)
            }}
            isRequired={isRequired}
          />
        </Field>
      ),
      [errorMessage, props, isRequired, ref]
    )

    return <Controller name={name} control={control} rules={rules} render={renderRadio} />
  }
)
