import React, { useCallback, useMemo, useRef } from 'react'
import { View, Text, Image } from 'react-native'
import BottomSheet from '@gorhom/bottom-sheet'
import { useAuth, useTranslation, useTheme } from '~hooks'
import { Button } from '~components'

export const HomeScreen = () => {
  const { t } = useTranslation()
  const { signOut } = useAuth()
  const { s } = useTheme()

  // ref
  const bottomSheetRef = useRef<BottomSheet>(null)

  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], [])

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index)
  }, [])

  return (
    <View style={[s.flex1, s.justifyCenter, s.itemsCenter]}>
      <Text>{t('hello')}</Text>
      <Image
        source={require('~assets/logo.png')}
        resizeMode="contain"
        resizeMethod="resize"
        style={[s.h24]}
      />
      <Button onPress={signOut} title="Sign out!" />
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <View style={[s.p4]}>
          <Text>Awesome 🎉</Text>
        </View>
      </BottomSheet>
    </View>
  )
}
