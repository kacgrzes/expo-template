import { createStackNavigator } from '@react-navigation/stack'
import { FC } from 'react'
import { Platform } from 'react-native'

import { rootStackScreensData } from './config/rootScreens'
import { WebNavBar } from './webNavigator/WebNavBar'

import { WEB_SCREEN_STYLES } from '~constants'
import { useAuth, useDimensions, useNavigationTheme, useWeb } from '~hooks'
import { useNotificationSetup } from '~hooks/useNotificationSetup'

const { Navigator, Screen, Group } = createStackNavigator<RootStackParamList>()

const authorizedScreens = rootStackScreensData.authorized.map((props) => (
  <Screen key={props.name} {...props} />
))

const unauthorizedScreens = rootStackScreensData.unauthorized.map((props) => (
  <Screen key={props.name} {...props} />
))

const modalsScreens = rootStackScreensData.modals.map((props) => (
  <Screen key={props.name} {...props} />
))

export const RootNavigatorMobile: FC = () => {
  const { isSignedIn } = useAuth()

  // CONFIG: Handle in app notification
  useNotificationSetup({
    enableDeeplink: true,
  })

  return (
    <Navigator>
      {!isSignedIn ? (
        <Group key="unauthorized">{unauthorizedScreens}</Group>
      ) : (
        <Group key="authorized">{authorizedScreens}</Group>
      )}
      <Group key="modals" screenOptions={{ presentation: 'modal' }}>
        {modalsScreens}
      </Group>
    </Navigator>
  )
}

export const RootNavigatorWeb: FC = () => {
  const { shouldApplyMobileStyles, webContentWidth } = useWeb()
  const { navigationTheme } = useNavigationTheme()
  const {
    window: { width: windowWidth },
  } = useDimensions()
  const { isSignedIn } = useAuth()

  return (
    <>
      {!shouldApplyMobileStyles && isSignedIn && <WebNavBar />}
      <Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {
            ...WEB_SCREEN_STYLES,
            paddingHorizontal: (windowWidth - webContentWidth) / 2,
            backgroundColor: navigationTheme.colors.background,
          },
        }}
      >
        {!isSignedIn ? (
          <Group key="unauthorized">{unauthorizedScreens}</Group>
        ) : (
          <Group key="authorized">{authorizedScreens}</Group>
        )}
        <Group key="modals" screenOptions={{ presentation: 'modal' }}>
          {modalsScreens}
        </Group>
      </Navigator>
      {shouldApplyMobileStyles && isSignedIn && <WebNavBar />}
    </>
  )
}

export const RootNavigator = Platform.OS === 'web' ? RootNavigatorWeb : RootNavigatorMobile
