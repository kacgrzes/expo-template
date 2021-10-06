import { useColorScheme } from './useColorScheme'
import { darkTheme, lightTheme } from '~constants'

export const useTheme = () => {
  const colorScheme = useColorScheme()
  const s = colorScheme === 'dark' ? darkTheme : lightTheme
  return {
    s,
    light: lightTheme,
    dark: darkTheme,
  }
}
