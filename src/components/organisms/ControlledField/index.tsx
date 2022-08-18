import React from 'react'

import { Checkbox } from './Checkbox'
import { Input } from './Input'

type ControlledFieldComposition = React.FC & {
  Input: typeof Input
  Checkbox: typeof Checkbox
}

const ControlledField: ControlledFieldComposition = ({ children }) => {
  return <React.Fragment>{children}</React.Fragment>
}

ControlledField.Input = Input
ControlledField.Checkbox = Checkbox

export { ControlledField }
export * from './types'
