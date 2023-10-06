import { theme } from '~constants'
import { useColorScheme } from '~contexts'

export const useTheme = (): AppTheme => {
  const { colorScheme } = useColorScheme()

  return theme[colorScheme]
}
