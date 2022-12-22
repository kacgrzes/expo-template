import { createStackNavigator } from '@react-navigation/stack'
import React, { FC } from 'react'

import { examplesStackScreensData, homeStackScreensData } from '../config/screens'
import { WebNavBar } from './WebNavBar'

import { WEB_SCREEN_STYLES } from '~constants/navigation'
import { useWeb } from '~hooks'

const { Navigator: NavigatorWeb, Screen: ScreenWeb } = createStackNavigator<WebTabParamList>()
const screens = [...examplesStackScreensData, ...homeStackScreensData]

const renderScreens = screens.map((screen) => (
  <ScreenWeb name={screen?.name} component={screen?.component} key={screen?.name} />
))

export const WebNavigator: FC = () => {
  const { shouldApplyMobileStyles } = useWeb()

  return (
    <>
      {!shouldApplyMobileStyles && <WebNavBar />}
      <NavigatorWeb
        screenOptions={{
          headerShown: false,
          cardStyle: WEB_SCREEN_STYLES,
        }}
      >
        {renderScreens}
      </NavigatorWeb>
      {shouldApplyMobileStyles && <WebNavBar />}
    </>
  )
}
