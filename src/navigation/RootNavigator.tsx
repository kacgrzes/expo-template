import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { BottomTabNavigator } from './BottomTabNavigator'
import { ApplicationInfoScreen, NotFoundScreen, SignInScreen, SignUpScreen } from '~screens'
import { useAuth } from '~hooks'

const { Navigator, Screen, Group } = createStackNavigator()

export const RootNavigator = () => {
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
