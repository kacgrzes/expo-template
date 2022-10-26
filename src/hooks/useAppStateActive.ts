import { useCallback, useEffect, useRef } from 'react'
import { AppState, AppStateStatus } from 'react-native'

import { noop } from '~utils'

/**
 * This hook will run on every app state change from background to foreground
 */
export function useAppStateActive(onChange = noop, runOnMount = true) {
  const appState = useRef(AppState.currentState)

  const _handleChange = useCallback(
    (nextAppState: AppStateStatus) => {
      if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
        onChange()
      }
      appState.current = nextAppState
    },
    [onChange]
  )

  useEffect(() => {
    const appStateListener = AppState.addEventListener('change', _handleChange)
    if (runOnMount) {
      onChange()
    }

    return () => {
      appStateListener.remove()
    }
  }, [_handleChange, onChange, runOnMount])
}
