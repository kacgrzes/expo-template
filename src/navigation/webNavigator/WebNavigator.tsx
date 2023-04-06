import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import { webScreensData } from '~navigation/config/tabs'

const { Navigator: NavigatorWeb, Screen: ScreenWeb } = createStackNavigator<WebTabParamList>()

const renderScreens = webScreensData.map((screen) => (
  <ScreenWeb
    key={screen?.name}
    options={screen.options}
    name={screen?.name}
    component={screen.component}
  />
))

export const WebNavigator = () => {
  return <NavigatorWeb>{renderScreens}</NavigatorWeb>
}
