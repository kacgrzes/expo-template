import { useState } from '~hooks'

export const useFocus = () => {
  const [isFocused, setFocused] = useState(false)
  return {
    focusProps: {
      onFocus: () => setFocused(true),
      onBlur: () => setFocused(false),
    },
    isFocused,
  }
}
