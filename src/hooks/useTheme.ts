import { useColorScheme } from './useColorScheme'

import { darkTheme, lightTheme, AppTheme, lightColors, darkColors, Colors } from '~constants'

type ReturnValues = {
  s: AppTheme
  colors: Colors
}

const themes = {
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

  return {
    ...themes[colorScheme],
  }
}
