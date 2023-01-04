import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { NativeBaseProvider } from 'native-base'
import { ReactNode } from 'react'
import { StyleSheet } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { QueryClientProvider, QueryClient } from 'react-query'

import { AuthProvider } from './AuthProvider'
import { ColorSchemeProvider } from './ColorSchemeProvider'
import { NotificationsProvider } from './NotificatedProvider'
import { NotificationProvider as ExpoNotificationsProvider } from './NotificationProvider'

import { AppLoading } from '~components'
import { theme, nativeBaseConfig } from '~constants'
import { useAppStateActive } from '~hooks'
import { checkForUpdates } from '~utils'

const queryClient = new QueryClient({})

export const Providers = ({ children }: { children: ReactNode }): JSX.Element => {
  useAppStateActive(checkForUpdates, false)

  return (
    // NativeBaseProvider includes SafeAreaProvider so that we don't have to include it in a root render tree
    <NativeBaseProvider theme={theme} config={nativeBaseConfig}>
      <ExpoNotificationsProvider>
        {/* @ts-expect-error: error comes from a react-native-notificated library which doesn't have declared children in types required in react 18 */}
        <NotificationsProvider>
          <QueryClientProvider client={queryClient}>
            <AuthProvider>
              <AppLoading>
                <ColorSchemeProvider>
                  <GestureHandlerRootView style={styles.gestureHandlerRootView}>
                    <BottomSheetModalProvider>{children}</BottomSheetModalProvider>
                  </GestureHandlerRootView>
                </ColorSchemeProvider>
              </AppLoading>
            </AuthProvider>
          </QueryClientProvider>
        </NotificationsProvider>
      </ExpoNotificationsProvider>
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
  gestureHandlerRootView: {
    flex: 1,
  },
})
