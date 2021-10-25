import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import { ComponentsScreen, ExamplesScreen } from '~screens'

const { Navigator, Screen } = createStackNavigator<ExampleStackParamList>()

export const ExamplesStack = (): JSX.Element => (
  <Navigator>
    <Screen name="Examples" component={ExamplesScreen} />
    <Screen name="Components" component={ComponentsScreen} />
  </Navigator>
)
