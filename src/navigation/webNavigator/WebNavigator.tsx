import { createStackNavigator } from '@react-navigation/stack'
import React, { FC, useMemo } from 'react'

import { examplesStackScreensData, homeStackScreensData } from '../config/screens'
import { WebNavBar } from './WebNavBar'

import { WEB_SCREEN_STYLES } from '~constants/navigation'
import { useWeb } from '~hooks'

const { Navigator: NavigatorWeb, Screen: ScreenWeb } = createStackNavigator<WebTabParamList>()
const screens = [...examplesStackScreensData, ...homeStackScreensData]

export const WebNavigator: FC = () => {
  const { shouldApplyMobileStyles } = useWeb()

  const renderScreens = useMemo(() => {
    return screens.map((screen) => (
      <ScreenWeb name={screen?.name} component={screen?.component} key={screen?.name} />
    ))
  }, [])

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
