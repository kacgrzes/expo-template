import { createStackNavigator } from '@react-navigation/stack'
import React, { FC } from 'react'

import { webScreensData } from '../config/tabs'

const { Navigator: NavigatorWeb, Screen: ScreenWeb } = createStackNavigator<WebTabParamList>()

const renderScreens = webScreensData.map((screen) => (
  <ScreenWeb
    key={screen?.name}
    options={screen.options}
    name={screen?.name}
    component={screen.component}
  />
))

export const WebNavigator: FC = () => {
  return <NavigatorWeb>{renderScreens}</NavigatorWeb>
}
