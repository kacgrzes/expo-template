import { useColorScheme } from './useColorScheme'

import { darkTheme, lightTheme } from '~constants'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useTheme = () => {
  const colorScheme = useColorScheme()
  const s = colorScheme === 'dark' ? darkTheme : lightTheme
  return {
    s,
    light: lightTheme,
    dark: darkTheme,
  }
}
