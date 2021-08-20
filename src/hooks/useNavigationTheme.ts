import { useColorScheme } from './useColorScheme'
import { NavigationTheme } from '~constants'

export const useNavigationTheme = () => {
  const colorScheme = useColorScheme()
  // const theme = colorScheme === 'dark' ? NavigationTheme.Dark : NavigationTheme.Light
  return NavigationTheme.Light
}
