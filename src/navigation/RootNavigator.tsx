import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { BottomTabNavigator } from './BottomTabNavigator'
import { ApplicationInfoScreen, NotFoundScreen, SignInScreen, SignUpScreen } from '~screens'
import { useAuth } from '~hooks'

const { Navigator, Screen, Group } = createNativeStackNavigator()

export const RootNavigator = () => {
  const { isSignedIn } = useAuth()

  return (
    <Navigator>
      {!isSignedIn ? (
        <Group>
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
        <Group screenOptions={{ headerShown: false }}>
          <Screen name="Root" component={BottomTabNavigator} />
        </Group>
      )}
      <Group screenOptions={{ presentation: 'modal' }}>
        <Screen name="ApplicationInfo" component={ApplicationInfoScreen} />
        <Screen name="NotFound" component={NotFoundScreen} />
      </Group>
    </Navigator>
  )
}
