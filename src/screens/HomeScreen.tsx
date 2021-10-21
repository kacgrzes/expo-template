import { BottomSheetModal, BottomSheetBackdrop } from '@gorhom/bottom-sheet'
import React, { FC, useCallback, useMemo, useRef } from 'react'
import { View, Text, Image, ImageStyle } from 'react-native'

import { Button } from '~components'
import { useAuth, useTranslation, useTheme } from '~hooks'

export const HomeScreen: FC = () => {
  const { t } = useTranslation()
  const { signOut } = useAuth()
  const { s } = useTheme()

  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null)

  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], [])

  // callbacks
  const openModal = useCallback(() => {
    bottomSheetModalRef.current?.present()
  }, [])

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index)
  }, [])

  const renderBackdrop = useCallback(
    (props) => <BottomSheetBackdrop {...props} disappearsOnIndex={-1} appearsOnIndex={0} />,
    []
  )

  return (
    <View style={[s.flex1, s.justifyCenter, s.itemsCenter]}>
      <Text>{t('hello')}</Text>
      <Image
        source={require('~assets/logo.png')}
        resizeMode="contain"
        resizeMethod="resize"
        style={[s.h24] as ImageStyle[]}
      />
      <Button onPress={openModal} title="Open BottomSheetModal" style={[s.mB2]} />
      <Button onPress={signOut} title="Sign out!" />
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        backdropComponent={renderBackdrop}
      >
        <View style={[s.p4]}>
          <Text>Awesome 🎉</Text>
        </View>
      </BottomSheetModal>
    </View>
  )
}
