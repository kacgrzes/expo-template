import { createStackNavigator } from '@react-navigation/stack'
import React, { FC } from 'react'

import { BottomTabNavigator } from './BottomTabNavigator'

import { useAuth } from '~hooks'
import { ApplicationInfoScreen, NotFoundScreen, SignInScreen, SignUpScreen } from '~screens'

const { Navigator, Screen, Group } = createStackNavigator()

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
        <Group key="authorized" screenOptions={{ headerShown: false }}>
          <Screen name="Root" component={BottomTabNavigator} />
        </Group>
      )}
      <Group key="modals" screenOptions={{ presentation: 'modal' }}>
        <Screen name="ApplicationInfo" component={ApplicationInfoScreen} />
        <Screen name="NotFound" component={NotFoundScreen} />
      </Group>
    </Navigator>
  )
}
