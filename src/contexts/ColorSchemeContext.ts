import { createContext } from 'react'
import { ColorSchemeName } from 'react-native'

export type ColorSchemeContext =
  | {
      colorScheme: NonNullable<ColorSchemeName>
    }
  | undefined

export const ColorSchemeContext = createContext<ColorSchemeContext>(undefined)
