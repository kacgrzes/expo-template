import React, { PropsWithChildren } from 'react'

import { Checkbox } from './Checkbox'
import { Input } from './Input'
import { Radio } from './Radio'
import { Select } from './Select'

type FieldComposition = React.FC<PropsWithChildren> & {
  Input: typeof Input
  Checkbox: typeof Checkbox
  Radio: typeof Radio
  Select: typeof Select
}

const Field: FieldComposition = ({ children }) => {
  return <React.Fragment>{children}</React.Fragment>
}

Field.Input = Input
Field.Checkbox = Checkbox
Field.Radio = Radio
Field.Select = Select

export { Field }
export * from './types'
