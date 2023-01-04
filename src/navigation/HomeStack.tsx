import { createStackNavigator } from '@react-navigation/stack'

import { homeStackScreensData } from './config/tabsScreens'

const { Navigator, Screen } = createStackNavigator<HomeStackParamList>()

const screens = homeStackScreensData.map((props) => <Screen key={props.name} {...props} />)

export const HomeStack = (): JSX.Element => {
  return <Navigator>{screens}</Navigator>
}
