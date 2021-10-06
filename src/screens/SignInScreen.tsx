import React, { FC } from 'react'
import { View } from 'react-native'

import { Button } from '~components'
import { useAuth, useTheme } from '~hooks'

export const SignInScreen: FC = () => {
  const { signIn } = useAuth()
  const { s } = useTheme()

  return (
    <View style={[s.flex1, s.justifyCenter, s.itemsCenter]}>
      <Button onPress={signIn} title="Sign in" />
    </View>
  )
}
