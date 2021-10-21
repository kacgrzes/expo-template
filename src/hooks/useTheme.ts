import { ColorSchemeName as RNColorSchemeName } from 'react-native'

import { useColorScheme } from './useColorScheme'

import {
  darkTheme,
  lightTheme,
  DarkNavigationTheme,
  LightNavigationTheme,
  AppTheme,
  lightColors,
  darkColors,
  Colors,
} from '~constants'

type ReturnValues = {
  s: AppTheme
  navigationTheme: typeof DarkNavigationTheme
  colors: Colors
  colorScheme: RNColorSchemeName
  light: AppTheme
  dark: AppTheme
}

const themes = {
  dark: {
    s: darkTheme,
    navigationTheme: DarkNavigationTheme,
    colors: darkColors,
  },
  light: {
    s: lightTheme,
    navigationTheme: LightNavigationTheme,
    colors: lightColors,
  },
}

export const useTheme = (): ReturnValues => {
  const { colorScheme } = useColorScheme()

  return {
    ...themes[colorScheme],
    colorScheme,
    light: lightTheme,
    dark: darkTheme,
  }
}
