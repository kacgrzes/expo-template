import BottomSheet from '@gorhom/bottom-sheet'
import React, { FC, useCallback, useMemo, useRef } from 'react'
import { View, Text, Image, ImageStyle } from 'react-native'

import { Button } from '~components'
import { useAuth, useTranslation, useTheme } from '~hooks'

export const HomeScreen: FC = () => {
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
        style={[s.h24] as ImageStyle[]}
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
