import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ExamplesScreen } from '../screens/ExamplesScreen';
import { HomeScreen } from '../screens/HomeScreen';

const { Navigator, Screen } = createBottomTabNavigator();

export const MainBottomTabScreen = () => {
  return (
    <Navigator>
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Examples" component={ExamplesScreen} />
    </Navigator>
  );
};
