import { BottomSheetModal, BottomSheetBackdrop } from '@gorhom/bottom-sheet'
import React, { FC, useCallback, useMemo, useRef } from 'react'
import { View, Text } from 'react-native'

import { Button } from '~components'
import { useRoute, useTheme } from '~hooks'

export const DetailsScreen: FC = () => {
  const { s } = useTheme()
  const { params } = useRoute()

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
      <Text>This is details screen</Text>
      <Button onPress={openModal} title="Open BottomSheetModal" style={[s.mB2]} />
      <Text>Screen params {JSON.stringify(params)}</Text>
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
