import { useEffect, useState } from 'react'
import { Keyboard, KeyboardEventListener } from 'react-native'

export const useKeyboardHeight = () => {
  const [keyboardHeight, setKeyboardHeight] = useState<number>(0)
  useEffect(() => {
    const showListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow)
    const hideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide)

    // cleanup function
    return () => {
      showListener.remove()
      hideListener.remove()
    }
  }, [])

  const keyboardDidShow: KeyboardEventListener = (frames) => {
    setKeyboardHeight(frames?.endCoordinates?.height)
  }

  const keyboardDidHide = () => {
    setKeyboardHeight(0)
  }

  return keyboardHeight
}
