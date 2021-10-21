import { createContext } from 'react'
import { ColorSchemeName as RNColorSchemeName } from 'react-native'

import { ColorSchemeName } from '~providers'

export type ColorSchemeContextType =
  | {
      userColorScheme: ColorSchemeName
      colorScheme: RNColorSchemeName
      setColorScheme: (newColorScheme: ColorSchemeName) => void
    }
  | undefined

export const ColorSchemeContext = createContext<ColorSchemeContextType>(undefined)
