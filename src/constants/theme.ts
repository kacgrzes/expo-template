import { Theme } from '@react-navigation/native'
import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { createTheme, ThemeProps } from 'react-native-whirlwind'

// here you can define your own classes, rembemer to add them to light and dark themes
type ExtendType = {
  textPrimary: TextStyle
  background: ViewStyle | TextStyle | ImageStyle
}
export type AppTheme = ReturnType<typeof createTheme> & ExtendType

type CommonColors = ThemeProps['colors']

type ExtendedColors = {
  background: string
  border: string
  card: string
  notification: string
  primary: string
  text: string
}

export type Colors = CommonColors & ExtendedColors

const commonColors: CommonColors = {
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
  gray100: '#f7fafc',
  gray200: '#edf2f7',
  gray300: '#e2e8f0',
  gray400: '#cbd5e0',
  gray500: '#a0aec0',
  gray600: '#718096',
  gray700: '#4a5568',
  gray800: '#2d3748',
  gray900: '#1a202c',
}

export const lightColors: Colors = {
  ...commonColors,
  background: '#fff',
  border: 'rgba(0,0,0,0)',
  card: '#ffffff',
  notification: '#000000',
  text: '#000000',
}

export const darkColors: Colors = {
  ...commonColors,
  background: '#000000',
  border: 'rgba(0,0,0,0)',
  card: '#000000',
  notification: '#ffffff',
  text: '#ffffff',
}

const fontSizes: ThemeProps['fontSizes'] = {
  '2xs': 10,
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 28,
  '4xl': 32,
  '5xl': 40,
} as const

const scale = fontSizes.base

export const spacing: ThemeProps['spacing'] = {
  px: 1,
  '0': 0,
  '0.5': 0.125 * scale,
  '1': 0.25 * scale,
  '2': 0.5 * scale,
  '3': 0.75 * scale,
  '4': scale,
  '5': 1.25 * scale,
  '6': 1.5 * scale,
  '7': 1.75 * scale,
  '8': 2 * scale,
  '9': 2.25 * scale,
  '10': 2.5 * scale,
  '11': 2.75 * scale,
  '12': 3 * scale,
  '14': 3.5 * scale,
  '16': 4 * scale,
  '20': 5 * scale,
  '24': 6 * scale,
  '28': 7 * scale,
  '32': 8 * scale,
  '36': 9 * scale,
  '40': 10 * scale,
  '44': 11 * scale,
  '48': 12 * scale,
  '52': 13 * scale,
  '56': 14 * scale,
  '60': 15 * scale,
  '64': 16 * scale,
  '72': 18 * scale,
  '80': 20 * scale,
  '96': 24 * scale,
} as const

export const lightTheme: AppTheme = StyleSheet.create({
  ...createTheme({
    colors: lightColors,
    spacing,
    fontSizes,
  }),
  background: {
    backgroundColor: lightColors.background,
  },
  textPrimary: {
    color: lightColors.text,
  },
})

export const darkTheme: AppTheme = StyleSheet.create({
  ...createTheme({
    colors: darkColors,
    spacing,
    fontSizes,
  }),
  background: {
    backgroundColor: darkColors.background,
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
