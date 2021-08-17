import './i18n/index';
import React from 'react';
import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import { RootStackScreen } from './navigation/RootStack';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <RootStackScreen />
      </NavigationContainer>
    </>
  );
}

registerRootComponent(App);
