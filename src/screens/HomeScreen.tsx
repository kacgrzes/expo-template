import React, { useCallback, useEffect, useMemo, useRef } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import BottomSheet from '@gorhom/bottom-sheet'
import { useAuth, useTranslation } from '~hooks'
import { Button } from '~components'

export const HomeScreen = () => {
  const { t } = useTranslation()
  const { signOut } = useAuth()

  // ref
  const bottomSheetRef = useRef<BottomSheet>(null)

  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], [])

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index)
  }, [])

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
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <View style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </View>
      </BottomSheet>
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
