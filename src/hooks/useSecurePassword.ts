import { IInputProps } from 'native-base'
import { useCallback, useState } from 'react'

import { IconNames } from '~types/icon'

export const useSecurePassword = (type: IInputProps['type']) => {
  const isPasswordType = type === 'password'
  const [securePassword, setSecurePassword] = useState(isPasswordType)
  const iconName: IconNames = securePassword ? 'eye-line' : 'eye-off-line'

  const toggleSecurePassword = useCallback(() => {
    setSecurePassword(!securePassword)
  }, [securePassword])

  return {
    isPasswordType,
    securePassword,
    iconName,
    toggleSecurePassword,
  }
}
