import * as Linking from 'expo-linking'
import { ScrollView } from 'react-native'

import { Button, Text } from '~components'
import { useCallback, useNotifications, useTheme } from '~hooks'

export const ComponentsScreen = (): JSX.Element => {
  const { s } = useTheme()
  const { notify } = useNotifications()
  const testNotification = useCallback(
    () =>
      notify('info', {
        params: {
          title: 'In-app notification example',
          description: 'by react-native-notificated 🎉',
          onPress: () => {
            Linking.openURL('https://thewidlarzgroup.github.io/react-native-notificated/')
          },
        },
      }),
    [notify]
  )

  return (
    <ScrollView contentContainerStyle={[s.flex1, s.itemsCenter, s.justifyCenter]}>
      <Text>This is component screen</Text>
      <Button onPress={testNotification} title="Button" />
      <Text>Typography Base</Text>
      <Text.H1>Typography H1</Text.H1>
      <Text.H2>Typography H2</Text.H2>
      <Text.H3>Typography H3</Text.H3>
      <Text.H4>Typography H4</Text.H4>
      <Text.H5>Typography H5</Text.H5>
      <Text.H6>Typography H6</Text.H6>
      <Text.BodyBold>Typography BodyBold</Text.BodyBold>
      <Text.BodyRegular>Typography BodyRegular</Text.BodyRegular>
      <Text.CaptionBold>Typography CaptionBold</Text.CaptionBold>
      <Text.CaptionRegular>Typography CaptionRegular</Text.CaptionRegular>
      <Text.Button>Typography Button</Text.Button>
    </ScrollView>
  )
}
