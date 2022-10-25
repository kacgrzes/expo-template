// duplicated import of gesture handler is required for bottom sheet modal to work on android
/* eslint-disable import/no-duplicates */
// FIXME: see how why did you render works
// import './wdyr'
import 'react-native-gesture-handler'
import 'react-native-reanimated'
import '~i18n'

import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { registerRootComponent } from 'expo'
import { StyleSheet } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { QueryClientProvider, QueryClient } from 'react-query'
import Reactotron from 'reactotron-react-native'

import { AppLoading } from '~components'
import { theme, nativeBaseConfig } from '~constants'
import { Navigation } from '~navigation'
import { AuthProvider, NotificationsProvider, NativeBaseProvider } from '~providers'
import { startMockedServer, colorModeManager } from '~services'

// FIXME: there is some issue with miragejs that causes console.log to not work
const DISABLE_CONSOLE_ENABLE_MOCKED_SERVER = false

if (DISABLE_CONSOLE_ENABLE_MOCKED_SERVER) {
  startMockedServer()
}

const isUsingReactotron = false
if (__DEV__ && isUsingReactotron && !process.env.JEST_WORKER_ID) {
  import('../ReactotronConfig').then(() => console.log('Reactotron Configured'))

  console.log = Reactotron.log || console.log
}

const queryClient = new QueryClient({})

const App = (): JSX.Element => {
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
                  <Navigation />
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

registerRootComponent(App)

export default App
