import { NavigationContainer } from '@react-navigation/native'
import { render, RenderAPI } from '@testing-library/react-native'
import { NativeBaseProvider } from 'native-base'
import { PropsWithChildren, ReactElement } from 'react'
import { I18nextProvider } from 'react-i18next'

import i18n from '~i18n'
import { AuthProvider } from '~providers'

type RenderOptions = Parameters<typeof render>[1]

const nbInitialWindowMetrics = {
  frame: { x: 0, y: 0, width: 0, height: 0 },
  insets: { top: 0, left: 0, right: 0, bottom: 0 },
}

const Providers: React.FC<PropsWithChildren> = ({ children }) => (
  <AuthProvider>
    <NativeBaseProvider initialWindowMetrics={nbInitialWindowMetrics}>
      <NavigationContainer>
        <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
      </NavigationContainer>
    </NativeBaseProvider>
  </AuthProvider>
)

const customRender = (ui: ReactElement, options?: RenderOptions): RenderAPI => {
  return render(ui, { wrapper: Providers, ...options })
}

export * from '@testing-library/react-native'
export { customRender as render }
