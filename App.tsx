// FIXME: see how why did you render works
// import './wdyr'
import 'setimmediate'
import 'react-native-reanimated'
import '~i18n'
import * as Device from 'expo-device'

import { Navigation } from '~navigation'
import { Providers } from '~providers'
import { enableAndroidBackgroundNotificationListener, startMockedServer } from '~services'

// FIXME: there is some issue with miragejs that causes console.log to not work
const DISABLE_CONSOLE_ENABLE_MOCKED_SERVER = false

if (DISABLE_CONSOLE_ENABLE_MOCKED_SERVER) {
  startMockedServer()
}

// TODO: Uncomment reactotron setup when using
// const isUsingReactotron = true
// if (__DEV__ && isUsingReactotron && !process.env.JEST_WORKER_ID) {
//   require('./ReactotronConfig')
// }

// Workaround for the notifications received in background on android
// src: https://github.com/expo/expo/issues/14078#issuecomment-1041294084
if (Device.isDevice) {
  enableAndroidBackgroundNotificationListener()
}

const App = (): JSX.Element => {
  return (
    <Providers>
      <Navigation />
    </Providers>
  )
}

export default App
