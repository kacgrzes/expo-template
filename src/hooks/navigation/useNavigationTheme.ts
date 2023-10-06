import { useMemo } from 'react'

import { useTheme } from '../useTheme'

import { darkNavigationTheme, lightNavigationTheme } from '~constants'
import { useColorScheme } from '~contexts'

export const useNavigationTheme = () => {
  const { colorScheme } = useColorScheme()
  const { colors } = useTheme()

  const tabBarTheme = useMemo(
    () => ({
      tabBarActiveTintColor: colors.primary,
      tabBarInactiveTintColor: colors.gray[500],
      tabBarStyle: {
        backgroundColor: colorScheme === 'dark' ? colors.gray[900] : colors.light,
        paddingTop: 4,
      },
    }),
    [colors.primary, colors.gray, colors.light, colorScheme]
  )

  const navigationTheme = colorScheme === 'dark' ? darkNavigationTheme : lightNavigationTheme

  return {
    navigationTheme,
    tabBarTheme,
  }
}
