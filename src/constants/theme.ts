import { Theme } from '@react-navigation/native'

export const LightTheme: Theme = {
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

export const DarkTheme: Theme = {
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
  Light: LightTheme,
  Dark: DarkTheme,
}
