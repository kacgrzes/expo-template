import { useDimensions } from '@react-native-community/hooks'
import { useState, useEffect } from 'react'

import { theme } from '~constants'

type ReturnType = {
  webContentWidth: number
  shouldApplyDesktopStyles: boolean
  shouldApplyMobileStyles: boolean
}
const {
  breakpoints: { desktop, tablet },
} = theme

export const useWeb: () => ReturnType = () => {
  const [width, setWidth] = useState<number>(0)
  const {
    screen: { width: screenWidth },
    window: { width: windowWidth },
  } = useDimensions()

  useEffect(() => {
    switch (true) {
      case windowWidth < tablet:
        setWidth(windowWidth)
        break
      case windowWidth >= tablet && windowWidth < desktop:
        setWidth(tablet)
        break
      case windowWidth >= desktop:
        setWidth(desktop)
        break
      default:
        setWidth(screenWidth)
    }
  }, [screenWidth, windowWidth])

  return {
    webContentWidth: width,
    shouldApplyDesktopStyles: width >= desktop,
    shouldApplyMobileStyles: width < tablet,
  }
}
