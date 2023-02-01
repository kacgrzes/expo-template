import { BottomSheetModal } from '@gorhom/bottom-sheet'
import { useCallback, useRef } from 'react'

import { BottomSheet } from './BottomSheet'

export const useBottomSheet = () => {
  const bottomSheetRef = useRef<BottomSheetModal>(null)

  const bottomSheetComponentRenderFunction = (children: JSX.Element | JSX.Element[]) => {
    return <BottomSheet ref={bottomSheetRef}>{children}</BottomSheet>
  }

  const presentBottomSheet = useCallback(() => {
    bottomSheetRef.current?.present?.()
  }, [])

  return {
    bottomSheetComponentRenderFunction,
    presentBottomSheet,
  }
}
