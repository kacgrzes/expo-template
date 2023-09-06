// TODO: ISSUE-33 (https://github.com/binarapps/expo-ts-template/issues/33)
// Remove native-base components when issue is resolved
import { Input as NBInput, Pressable as Touchable } from 'native-base'
import { forwardRef } from 'react'
import { TextInput } from 'react-native'

import type { InputProps } from '.'
import { Icon } from './Icon'

import { useSecurePassword } from '~hooks'

/**
 * Extended native-base Input component with a secure password icon.
 */
export const Input = forwardRef<TextInput, InputProps>(
  ({ secureTextIconName, secureTextIconColor, secureTextIconSize = 24, ...props }, ref) => {
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
              <Icon
                name={secureTextIconName || iconName}
                color={secureTextIconColor || 'gray.400'}
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
