import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { useAuth, useTranslation } from '~hooks'

export const HomeScreen = () => {
  const { t } = useTranslation()
  const { signOut } = useAuth()

  return (
    <View>
      <Text>{t('hello')}</Text>
      <Pressable onPress={signOut}>
        <Text>Sign out!</Text>
      </Pressable>
    </View>
  )
}
