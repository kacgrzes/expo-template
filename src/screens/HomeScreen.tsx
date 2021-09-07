import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { useAuth, useTranslation } from '~hooks'
import { Button } from '~components'

export const HomeScreen = () => {
  const { t } = useTranslation()
  const { signOut } = useAuth()

  useEffect(() => {
    fetch('/api/timestamp')
      .then((response) => response.json())
      .then((data) => {
        alert(`This is just an example response form miragejs \n\n ${JSON.stringify(data)}`)
      })
  }, [])

  return (
    <View style={styles.container}>
      <Text>{t('hello')}</Text>
      <Image
        source={require('~assets/logo.png')}
        resizeMode="contain"
        resizeMethod="resize"
        style={{
          height: 100,
        }}
      />
      <Button onPress={signOut}>Sign out!</Button>
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
