import { createBottomTabNavigator, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'
import { FC } from 'react'

import { bottomTabsScreensData } from './config/tabs'

import { Icon } from '~components'
import { TAB_DEFAULT_ICON } from '~constants'
import { useCallback, useNavigationTheme } from '~hooks'

const { Navigator, Screen } = createBottomTabNavigator<MainTabParamList>()

type ScreenOptions = (params: BottomTabScreenProps) => BottomTabNavigationOptions

// make sure, that when you add new screen data to bottom tab navigator,
// you also update linkingForWeb['MainTab'] in src/navigation/linking.tsx accordingly

const navigatorScreens = bottomTabsScreensData.map((props) => (
  <Screen key={props.name} {...props} />
))

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

  return <Navigator screenOptions={screenOptions}>{navigatorScreens}</Navigator>
}
