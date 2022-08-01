import { createStackNavigator } from '@react-navigation/stack'

import { ColorsScreen, ComponentsScreen, ExamplesScreen, TypographyScreen } from '~screens'

const { Navigator, Screen } = createStackNavigator<ExampleStackParamList>()

export const ExamplesStack = (): JSX.Element => (
  <Navigator>
    <Screen name="Examples" component={ExamplesScreen} />
    <Screen name="Components" component={ComponentsScreen} />
    <Screen name="Colors" component={ColorsScreen} />
    <Screen name="Typography" component={TypographyScreen} />
  </Navigator>
)
