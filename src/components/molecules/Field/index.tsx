import React, { PropsWithChildren } from 'react'

import { Checkbox } from './Checkbox'
import { Input } from './Input'
import { Radio } from './Radio'

type FieldComposition = React.FC<PropsWithChildren> & {
  Input: typeof Input
  Checkbox: typeof Checkbox
  Radio: typeof Radio
}

const Field: FieldComposition = ({ children }) => {
  return <React.Fragment>{children}</React.Fragment>
}

Field.Input = Input
Field.Checkbox = Checkbox
Field.Radio = Radio

export { Field }
export * from './types'
