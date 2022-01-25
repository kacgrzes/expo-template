import { Alert, ScrollView, Text } from 'react-native'

import { Button } from '~components'
import { useTheme } from '~hooks'

const openAlert = () => Alert.alert('Button Pressed', 'You have pressed button')

export const ComponentsScreen = (): JSX.Element => {
  const { s } = useTheme()

  return (
    <ScrollView contentContainerStyle={[s.flex1, s.itemsCenter, s.justifyCenter]}>
      <Text>This is component screen</Text>
      <Button onPress={openAlert} title="Button" />
    </ScrollView>
  )
}
