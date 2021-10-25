import { View, Text } from 'react-native'

import { useTheme } from '~hooks'

export const NotFoundScreen = (): JSX.Element => {
  const { s } = useTheme()
  return (
    <View style={[s.flex1, s.justifyCenter, s.itemsCenter]}>
      <Text style={[s.textPrimary]}>NotFound screen</Text>
    </View>
  )
}
