import { PortalProvider } from '@gorhom/portal'
import { NavigationContainer } from '@react-navigation/native'
import { render, RenderAPI } from '@testing-library/react-native'
import { PropsWithChildren, ReactElement } from 'react'
import { I18nextProvider } from 'react-i18next'

import i18n from '~i18n/i18nForTests'
import { AuthProvider } from '~providers'
import { ColorSchemeProvider } from '~providers/ColorSchemeProvider'

type RenderOptions = Parameters<typeof render>[1]

const ProvidersWrapper: React.FC<PropsWithChildren> = ({ children }) => (
  <PortalProvider>
    <AuthProvider>
      <NavigationContainer>
        <ColorSchemeProvider>
          <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
        </ColorSchemeProvider>
      </NavigationContainer>
    </AuthProvider>
  </PortalProvider>
)

const customRender = (ui: ReactElement, options?: RenderOptions): RenderAPI => {
  return render(ui, { wrapper: ProvidersWrapper, ...options })
}

export * from '@testing-library/react-native'
export { customRender as render }
