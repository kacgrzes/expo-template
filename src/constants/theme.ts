import type { Theme } from '@react-navigation/native'

export const palette = {
  black: '#000000',
  white: '#ffffff',
  transparent: 'transparent',
  red: {
    50: '#fff1f2',
    100: '#ffe4e6',
    200: '#fecdd3',
    300: '#fda4af',
    400: '#fb7185',
    500: '#f43f5e',
    600: '#e11d48',
    700: '#be123c',
    800: '#9f1239',
    900: '#881337',
  },
  green: {
    50: '#e1ffe1',
    100: '#b1ffb1',
    200: '#7fff7f',
    300: '#4cff4c',
    400: '#1aff1a',
    500: '#00e600',
    600: '#00b400',
    700: '#008200',
    800: '#005000',
    900: '#002100',
  },
  blue: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
  },
  yellow: {
    50: '#fffde1',
    100: '#fffbb1',
    200: '#fff87f',
    300: '#fff54c',
    400: '#fff21a',
    500: '#ffe900',
    600: '#b4b400',
    700: '#828200',
    800: '#505000',
    900: '#1a1a00',
  },
  gray: {
    50: '#f2f2f2',
    100: '#e6e6e6',
    200: '#cccccc',
    300: '#b3b3b3',
    400: '#999999',
    500: '#808080',
    600: '#666666',
    700: '#4d4d4d',
    800: '#333333',
    900: '#1a1a1a',
  },
}

export const colors = {
  primary: palette.blue['500'],
  primaryLight: palette.blue['300'],
  primaryDark: palette.blue['700'],
  secondary: palette.red['500'],
  secondaryLight: palette.red['300'],
  secondaryDark: palette.red['700'],
  tertiary: palette.green['500'],
  tertiaryLight: palette.green['100'],
  tertiaryDark: palette.green['900'],
  success: palette.green['400'],
  warning: palette.yellow['500'],
  danger: palette.red['500'],
  info: palette.blue['100'],
  light: palette.gray['50'],
  dark: palette.black,
  white: palette.white,
  black: palette.black,
  transparent: 'transparent',
}

export const ProjectColors = {
  //CONFIG: Add your project specific colors here
  modalBackground: 'rgba(0, 0, 0, 0.5)',
}

export const fontSizes = {
  '2xs': 10,
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 30,
  '4xl': 36,
  '5xl': 48,
  '6xl': 60,
  '7xl': 72,
  '8xl': 96,
  '9xl': 128,
} as const

export const scale = fontSizes.md

export const letterSpacings = {
  xs: '-0.05em',
  sm: '-0.025em',
  md: 0,
  lg: '0.025em',
  xl: '0.05em',
  '2xl': '0.1em',
} as const

export const lineHeights = {
  '2xs': '1em',
  xs: '1.125em',
  sm: '1.25em',
  md: '1.375em',
  lg: '1.5em',
  xl: '1.75em',
  '2xl': '2em',
  '3xl': '2.5em',
  '4xl': '3em',
  '5xl': '4em',
} as const

export const fontWeights = {
  hairline: '100',
  thin: '200',
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
  black: '900',
} as const

export const fonts = {
  heading: 'Lato-Bold',
  body: 'Lato-Regular',
  mono: 'Lato-Black',
} as const

export const size = {
  '0': 0,
  '0.5': 0.125 * scale,
  '1': 0.25 * scale,
  '1.5': 6,
  '1/2': '50%',
  '1/3': '33.333%',
  '1/4': '25%',
  '1/5': '20%',
  '1/6': '16.666%',
  '10': 2.5 * scale,
  '12': 3 * scale,
  '16': 4 * scale,
  '2': 0.5 * scale,
  '2.5': 10,
  '2/3': '66.666%',
  '2/4': '50%',
  '2/5': '40%',
  '2/6': '33.333%',
  '20': 5 * scale,
  '24': 6 * scale,
  '3': 0.75 * scale,
  '3.5': 14,
  '3/4': '75%',
  '3/5': '60%',
  '3/6': '50%',
  '32': 8 * scale,
  '4': scale,
  '4/5': '80%',
  '4/6': '66.666%',
  '40': 10 * scale,
  '48': 12 * scale,
  '5': 1.25 * scale,
  '5/6': '83.333%',
  '56': 14 * scale,
  '6': 1.5 * scale,
  '64': 16 * scale,
  '7': 1.75 * scale,
  '72': 18 * scale,
  '8': 2 * scale,
  '80': 20 * scale,
  '9': 2.25 * scale,
  '96': 24 * scale,
  full: '100%',
  px: 1,
} as const

export const breakpoints = {
  mobile: 0,
  tablet: 568,
  desktop: 1024,
}

export const shadows = {
  '0': {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1,
    elevation: 1,
  },
  '1': {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  '2': {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  '3': {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  '4': {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  '5': {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  '6': {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  '7': {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  '8': {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  '9': {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  none: {
    shadowColor: 'transparent',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  inputShadow: {
    shadowOffset: { width: 0, height: 2 },
    shadowColor: colors.primary,
    shadowOpacity: 0.16,
    elevation: 3,
  },
}

export const _appTheme = {
  breakpoints,
  config: {
    useSystemColorMode: false,
    initialColorMode: 'light',
  },
  fonts,
  letterSpacings,
  fontSizes,
  lineHeights,
  fontWeights,
  colors: {
    ...palette,
    ...colors,
    ...ProjectColors,
  },
  size,
  shadows,
}

export const theme = {
  light: {
    ..._appTheme,
    colors: {
      ..._appTheme.colors,
      background: _appTheme.colors.white,
      border: _appTheme.colors.white,
      card: _appTheme.colors.white,
      text: _appTheme.colors.dark,
      notification: _appTheme.colors.secondaryLight,
      inputBorder: _appTheme.colors.gray['700'],
    },
  },
  dark: {
    ..._appTheme,
    colors: {
      ..._appTheme.colors,
      background: _appTheme.colors.dark,
      border: _appTheme.colors.dark,
      card: _appTheme.colors.dark,
      text: _appTheme.colors.white,
      notification: _appTheme.colors.secondaryLight,
      inputBorder: _appTheme.colors.gray['200'],
    },
  },
}

export const lightNavigationTheme: Theme = {
  colors: theme.light.colors,
  dark: false,
}

export const darkNavigationTheme: Theme = {
  colors: theme.dark.colors,
  dark: true,
}

export const navigationTheme = {
  light: lightNavigationTheme,
  dark: darkNavigationTheme,
}
