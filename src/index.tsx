import 'react-native-gesture-handler'
import '~i18n'

import React from 'react'
// import { registerRootComponent } from 'expo'

import { AppLoading } from '~components'
import { Navigation } from '~navigation'
import { AuthProvider, SafeAreaProvider } from '~providers'

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

// registerRootComponent(App)
