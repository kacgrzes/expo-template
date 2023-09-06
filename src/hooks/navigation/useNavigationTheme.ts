// TODO: ISSUE-33 (https://github.com/binarapps/expo-ts-template/issues/33)
// Remove native-base hooks when issue is resolved
import { useTheme, useColorMode } from 'native-base'
import { useMemo } from 'react'

import { darkNavigationTheme, lightNavigationTheme } from '~constants'

export const useNavigationTheme = () => {
  const { colorMode } = useColorMode()
  const { colors } = useTheme()

  const tabBarTheme = useMemo(
    () => ({
      tabBarActiveTintColor: colors.primary[400],
      tabBarInactiveTintColor: colors.gray[500],
      tabBarStyle: {
        backgroundColor: colorMode === 'dark' ? colors.gray[900] : colors.light[100],
        paddingTop: 4,
      },
    }),
    [colors.primary, colors.gray, colors.light, colorMode]
  )

  const navigationTheme = colorMode === 'dark' ? darkNavigationTheme : lightNavigationTheme

  return {
    navigationTheme,
    tabBarTheme,
  }
}
