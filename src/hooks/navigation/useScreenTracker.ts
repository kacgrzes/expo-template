import { NavigationContainerRefWithCurrent } from '@react-navigation/core'
import { useCallback, useRef } from 'react'

import { navigationRef } from '~utils'

type Callback = (currentRouteName: string) => Promise<void> | undefined

const defaultCallback: Callback = async (currentRouteName) => {
  // TODO: Add analytics logs here
  // console.log(`Current route: ${currentRouteName}`)
}

type ScreenTrackerReturn = {
  navigationRef: NavigationContainerRefWithCurrent<ReactNavigation.RootParamList>
  onReady: () => void
  onStateChange: () => Promise<void>
}

export const useScreenTracker = (callback = defaultCallback): ScreenTrackerReturn => {
  const routeNameRef = useRef<string>()

  const onReady = useCallback(() => {
    routeNameRef.current = navigationRef?.getCurrentRoute()?.name
  }, [])

  const onStateChange = useCallback(async () => {
    const previousRouteName = routeNameRef.current
    const currentRouteName = navigationRef?.getCurrentRoute()?.name

    if (previousRouteName !== currentRouteName) {
      if (currentRouteName) {
        await callback(currentRouteName)
      }
    }

    routeNameRef.current = currentRouteName
  }, [callback])

  return { navigationRef, onReady, onStateChange }
}
