import { createStackNavigator } from '@react-navigation/stack'

import { examplesStackScreensData } from './config/screens'

import { useMemo } from '~hooks'

const { Navigator, Screen } = createStackNavigator<ExampleStackParamList>()

export const ExamplesStack = (): JSX.Element => {
  const screens = useMemo(
    () =>
      examplesStackScreensData.map(({ name, component, title }) => (
        <Screen key={name} options={{ title }} {...{ component, name }} />
      )),
    []
  )
  return <Navigator>{screens}</Navigator>
}
