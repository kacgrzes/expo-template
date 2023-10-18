import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { PortalProvider } from '@gorhom/portal'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactNode } from 'react'
import { StyleSheet } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { AuthProvider } from './AuthProvider'
import { ColorSchemeProvider } from './ColorSchemeProvider'
import { NotificationsProvider } from './NotificatedProvider'
import { NotificationProvider as ExpoNotificationsProvider } from './NotificationProvider'

import { AppLoading } from '~components'
import { useAppStateActive } from '~hooks'
import { checkForUpdates } from '~utils'

const queryClient = new QueryClient({})

export const Providers = ({ children }: { children: ReactNode }): JSX.Element => {
  useAppStateActive(checkForUpdates, false)

  return (
    <GestureHandlerRootView style={styles.gestureHandlerRootView}>
      <PortalProvider>
        <ColorSchemeProvider>
          <SafeAreaProvider>
            <ExpoNotificationsProvider>
              {/* @ts-expect-error: error comes from a react-native-notificated library which doesn't have declared children in types required in react 18 */}
              <NotificationsProvider>
                <QueryClientProvider client={queryClient}>
                  <AuthProvider>
                    <AppLoading>
                      <BottomSheetModalProvider>{children}</BottomSheetModalProvider>
                    </AppLoading>
                  </AuthProvider>
                </QueryClientProvider>
              </NotificationsProvider>
            </ExpoNotificationsProvider>
          </SafeAreaProvider>
        </ColorSchemeProvider>
      </PortalProvider>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  gestureHandlerRootView: {
    flex: 1,
  },
})
