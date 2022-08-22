import { Feather } from '@expo/vector-icons'
import { Input as NBInput, useTheme, Pressable as Touchable } from 'native-base'
import { forwardRef } from 'react'
import { TextInput } from 'react-native'

import type { InputProps } from '.'

import { useSecurePassword } from '~hooks'

/**
 * Extended native-base Input component with a secure password icon.
 */
export const Input = forwardRef<TextInput, InputProps>(
  ({ secureTextIconName, secureTextIconColor, secureTextIconSize = 24, ...props }, ref) => {
    const { colors } = useTheme()
    const { securePassword, toggleSecurePassword, iconName } = useSecurePassword(props.type)
    return (
      <NBInput
        {...props}
        value={props.value}
        autoCapitalize="none"
        ref={ref || undefined}
        secureTextEntry={securePassword}
        rightElement={
          props.type === 'password' ? (
            <Touchable mr={2} onPress={toggleSecurePassword}>
              <Feather
                name={secureTextIconName || iconName}
                color={secureTextIconColor || colors.gray['400']}
                size={secureTextIconSize}
              />
            </Touchable>
          ) : (
            props.rightElement
          )
        }
      />
    )
  }
)
