import { createStackNavigator } from '@react-navigation/stack'
import { t } from 'i18next'
import { DetailsScreen, HomeScreen } from '~screens'

import { useMemo } from '~hooks'

const { Navigator, Screen } = createStackNavigator<HomeStackParamList>()

export const enum HomeStackScreensEnum {
  Home = 'Home',
  Details = 'Details',
}

export const homeStackScreensData = [
  {
    name: HomeStackScreensEnum.Home,
    component: HomeScreen,
    title: t('navigation.screen_titles.home'),
  },
  {
    name: HomeStackScreensEnum.Details,
    component: DetailsScreen,
    title: t('navigation.screen_titles.details'),
  },
]

export const HomeStack = (): JSX.Element => {
  const screens = useMemo(
    () =>
      homeStackScreensData.map(({ name, component, title }) => (
        <Screen key={name} options={{ title }} {...{ component, name }} />
      )),
    []
  )
  return <Navigator>{screens}</Navigator>
}
