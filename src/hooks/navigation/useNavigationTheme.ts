import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'
import { Theme } from '@react-navigation/native'
import { useTheme, useColorMode } from 'native-base'
import { useMemo } from 'react'

import { darkNavigationTheme, lightNavigationTheme } from '~constants'

type ReturnValues = {
  navigationTheme: Theme
  tabBarTheme: BottomTabNavigationOptions
}

export const useNavigationTheme = (): ReturnValues => {
  const { colorMode } = useColorMode()
  const { colors } = useTheme()

  const tabBarTheme: BottomTabNavigationOptions = useMemo(
    () => ({
      tabBarActiveTintColor: colors.primary[400],
      tabBarInactiveTintColor: colors.gray[500],
    }),
    [colors.primary, colors.gray]
  )

  const navigationTheme = colorMode === 'dark' ? darkNavigationTheme : lightNavigationTheme

  return {
    navigationTheme,
    tabBarTheme,
  }
}
