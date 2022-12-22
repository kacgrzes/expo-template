import { createStackNavigator } from '@react-navigation/stack'

import { examplesStackScreensData } from './config/screens'

const { Navigator, Screen } = createStackNavigator<ExampleStackParamList>()

const screens = examplesStackScreensData.map(({ name, component, title }) => (
  <Screen key={name} options={{ title }} {...{ component, name }} />
))

export const ExamplesStack = (): JSX.Element => {
  return <Navigator>{screens}</Navigator>
}
