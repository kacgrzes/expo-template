import { useState } from '~hooks'

export const useHover = () => {
  const [isHovered, setHovered] = useState(false)
  return {
    hoverProps: {
      onHoverIn: () => setHovered(true),
      onHoverOut: () => setHovered(false),
    },
    isHovered,
  }
}
