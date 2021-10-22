import { createStackNavigator } from '@react-navigation/stack'
import * as Linking from 'expo-linking'
import React, { FC } from 'react'

import { BottomTabNavigator } from './BottomTabNavigator'

import { useAuth, useLinkTo, useCallback, useEffect } from '~hooks'
import {
  ApplicationInfoScreen,
  NotFoundScreen,
  SettingsScreen,
  SignInScreen,
  SignUpScreen,
} from '~screens'

const { Navigator, Screen, Group } = createStackNavigator()

export const RootNavigator: FC = () => {
  const { isSignedIn } = useAuth()
  const linkTo = useLinkTo()

  // TODO: Consider moving deeplinking logic to seperate file
  const initialNavigate = useCallback(async (): Promise<void> => {
    const initial = await Linking.getInitialURL()
    if (initial) {
      linkTo(initial)
    }
  }, [linkTo])

  const getUrl = useCallback(
    async ({ url }: { url?: string }): Promise<void> => {
      if (url) {
        linkTo(url)
      }
    },
    [linkTo]
  )

  useEffect(() => {
    initialNavigate()

    Linking.addEventListener('url', getUrl)

    return () => {
      Linking.removeEventListener('url', getUrl)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
          <Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
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
