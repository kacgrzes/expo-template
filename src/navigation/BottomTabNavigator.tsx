import { createBottomTabNavigator, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'
import { FC } from 'react'

import { ExamplesStack } from './ExamplesStack'
import { HomeStack } from './HomeStack'

import { Icon } from '~components'
import { useCallback, useNavigationTheme, useTranslation } from '~hooks'
import { IconNames } from '~types/icon'

const { Navigator, Screen } = createBottomTabNavigator<MainTabParamList>()

type ScreenOptions = (params: BottomTabScreenProps) => BottomTabNavigationOptions

export const BottomTabNavigator: FC = () => {
  const { t } = useTranslation()
  const { tabBarTheme } = useNavigationTheme()

  const screenOptions = useCallback<ScreenOptions>(
    ({ route }) => ({
      tabBarIcon: ({ color, size, focused }) => {
        let iconName: IconNames

        if (route.name === 'HomeStack') {
          iconName = focused ? 'home-5-fill' : 'home-line'
        } else if (route.name === 'ExamplesStack') {
          iconName = focused ? 'file-list-2-fill' : 'file-list-2-line'
        } else {
          iconName = 'alert-line'
        }

        // You can return any component that you like here!
        return <Icon name={iconName} size={size} color={color} />
      },
      headerShown: false,
      ...tabBarTheme,
    }),
    [tabBarTheme]
  )

  return (
    <Navigator screenOptions={screenOptions}>
      <Screen
        name="HomeStack"
        options={{ title: t('navigation.screen_titles.home_stack') }}
        component={HomeStack}
      />
      <Screen
        name="ExamplesStack"
        options={{ title: t('navigation.screen_titles.examples_stack') }}
        component={ExamplesStack}
      />
    </Navigator>
  )
}
