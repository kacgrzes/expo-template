// TODO: ISSUE-33 (https://github.com/binarapps/expo-ts-template/issues/33)
// Remove native-base components when issue is resolved
import { Box, Modal } from 'native-base'
import { forwardRef, useCallback, useImperativeHandle } from 'react'
import { ScrollView } from 'react-native'

import { useState } from '~hooks'

type Props = {
  children: JSX.Element | JSX.Element[]
}
export const BottomSheetScrollView = ScrollView
export const BottomSheet = forwardRef(({ children }: Props, ref) => {
  const [isOpen, setIsOpen] = useState(false)

  useImperativeHandle(ref, () => ({
    snapToPosition: (index: number) => {
      if (index === -1) {
        setIsOpen(false)
      }
    },
    present: () => {
      // show modal
      setIsOpen(true)
    },
  }))
  const closeModalHandler = useCallback(() => {
    setIsOpen(false)
  }, [])

  return (
    <Modal isOpen={isOpen} onClose={closeModalHandler}>
      <Box bg="white" py="4">
        {children}
      </Box>
    </Modal>
  )
})
