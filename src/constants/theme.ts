import { Theme } from '@react-navigation/native'
import { createTheme } from 'react-native-whirlwind'

export const lightTheme = createTheme()
export const darkTheme = createTheme()

export const LightNavigationTheme: Theme = {
  colors: {
    background: '#fff',
    border: 'transparent',
    card: '#fff',
    notification: '#000',
    primary: '#000',
    text: '#000',
  },
  dark: false,
}

export const DarkNavigationTheme: Theme = {
  colors: {
    background: '#000',
    border: 'transparent',
    card: '#000',
    notification: '#fff',
    primary: '#fff',
    text: '#fff',
  },
  dark: true,
}

export const NavigationTheme = {
  Light: LightNavigationTheme,
  Dark: DarkNavigationTheme,
}
