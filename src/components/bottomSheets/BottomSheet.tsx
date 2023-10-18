import {
  BottomSheetModal,
  BottomSheetScrollView,
  useBottomSheetDynamicSnapPoints,
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
} from '@gorhom/bottom-sheet'
import { RefObject, useCallback } from 'react'

import { BottomSheetHeader } from './BottomSheetHeader'

import { Box } from '~components/atoms/Box'
import { useColorScheme } from '~contexts'
import { useMemo } from '~hooks'

type Props = {
  bottomSheetRef: RefObject<BottomSheetModal>
  children: JSX.Element | JSX.Element[]
  title?: string
  showCloseButton?: boolean
  numberOfTitleLines?: number
}

export { BottomSheetScrollView }
export const BottomSheet = ({
  children,
  title,
  showCloseButton = true,
  numberOfTitleLines,
  bottomSheetRef,
}: Props) => {
  const snapPoints = useMemo(() => ['CONTENT_HEIGHT'], [])
  const { animatedHandleHeight, animatedContentHeight, animatedSnapPoints, handleContentLayout } =
    useBottomSheetDynamicSnapPoints(snapPoints)

  const { colorScheme } = useColorScheme()

  const handleClose = useCallback(() => {
    bottomSheetRef?.current?.snapToPosition(-1)
  }, [bottomSheetRef])

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop {...props} disappearsOnIndex={-1} appearsOnIndex={0} />
    ),
    []
  )

  return (
    <BottomSheetModal
      ref={bottomSheetRef}
      index={0}
      backdropComponent={renderBackdrop}
      snapPoints={animatedSnapPoints}
      handleHeight={animatedHandleHeight}
      contentHeight={animatedContentHeight}
    >
      <Box bg="background" py={4} onLayout={handleContentLayout}>
        <BottomSheetHeader
          title={title}
          numberOfLines={numberOfTitleLines}
          showCloseButton={showCloseButton}
          onClose={handleClose}
        />
        <Box pb="1px" bg={colorScheme === 'dark' ? 'gray.900' : 'light'} />
        {children}
      </Box>
    </BottomSheetModal>
  )
}
