import { FormControl, Checkbox as NBCheckbox } from 'native-base'
import { forwardRef, MutableRefObject } from 'react'

import { FieldCheckboxProps } from './types'

export const Checkbox = forwardRef<typeof NBCheckbox, FieldCheckboxProps>(
  ({ isInvalid, isRequired, isDisabled, label, ...props }, ref) => {
    return (
      <FormControl isInvalid={isInvalid} isRequired={isRequired} isDisabled={isDisabled}>
        <NBCheckbox ref={ref as MutableRefObject<typeof NBCheckbox>} {...props}>
          {label}
        </NBCheckbox>
      </FormControl>
    )
  }
)
