import React, { PropsWithChildren } from 'react'

import { Checkbox } from './Checkbox'
import { Input } from './Input'
import { Radio } from './Radio'

type ControlledFieldComposition = React.FC<PropsWithChildren> & {
  Input: typeof Input
  Checkbox: typeof Checkbox
  Radio: typeof Radio
}

const ControlledField: ControlledFieldComposition = ({ children }) => {
  return <React.Fragment>{children}</React.Fragment>
}

ControlledField.Input = Input
ControlledField.Checkbox = Checkbox
ControlledField.Radio = Radio

export { ControlledField }
export * from './types'
