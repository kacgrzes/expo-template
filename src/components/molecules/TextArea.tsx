import { forwardRef } from 'react'
import { TextInput } from 'react-native'

import { Input } from '../atoms/Input'
import type { InputProps } from '../atoms/types'

export const TextArea = forwardRef<TextInput, InputProps>((props, ref) => (
  <Input ref={ref} {...props} multiline height={20} />
))
