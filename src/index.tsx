// FIXME: see how why did you render works
// import './wdyr'
import 'react-native-gesture-handler'
import 'react-native-reanimated'
import '~i18n'

import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { registerRootComponent } from 'expo'
import { QueryClientProvider, QueryClient } from 'react-query'

import { AppLoading } from '~components'
import { theme, nativeBaseConfig } from '~constants'
import { Navigation } from '~navigation'
import { AuthProvider, NotificationsProvider, NativeBaseProvider } from '~providers'
import { ColorSchemeProvider } from '~providers/ColorSchemeProvider'
import { startMockedServer, colorModeManager } from '~services'

// FIXME: there is some issue with miragejs that causes console.log to not work
const DISABLE_CONSOLE_ENABLE_MOCKED_SERVER = false

if (DISABLE_CONSOLE_ENABLE_MOCKED_SERVER) {
  startMockedServer()
}

const queryClient = new QueryClient({})

const App = (): JSX.Element => {
  return (
    <NativeBaseProvider theme={theme} colorModeManager={colorModeManager} config={nativeBaseConfig}>
      {/* NativeBaseProvider includes SafeAreaProvider so that we don't have to include it in a root render tree */}
      <NotificationsProvider>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <AppLoading>
              <ColorSchemeProvider>
                <BottomSheetModalProvider>
                  <Navigation />
                </BottomSheetModalProvider>
              </ColorSchemeProvider>
            </AppLoading>
          </AuthProvider>
        </QueryClientProvider>
      </NotificationsProvider>
    </NativeBaseProvider>
  )
}

registerRootComponent(App)

export default App
