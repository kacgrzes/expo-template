import { createStackNavigator } from '@react-navigation/stack'

import { homeStackScreensData } from './config/screens'

const { Navigator, Screen } = createStackNavigator<HomeStackParamList>()

const screens = homeStackScreensData.map(({ name, component, title }) => (
  <Screen key={name} options={{ title }} {...{ component, name }} />
))

export const HomeStack = (): JSX.Element => {
  return <Navigator>{screens}</Navigator>
}
