import { createStackNavigator } from '@react-navigation/stack'
import { FC } from 'react'

import { rootStackScreensData } from './config/rootScreens'

import { useAuth } from '~hooks'
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

export const RootNavigator: FC = () => {
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
