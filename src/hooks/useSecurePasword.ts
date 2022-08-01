import { IInputProps } from 'native-base'
import { useCallback, useState } from 'react'

export const useSecurePassword = (type: IInputProps['type']) => {
  const isPasswordType = type === 'password'
  const [securePassword, setSecurePassword] = useState(isPasswordType)
  const iconName: 'eye' | 'eye-off' = securePassword ? 'eye-off' : 'eye'

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
