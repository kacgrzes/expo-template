import { FormControl, Radio as NBRadio } from 'native-base'
import { MutableRefObject, forwardRef } from 'react'

import { FieldRadioProps } from './types'

export const Radio = forwardRef<typeof NBRadio, FieldRadioProps>(
  (
    { isInvalid, isRequired, isDisabled, value, radioOptions, name, errorMessage, onChange },
    ref
  ) => {
    return (
      <FormControl isInvalid={isInvalid} isRequired={isRequired} isDisabled={isDisabled}>
        <NBRadio.Group name={name} value={value} onChange={onChange}>
          {radioOptions?.map((radio) => (
            <NBRadio key={radio} value={radio} my={1} ref={ref as MutableRefObject<typeof NBRadio>}>
              {radio}
            </NBRadio>
          ))}
        </NBRadio.Group>
        <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
      </FormControl>
    )
  }
)
