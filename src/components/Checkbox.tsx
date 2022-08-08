import { Checkbox as NBCheckbox, ICheckboxProps, FormControl } from 'native-base'
import {
  Control,
  Controller,
  ControllerRenderProps,
  FieldErrors,
  FieldValues,
  get,
} from 'react-hook-form'

import { useCallback } from '~hooks'

type CheckboxProps = Omit<ICheckboxProps, 'value'> & {
  label: string
  isRequired?: boolean
  isInvalid?: boolean
  value: boolean
}

interface RenderCheckboxProps {
  field: ControllerRenderProps<FieldValues, string>
}

export const Checkbox: React.FC<CheckboxProps> = ({
  isInvalid,
  isRequired,
  label,
  value,
  name,
  onChange,
  ...props
}) => (
  <FormControl isInvalid={isInvalid} isRequired={isRequired} {...props}>
    <NBCheckbox
      value={name ?? ''}
      isChecked={value}
      onChange={onChange}
      _invalid={{ _text: { color: 'error.500', fontWeight: 'bold' } }}
    >
      {label}
    </NBCheckbox>
  </FormControl>
)

type ControlledCheckboxProps = Omit<CheckboxProps, 'value'> & {
  name: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>
  errors?: FieldErrors
}

export const ControlledCheckbox: React.FC<ControlledCheckboxProps> = ({
  name,
  control,
  errors,
  isRequired,
  ...props
}) => {
  const error = !!get(errors, name)

  const handlePress = useCallback(
    (field: ControllerRenderProps) => (newValue: boolean) => field.onChange(newValue),
    []
  )

  const renderCheckbox = useCallback(
    ({ field }: RenderCheckboxProps) => (
      <Checkbox
        {...props}
        name={field.name}
        value={field.value}
        onChange={handlePress(field)}
        isInvalid={error}
        isRequired={isRequired}
      />
    ),
    [error, isRequired, handlePress, props]
  )

  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: isRequired }}
      render={renderCheckbox}
    />
  )
}
