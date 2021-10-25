import { createStackNavigator } from '@react-navigation/stack'

import { DetailsScreen, HomeScreen } from '~screens'

const { Navigator, Screen } = createStackNavigator<HomeStackParamList>()

export const HomeStack = (): JSX.Element => (
  <Navigator>
    <Screen name="Home" component={HomeScreen} />
    <Screen name="Details" component={DetailsScreen} />
  </Navigator>
)
