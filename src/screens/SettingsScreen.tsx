import { ScrollView } from 'react-native'

import { Button, Text } from '~components'
import { colorSchemesList } from '~constants'
import { useAuth, useColorScheme, useTheme } from '~hooks'

export const SettingsScreen = (): JSX.Element => {
  const { setColorSchemeSetting, colorSchemeSetting } = useColorScheme()
  const { s } = useTheme()
  const { signOut } = useAuth()
  return (
    <ScrollView contentContainerStyle={[s.flex1, s.itemsCenter, s.justifyCenter]}>
      <Text>Current theme: {colorSchemeSetting}</Text>
      {colorSchemesList.map((scheme) => {
        const isSelected = scheme === colorSchemeSetting

        return (
          <Button
            key={scheme}
            style={[s.mB1]}
            onPress={() => setColorSchemeSetting(scheme)}
            title={`${scheme}${isSelected ? ' - selected' : ''}`}
          />
        )
      })}

      <Button style={[s.mT10]} onPress={signOut} title="Sign out!" />
    </ScrollView>
  )
}
