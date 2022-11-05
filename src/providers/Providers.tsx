import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { NativeBaseProvider } from 'native-base'
import { ReactNode } from 'react'
import { StyleSheet } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { QueryClientProvider, QueryClient } from 'react-query'

import { AuthProvider } from './AuthProvider'
import { NotificationsProvider } from './NotificatedProvider'

import { AppLoading, WebWrapper } from '~components'
import { theme, nativeBaseConfig } from '~constants'
import { useAppStateActive } from '~hooks'
import { colorModeManager } from '~services'
import { checkForUpdates } from '~utils'

const queryClient = new QueryClient({})

export const Providers = ({ children }: { children: ReactNode }): JSX.Element => {
  useAppStateActive(checkForUpdates, false)

  return (
    <NativeBaseProvider theme={theme} colorModeManager={colorModeManager} config={nativeBaseConfig}>
      {/* NativeBaseProvider includes SafeAreaProvider so that we don't have to include it in a root render tree */}
      {/* @ts-expect-error: error comes from a react-native-notificated library which doesn't have declared children in types required in react 18 */}
      <NotificationsProvider>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <AppLoading>
              <GestureHandlerRootView style={styles.gestureHandlerRootView}>
                <BottomSheetModalProvider>
                  <WebWrapper>{children}</WebWrapper>
                </BottomSheetModalProvider>
              </GestureHandlerRootView>
            </AppLoading>
          </AuthProvider>
        </QueryClientProvider>
      </NotificationsProvider>
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
  gestureHandlerRootView: {
    flex: 1,
  },
})
