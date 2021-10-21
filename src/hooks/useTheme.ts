import { useColorScheme } from './useColorScheme'

import { darkTheme, lightTheme, AppTheme, lightColors, darkColors, Colors } from '~constants'
import { ColorSchemeName } from '~providers'

type ReturnValues = {
  s: AppTheme
  colors: Colors
}

type Themes = {
  [key in ColorSchemeName]: ReturnValues
}

const themes: Themes = {
  dark: {
    s: darkTheme,
    colors: darkColors,
  },
  light: {
    s: lightTheme,
    colors: lightColors,
  },
}

export const useTheme = (): ReturnValues => {
  const { colorScheme } = useColorScheme()

  return themes[colorScheme]
}
