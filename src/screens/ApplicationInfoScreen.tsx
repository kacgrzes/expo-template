import React from 'react';
// TODO: there are tons of more interesting methods there!
import * as Application from 'expo-application';
import { ScrollView, Text } from 'react-native';

export const ApplicationInfoScreen = () => {
  return (
    <ScrollView>
      <Text>{Application.applicationId}</Text>
      <Text>{Application.applicationName}</Text>
      <Text>{Application.nativeApplicationVersion}</Text>
      <Text>{Application.nativeBuildVersion}</Text>
    </ScrollView>
  );
};
