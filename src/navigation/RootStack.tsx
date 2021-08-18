import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MainBottomTabScreen } from './MainBottomTab'
import { ApplicationInfoScreen } from '~screens'

const { Navigator, Screen, Group } = createNativeStackNavigator()

export const RootStackScreen = () => {
  return (
    <Navigator>
      <Group>
        <Screen name="Main" component={MainBottomTabScreen} />
      </Group>
      <Group screenOptions={{ presentation: 'modal' }}>
        <Screen name="ApplicationInfo" component={ApplicationInfoScreen} />
      </Group>
    </Navigator>
  )
}
