import { createBottomTabNavigator, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'
import { t } from 'i18next'
import { FC, useMemo } from 'react'

import { ExamplesStack } from './ExamplesStack'
import { HomeStack } from './HomeStack'
import { TAB_DEFAULT_ICON } from './constants'

import { Icon } from '~components'
import { useCallback, useNavigationTheme } from '~hooks'
const { Navigator, Screen } = createBottomTabNavigator<MainTabParamList>()

type ScreenOptions = (params: BottomTabScreenProps) => BottomTabNavigationOptions

// make sure, that when you add new screen data to bottom tab navigator,
// you also update linkingForWeb['MainTab'] in src/navigation/linking.tsx accordingly

export const enum BottomTabsScreens {
  Home = 'HomeStack',
  Examples = 'ExamplesStack',
}

export const bottomTabsScreensData = [
  {
    component: HomeStack,
    icons: {
      active: 'home-5-fill',
      inactive: 'home-line',
    },
    name: BottomTabsScreens.Home,
    title: t('navigation.screen_titles.home_stack'),
  },
  {
    component: ExamplesStack,
    icons: {
      active: 'file-list-2-fill',
      inactive: 'file-list-2-line',
    },
    name: BottomTabsScreens.Examples,
    title: t('navigation.screen_titles.examples_stack'),
  },
] as const

export const BottomTabNavigator: FC = () => {
  const { tabBarTheme } = useNavigationTheme()

  const screenOptions = useCallback<ScreenOptions>(
    ({ route }) => ({
      tabBarIcon: ({ color, size, focused }) => {
        const { active, inactive } =
          bottomTabsScreensData.find((screen) => screen.name === route.name)?.icons || {}
        const iconToRender = (focused ? active : inactive) || TAB_DEFAULT_ICON

        // You can return any component that you like here!
        return <Icon name={iconToRender} size={size} color={color} />
      },
      headerShown: false,
      ...tabBarTheme,
    }),
    [tabBarTheme]
  )

  const navigatorScreens = useMemo(
    () =>
      bottomTabsScreensData.map((screen, index) => (
        <Screen
          key={String(index)}
          name={screen.name}
          options={{ title: screen.title }}
          component={screen.component}
        />
      )),
    []
  )

  return <Navigator screenOptions={screenOptions}>{navigatorScreens}</Navigator>
}
