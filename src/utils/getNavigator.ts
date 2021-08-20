import { createNavigationContainerRef } from '@react-navigation/native'

export const navigationRef = createNavigationContainerRef()

export function getNavigator() {
  if (navigationRef.getRootState() === undefined) {
    throw new Error('navigator is not rendered yet')
  }

  if (navigationRef.isReady()) {
    return navigationRef
  }
}
