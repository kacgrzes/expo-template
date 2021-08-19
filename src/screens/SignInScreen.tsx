import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Button } from '~components'
import { useAuth } from '~hooks'

export const SignInScreen = () => {
  const { signIn } = useAuth()
  return (
    <View style={styles.container}>
      <Button onPress={signIn}>Sign in</Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
