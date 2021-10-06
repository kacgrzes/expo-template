import { createNavigationContainerRef } from '@react-navigation/native'

export const navigationRef = createNavigationContainerRef()

export function getNavigator(): typeof navigationRef.current | undefined {
  if (navigationRef.getRootState() === undefined) {
    throw new Error('navigator is not rendered yet')
  }

  if (navigationRef.isReady()) {
    return navigationRef
  }
}
