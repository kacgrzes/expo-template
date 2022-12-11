import { createStackNavigator } from '@react-navigation/stack'
import React, { FC, useMemo, useState } from 'react'

import { examplesStackScreensData, ExamplesStackScreensEnum } from '../ExamplesStack'
import { homeStackScreensData, HomeStackScreensEnum } from '../HomeStack'
import { WebNavBar } from './WebNavBar'
import { WEB_SCREEN_STYLES } from './constants'

import { useWeb } from '~hooks'

const { Navigator: NavigatorWeb, Screen: ScreenWeb } = createStackNavigator<WebTabParamList>()
// TODO: fix any type
const screens = [...examplesStackScreensData, ...homeStackScreensData]

export const WebNavigator: FC = () => {
  const { shouldApplyMobileStyles } = useWeb()

  const [currentRouteName, setRouteName] = useState<
    ExamplesStackScreensEnum | HomeStackScreensEnum
  >(HomeStackScreensEnum.Home)

  const renderScreens = useMemo(() => {
    return screens.map((screen) => (
      <ScreenWeb name={screen?.name} component={screen?.component} key={screen?.name} />
    ))
  }, [])

  return (
    <>
      {!shouldApplyMobileStyles && <WebNavBar currentRouteName={currentRouteName} />}
      <NavigatorWeb
        screenListeners={() => ({
          state: (e) => {
            // @ts-ignore e.data is readonly and TS complains about state value on that type
            const currentScreen = e?.data?.state?.routes[e.data.state.index || 0]?.name
            setRouteName(currentScreen)
          },
        })}
        screenOptions={{
          headerShown: false,
          cardStyle: {
            ...WEB_SCREEN_STYLES,
            backgroundColor: 'red',
          },
        }}
      >
        {renderScreens}
      </NavigatorWeb>
      {shouldApplyMobileStyles && <WebNavBar currentRouteName={currentRouteName} />}
    </>
  )
}
