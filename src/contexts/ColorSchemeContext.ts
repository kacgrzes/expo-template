import { createContext } from 'react'
import { ColorSchemeName } from 'react-native'

export type ColorSchemeContextType =
  | {
      colorScheme: NonNullable<ColorSchemeName>
    }
  | undefined

export const ColorSchemeContext = createContext<ColorSchemeContextType>(undefined)
