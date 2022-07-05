import type { Theme } from '@react-navigation/native'
import { extendTheme } from 'native-base'

export const theme = extendTheme({
  colors: {
    primary: {
      50: '#E3F2F9',
      100: '#C5E4F3',
      200: '#A2D4EC',
      300: '#7AC1E4',
      400: '#47A9DA',
      500: '#0088CC',
      600: '#007AB8',
      700: '#006BA1',
      800: '#005885',
      900: '#003F5E',
    },
  },
})

// 2. Get the type of the CustomTheme
type CustomThemeType = typeof theme

// 3. Extend the internal NativeBase Theme
declare module 'native-base' {
  // interface ICustomTheme extends CustomThemeType {}
  interface ICustomTheme extends CustomThemeType {}
}

export const lightNavigationTheme: Theme = {
  colors: {
    background: theme.colors.dark[900],
    border: theme.colors.dark[900],
    card: theme.colors.dark[900],
    notification: theme.colors.red[400],
    primary: theme.colors.primary[400],
    text: theme.colors.black,
  },
  dark: false,
}

export const darkNavigationTheme: Theme = {
  colors: {
    background: theme.colors.dark[50],
    border: theme.colors.dark[50],
    card: theme.colors.dark[50],
    notification: theme.colors.red[400],
    primary: theme.colors.primary[400],
    text: theme.colors.white,
  },
  dark: true,
}

export const navigationTheme = {
  light: lightNavigationTheme,
  dark: darkNavigationTheme,
}
