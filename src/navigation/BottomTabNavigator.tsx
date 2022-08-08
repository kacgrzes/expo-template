import { Feather } from '@expo/vector-icons'
import { createBottomTabNavigator, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'
import { FC } from 'react'

import { ExamplesStack } from './ExamplesStack'
import { HomeStack } from './HomeStack'

import { useCallback, useNavigationTheme } from '~hooks'

const { Navigator, Screen } = createBottomTabNavigator<MainTabParamList>()

type ScreenOptions = (params: BottomTabScreenProps) => BottomTabNavigationOptions

export const BottomTabNavigator: FC = () => {
  const { tabBarTheme } = useNavigationTheme()

  const screenOptions = useCallback<ScreenOptions>(
    ({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName: keyof typeof Feather.glyphMap

        if (route.name === 'HomeStack') {
          iconName = 'home'
        } else if (route.name === 'ExamplesStack') {
          iconName = 'list'
        } else {
          iconName = 'alert-triangle'
        }

        // You can return any component that you like here!
        return <Feather name={iconName} size={size} color={color} />
      },
      headerShown: false,
      ...tabBarTheme,
    }),
    [tabBarTheme]
  )

  return (
    <Navigator screenOptions={screenOptions}>
      <Screen name="HomeStack" component={HomeStack} />
      <Screen name="ExamplesStack" component={ExamplesStack} />
    </Navigator>
  )
}
