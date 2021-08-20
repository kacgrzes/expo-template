import { useCallback, useRef } from 'react'
import { navigationRef } from '~utils'

type Callback = (currentRouteName: string) => Promise<void> | undefined

const defaultCallback: Callback = async (currentRouteName) => {
  console.log(`Current route: ${currentRouteName}`)
}

export const useScreenTracker = (callback: Callback = defaultCallback) => {
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
  }, [])

  return { navigationRef, onReady, onStateChange }
}
