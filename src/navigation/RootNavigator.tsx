import { createStackNavigator } from '@react-navigation/stack'
import React, { FC } from 'react'

import { BottomTabNavigator } from './BottomTabNavigator'

import { useAuth } from '~hooks'
import {
  ApplicationInfoScreen,
  NotFoundScreen,
  SettingsScreen,
  SignInScreen,
  SignUpScreen,
} from '~screens'

const { Navigator, Screen, Group } = createStackNavigator<RootStackParamList>()

export const RootNavigator: FC = () => {
  const { isSignedIn } = useAuth()

  return (
    <Navigator>
      {!isSignedIn ? (
        <Group key="unauthorized">
          <Screen
            name="SignIn"
            component={SignInScreen}
            options={{
              title: 'Sign in',
            }}
          />
          <Screen name="SignUp" component={SignUpScreen} />
        </Group>
      ) : (
        <Group key="authorized">
          <Screen name="MainTab" component={BottomTabNavigator} options={{ headerShown: false }} />
          <Screen name="Settings" component={SettingsScreen} />
        </Group>
      )}
      <Group key="modals" screenOptions={{ presentation: 'modal' }}>
        <Screen name="ApplicationInfo" component={ApplicationInfoScreen} />
        <Screen name="NotFound" component={NotFoundScreen} />
      </Group>
    </Navigator>
  )
}
