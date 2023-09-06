import {
  BottomSheetModal,
  BottomSheetScrollView,
  useBottomSheetDynamicSnapPoints,
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
} from '@gorhom/bottom-sheet'
import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types'
import { forwardRef, Ref, useCallback } from 'react'

import { Box } from '~components/atoms'
import { useMemo } from '~hooks'

type Props = {
  children: JSX.Element | JSX.Element[]
}

export { BottomSheetScrollView }
export const BottomSheet = forwardRef(
  ({ children }: Props, ref: Ref<BottomSheetModalMethods> | undefined) => {
    const snapPoints = useMemo(() => ['CONTENT_HEIGHT'], [])
    const { animatedHandleHeight, animatedContentHeight, animatedSnapPoints, handleContentLayout } =
      useBottomSheetDynamicSnapPoints(snapPoints)

    const renderBackdrop = useCallback(
      (props: BottomSheetBackdropProps) => (
        <BottomSheetBackdrop {...props} disappearsOnIndex={-1} appearsOnIndex={0} />
      ),
      []
    )

    return (
      <BottomSheetModal
        ref={ref}
        index={0}
        backdropComponent={renderBackdrop}
        snapPoints={animatedSnapPoints}
        handleHeight={animatedHandleHeight}
        contentHeight={animatedContentHeight}
      >
        <Box py="4" onLayout={handleContentLayout}>
          {children}
        </Box>
      </BottomSheetModal>
    )
  }
)
