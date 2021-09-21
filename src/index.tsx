import './wdyr'
import 'react-native-gesture-handler'
import 'react-native-reanimated'
import '~i18n'
import { startMockedServer } from '~services'

import React from 'react'
import { registerRootComponent } from 'expo'

import { AppLoading } from '~components'
import { Navigation } from '~navigation'
import { AuthProvider, SafeAreaProvider } from '~providers'

startMockedServer()

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
