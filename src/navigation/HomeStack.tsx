import { createStackNavigator } from '@react-navigation/stack'

import { homeStackScreensData } from './config/tabsScreens'

const { Navigator, Screen } = createStackNavigator<HomeStackParamList>()

const screens = homeStackScreensData.map((props) => (
  <Screen
    key={props.name}
    options={props.options}
    // @ts-expect-error: hard to implement good types when mapping screens
    component={props.component}
    // @ts-expect-error: hard to implement good types when mapping screens
    name={props.name}
  />
))

export const HomeStack = (): JSX.Element => {
  return <Navigator>{screens}</Navigator>
}
