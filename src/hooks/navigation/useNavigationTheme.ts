import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'
import { Theme } from '@react-navigation/native'
import { useMemo } from 'react'

import { useColorScheme } from '../useColorScheme'
import { useTheme } from '../useTheme'

import { DarkNavigationTheme, LightNavigationTheme } from '~constants'

type ReturnValues = {
  navigationTheme: Theme
  tabBarTheme: BottomTabNavigationOptions
}

export const useNavigationTheme = (): ReturnValues => {
  const { colorScheme } = useColorScheme()
  const { colors } = useTheme()

  const tabBarTheme: BottomTabNavigationOptions = useMemo(
    () => ({
      tabBarActiveTintColor: colors.text,
      tabBarInactiveTintColor: colors.gray600,
    }),
    [colors.text, colors.gray600]
  )

  const navigationTheme = colorScheme === 'dark' ? DarkNavigationTheme : LightNavigationTheme

  return {
    navigationTheme,
    tabBarTheme,
  }
}
