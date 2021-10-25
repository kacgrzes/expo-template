import { Alert, ScrollView } from 'react-native'

import { Button } from '~components'
import { useTheme } from '~hooks'

const openAlert = () => Alert.alert('Button Pressed', 'You have pressed button')

export const ComponentsScreen = (): JSX.Element => {
  const { s } = useTheme()

  return (
    <ScrollView contentContainerStyle={[s.flex1, s.itemsCenter, s.justifyCenter]}>
      <Button onPress={openAlert} title="Button" />
    </ScrollView>
  )
}
