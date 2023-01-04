import { createStackNavigator } from '@react-navigation/stack'

import { examplesStackScreensData } from './config/tabsScreens'

const { Navigator, Screen } = createStackNavigator<ExampleStackParamList>()

const screens = examplesStackScreensData.map((props) => <Screen key={props.name} {...props} />)

export const ExamplesStack = (): JSX.Element => {
  return <Navigator>{screens}</Navigator>
}
