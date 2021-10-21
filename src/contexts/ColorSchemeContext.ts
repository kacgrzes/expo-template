import { createContext } from 'react'

import { SettingColorSchemeName, ColorSchemeName } from '~providers'

export type ColorSchemeContextType =
  | {
      colorSchemeSetting: SettingColorSchemeName
      colorScheme: ColorSchemeName
      setColorSchemeSetting: (newColorScheme: SettingColorSchemeName) => void
    }
  | undefined

export const ColorSchemeContext = createContext<ColorSchemeContextType>(undefined)
