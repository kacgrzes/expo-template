import { createStackNavigator } from '@react-navigation/stack'

import { homeStackScreensData } from './config/screens'

import { useMemo } from '~hooks'

const { Navigator, Screen } = createStackNavigator<HomeStackParamList>()

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
