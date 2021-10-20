import { createContext } from 'react'
import { ColorSchemeName as RNColorSchemeName } from 'react-native'

import { ColorSchemeName } from '~providers'

export type ColorSchemeContextType =
  | {
      colorScheme: ColorSchemeName
      systemColorScheme: RNColorSchemeName
      setNewColorScheme: (newColorScheme: ColorSchemeName) => void
    }
  | undefined

export const ColorSchemeContext = createContext<ColorSchemeContextType>(undefined)
