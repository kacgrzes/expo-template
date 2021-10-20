import { Theme } from '@react-navigation/native'
import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { createTheme, ThemeProps } from 'react-native-whirlwind'

// here you can define your own classes, rembemer to add them to light and dark themes
type ExtendType = {
  textPrimary: ViewStyle | TextStyle | ImageStyle
  background: ViewStyle | TextStyle | ImageStyle
  secondBackground: ViewStyle | TextStyle | ImageStyle
}
export type AppTheme = ReturnType<typeof createTheme> & ExtendType

declare type MakeOptional<T> = {
  [P in keyof T]?: MakeOptional<T[P]>
}

type ExtendedColors = {
  background: string
  border: string
  card: string
  notification: string
  primary: string
  text: string
}

export type Colors = MakeOptional<ThemeProps['colors']> & ExtendedColors

export const lightColors: Colors = {
  primary: '#3f51b5',
  primaryLight: '#7986cb',
  primaryDark: '#303f9f',
  primaryContrast: '#fff',
  secondary: '#f50057',
  secondaryLight: '#ff4081',
  secondaryDark: '#c51162',
  secondaryContrast: '#fff',
  info: '#2196f3',
  infoLight: '#64b5f6',
  infoDark: '#1976d2',
  infoContrast: '#fff',
  success: '#4caf50',
  successLight: '#81c784',
  successDark: '#388e3c',
  successContrast: 'rgba(0,0,0,0.87)',
  error: '#f44336',
  errorLight: '#e57373',
  errorDark: '#d32f2f',
  errorContrast: '#fff',
  warning: '#ff9800',
  warningLight: '#ffb74d',
  warningDark: '#f57c00',
  warningContrast: 'rgba(0,0,0,0.87)',
  paper: '#fafafa',
  selected: 'rgba(0,0,0,0.08)',
  disabled: 'rgba(0,0,0,0.26)',
  focused: 'rgba(0,0,0,0.12)',
  muted: 'rgba(0,0,0,0.12)',
  white: '#ffffff',
  black: '#000000',
  transparent: 'rgba(0,0,0,0)',
  background: '#fff',
  border: 'rgba(0,0,0,0)',
  card: '#ffffff',
  notification: '#000000',
  text: '#000000',
}

export const darkColors: Colors = {
  primary: '#3f51b5',
  primaryLight: '#7986cb',
  primaryDark: '#303f9f',
  primaryContrast: '#000',
  secondary: '#f50057',
  secondaryLight: '#ff4081',
  secondaryDark: '#c51162',
  secondaryContrast: '#000',
  info: '#2196f3',
  infoLight: '#64b5f6',
  infoDark: '#1976d2',
  infoContrast: '#fff',
  success: '#4caf50',
  successLight: '#81c784',
  successDark: '#388e3c',
  successContrast: 'rgba(0,0,0,0.87)',
  error: '#f44336',
  errorLight: '#e57373',
  errorDark: '#d32f2f',
  errorContrast: '#fff',
  warning: '#ff9800',
  warningLight: '#ffb74d',
  warningDark: '#f57c00',
  warningContrast: 'rgba(0,0,0,0.87)',
  paper: '#fafafa',
  selected: 'rgba(0,0,0,0.08)',
  disabled: 'rgba(0,0,0,0.26)',
  focused: 'rgba(0,0,0,0.12)',
  muted: 'rgba(0,0,0,0.12)',
  white: '#ffffff',
  black: '#000000',
  background: '#000000',
  border: 'rgba(0,0,0,0)',
  card: '#000000',
  notification: '#ffffff',
  text: '#ffffff',
}

export const lightTheme = StyleSheet.create({
  ...createTheme({
    colors: lightColors,
  }),
  background: {
    backgroundColor: lightColors.background,
  },
  textPrimary: {
    color: lightColors.text,
  },
})

export const darkTheme = StyleSheet.create({
  ...createTheme({
    colors: darkColors,
  }),
  background: {
    backgroundColor: darkColors.background,
  },
  secondBackground: {
    backgroundColor: lightColors.white,
  },
  textPrimary: {
    color: darkColors.text,
  },
})

export const LightNavigationTheme: Theme = {
  colors: {
    background: lightColors.background,
    border: lightColors.border,
    card: lightColors.card,
    notification: lightColors.notification,
    primary: lightColors.primary,
    text: lightColors.text,
  },
  dark: false,
}

export const DarkNavigationTheme: Theme = {
  colors: {
    background: darkColors.background,
    border: darkColors.border,
    card: darkColors.card,
    notification: darkColors.notification,
    primary: darkColors.primary,
    text: darkColors.text,
  },
  dark: true,
}

export const NavigationTheme = {
  Light: LightNavigationTheme,
  Dark: DarkNavigationTheme,
}
