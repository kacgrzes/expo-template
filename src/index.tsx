// FIXME: see how why did you render works
// import './wdyr'
import 'react-native-gesture-handler'
import 'react-native-reanimated'
import '~i18n'
import { startMockedServer } from '~services'

import React from 'react'
import { registerRootComponent } from 'expo'

import { AppLoading } from '~components'
import { Navigation } from '~navigation'
import { AuthProvider, SafeAreaProvider } from '~providers'

// FIXME: there is some issue with miragejs that causes console.log to not work
const DISABLE_CONSOLE_ENABLE_MOCKED_SERVER = false

if (DISABLE_CONSOLE_ENABLE_MOCKED_SERVER) {
  startMockedServer()
}

export default function App() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <AppLoading>
          <Navigation />
        </AppLoading>
      </AuthProvider>
    </SafeAreaProvider>
  )
}

registerRootComponent(App)
