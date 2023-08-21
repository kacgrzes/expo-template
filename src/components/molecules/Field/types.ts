import { ICheckboxProps, IFormControlProps, IRadioGroupProps } from 'native-base'

import { InputProps } from '~components'

export type FieldInputProps = InputProps & {
  label?: string
  helperText?: string
  errorMessage?: string
  errorIcon?: JSX.Element
}

export type FieldCheckboxProps = ICheckboxProps &
  IFormControlProps & {
    label?: string
  }

export type FieldRadioProps = IRadioGroupProps &
  IFormControlProps & {
    label?: string
    radioOptions?: string[]
    errorMessage?: string
  }
