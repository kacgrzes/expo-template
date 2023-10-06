import { BottomSheetModal } from '@gorhom/bottom-sheet'
import { useCallback, useRef } from 'react'

import { BottomSheet } from './BottomSheet'

export const useBottomSheet = ({ title = '' }) => {
  const bottomSheetRef = useRef<BottomSheetModal>(null)

  const bottomSheetComponentRenderFunction = (children: JSX.Element | JSX.Element[]) => {
    return (
      <BottomSheet title={title} bottomSheetRef={bottomSheetRef}>
        {children}
      </BottomSheet>
    )
  }

  const presentBottomSheet = useCallback(() => {
    bottomSheetRef.current?.present?.()
  }, [])

  return {
    bottomSheetComponentRenderFunction,
    presentBottomSheet,
  }
}
