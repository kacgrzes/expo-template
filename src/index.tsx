import 'react-native-gesture-handler'
import '~i18n'

import React from 'react'
import { registerRootComponent } from 'expo'

import { AppLoading, StatusBar } from '~components'
import { Navigation } from '~navigation'
import { AuthProvider, SafeAreaProvider } from '~providers'

export default function App() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <AppLoading>
          <StatusBar style="auto" />
          <Navigation />
        </AppLoading>
      </AuthProvider>
    </SafeAreaProvider>
  )
}

registerRootComponent(App)
