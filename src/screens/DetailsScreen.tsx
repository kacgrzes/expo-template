import {
  BottomSheetModal,
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
} from '@gorhom/bottom-sheet'
import { Box, Center, Text, Button } from 'native-base'

import { useCallback, useMemo, useRef, useTranslation } from '~hooks'

export const DetailsScreen = (props: DetailsScreenProps): JSX.Element => {
  const {
    route: { params },
  } = props

  const { t } = useTranslation()

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
      <Text>{t('details_screen.title')}</Text>
      <Button onPress={openModal}>{t('details_screen.open_bottom_sheet')}</Button>
      <Text>{t('details_screen.screen_params', { params: JSON.stringify(params) })}</Text>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        backdropComponent={renderBackdrop}
      >
        <Box p={4}>
          <Text color="black">{t('details_screen.awesome')}</Text>
        </Box>
      </BottomSheetModal>
    </Center>
  )
}
