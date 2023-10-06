import { CheckboxProps, FormLabelProps, InputProps, RadioProps, SelectProps } from '~components'

export type FieldInputProps = InputProps &
  FormLabelProps & {
    helperText?: string
    errorMessage?: string
    errorIcon?: JSX.Element
    onFocus?: () => void
  }

export type FieldRadioProps = RadioProps &
  FormLabelProps & {
    radioOptions?: string[]
    errorMessage?: string
    isInvalid?: boolean
    isDisabled?: boolean
    name: string
  }

export type FieldSelectProps<T> = SelectProps<T> &
  FormLabelProps & {
    helperText?: string
    errorMessage?: string
    errorIcon?: JSX.Element
    isInvalid?: boolean
  }

export type FieldCheckboxProps = CheckboxProps &
  FormLabelProps & {
    checkboxes?: string[]
    errorMessage?: string
    isInvalid?: boolean
    isDisabled?: boolean
    name: string
  }
