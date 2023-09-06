import type { Theme } from '@react-navigation/native'
// TODO: ISSUE-33 (https://github.com/binarapps/expo-ts-template/issues/33)
// Remove native-base components when issue is resolved
import { extendTheme } from 'native-base'

const commonColors = {
  primary: {
    50: '#e9eeff',
    100: '#c4ccf0',
    200: '#9faae1',
    300: '#7a88d2',
    400: '#5566c4',
    500: '#3b4caa',
    600: '#2d3b85',
    700: '#1f2a61',
    800: '#11193d',
    900: '#05071a',
  },
  secondary: {
    50: '#ffe1f1',
    100: '#ffb1cf',
    200: '#ff7ead',
    300: '#ff4c8c',
    400: '#ff1a6b',
    500: '#e60051',
    600: '#b4003f',
    700: '#82002d',
    800: '#50001a',
    900: '#21000a',
  },
  background: '#fff',
  border: '#000',
  card: '#fff',
  notification: '#000',
  lightGray: '#EBEBE4',
}

export const ProjectColors = {
  //CONFIG: Add your project specific colors here
}

const fontSizes = {
  '2xs': 10,
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 28,
  '4xl': 32,
  '5xl': 40,
} as const

const scale = fontSizes.md

export const space = {
  px: '1',
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
  '12': 3 * scale,
  '16': 4 * scale,
  '20': 5 * scale,
  '24': 6 * scale,
  '32': 8 * scale,
  '40': 10 * scale,
  '48': 12 * scale,
  '56': 14 * scale,
  '64': 16 * scale,
  '72': 18 * scale,
  '80': 20 * scale,
  '96': 24 * scale,
} as const

const breakpoints = {
  mobile: 0,
  tablet: 568,
  desktop: 1024,
}

export const theme = extendTheme({
  breakpoints,
  config: {
    useSystemColorMode: false,
    initialColorMode: 'light',
  },
  colors: { ...commonColors, ...ProjectColors },
  space,
  shadows: {
    inputShadow: {
      shadowOffset: { width: 0, height: 2 },
      shadowColor: commonColors.primary['500'],
      shadowOpacity: 0.16,
      elevation: 3,
    },
  },
})

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
