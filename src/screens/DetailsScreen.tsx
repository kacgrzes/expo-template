import {
  BottomSheetModal,
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
} from '@gorhom/bottom-sheet'
import { Box, Center, Text, Button } from 'native-base'

import { useCallback, useMemo, useRef } from '~hooks'

export const DetailsScreen = (props: DetailsScreenProps): JSX.Element => {
  const {
    route: { params },
  } = props

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
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop {...props} disappearsOnIndex={-1} appearsOnIndex={0} />
    ),
    []
  )

  return (
    <Center>
      <Text>This is details screen</Text>
      <Button onPress={openModal}>Open BottomSheetModal</Button>
      <Text>Screen params {JSON.stringify(params)}</Text>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        backdropComponent={renderBackdrop}
      >
        <Box p={4}>
          <Text color="black">Awesome 🎉</Text>
        </Box>
      </BottomSheetModal>
    </Center>
  )
}
