import { createStackNavigator } from '@react-navigation/stack'

import { examplesStackScreensData } from './config/tabsScreens'

const { Navigator, Screen } = createStackNavigator<ExampleStackParamList>()

const screens = examplesStackScreensData.map((props) => (
  <Screen
    key={props.name}
    options={props.options}
    component={props.component}
    // @ts-expect-error: hard to implement good types when mapping screens
    name={props.name}
  />
))

export const ExamplesStack = (): JSX.Element => {
  return <Navigator>{screens}</Navigator>
}
