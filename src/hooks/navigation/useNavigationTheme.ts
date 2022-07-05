import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'
import { Theme } from '@react-navigation/native'
import { useTheme } from 'native-base'
import { useMemo } from 'react'

import { useColorScheme } from '../useColorScheme'

import { darkNavigationTheme, lightNavigationTheme } from '~constants'

type ReturnValues = {
  navigationTheme: Theme
  tabBarTheme: BottomTabNavigationOptions
}

export const useNavigationTheme = (): ReturnValues => {
  const { colorScheme } = useColorScheme()
  const { colors } = useTheme()

  const tabBarTheme: BottomTabNavigationOptions = useMemo(
    () => ({
      tabBarActiveTintColor: colors.primary[600],
      tabBarInactiveTintColor: colors.primary[400],
    }),
    [colors.primary]
  )

  const navigationTheme = colorScheme === 'dark' ? darkNavigationTheme : lightNavigationTheme

  return {
    navigationTheme,
    tabBarTheme,
  }
}
