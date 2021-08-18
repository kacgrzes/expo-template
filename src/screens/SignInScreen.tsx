import React from 'react'
import { Pressable, Text } from 'react-native'
import { useAuth } from '~hooks'

export const SignInScreen = () => {
  const { signIn } = useAuth()
  return (
    <Pressable onPress={signIn}>
      <Text>Sign in!</Text>
    </Pressable>
  )
}
