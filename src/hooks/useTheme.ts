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
  userTheme: RNColorSchemeName
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
  const { colorScheme, systemColorScheme } = useColorScheme()

  const userTheme = colorScheme === 'system' ? systemColorScheme : colorScheme

  const { s, navigationTheme, colors } = themes[userTheme]

  return {
    s,
    colors,
    navigationTheme,
    userTheme,
    light: lightTheme,
    dark: darkTheme,
  }
}
