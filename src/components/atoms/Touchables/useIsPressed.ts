import { useState } from '~hooks'

export const useIsPressed = () => {
  const [isPressed, setIsPressed] = useState(false)
  return {
    pressableProps: {
      onPressIn: () => setIsPressed(true),
      onPressOut: () => setIsPressed(false),
    },
    isPressed,
  }
}
