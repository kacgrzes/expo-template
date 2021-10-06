import { Theme } from '@react-navigation/native'

import { useColorScheme } from '../useColorScheme'

import { NavigationTheme } from '~constants'

export const useNavigationTheme = (): Theme => {
  const colorScheme = useColorScheme()
  const theme = colorScheme === 'dark' ? NavigationTheme.Dark : NavigationTheme.Light

  return theme
}
