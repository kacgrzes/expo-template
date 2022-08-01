import { ScrollView, Text, Button, Center } from 'native-base'

import { useAuth, useCallback, useColorScheme } from '~hooks'
import { ColorSchemeName } from '~providers'

const schemes: ColorSchemeName[] = ['light', 'dark']

export const SettingsScreen = (): JSX.Element => {
  const { setColorSchemeSetting, colorSchemeSetting } = useColorScheme()
  const { signOut } = useAuth()

  const handleColorSchemeSettingChange = useCallback(
    (colorScheme: ColorSchemeName) => () => setColorSchemeSetting(colorScheme),
    [setColorSchemeSetting]
  )

  return (
    <ScrollView>
      <Center>
        <Text fontSize="2xl" bold mb={2}>
          Current theme: {colorSchemeSetting}
        </Text>
        {schemes.map((scheme) => {
          const isSelected = scheme === colorSchemeSetting

          return (
            <Button
              size="lg"
              width="64"
              key={scheme}
              mb={2}
              onPress={handleColorSchemeSettingChange(scheme)}
            >
              {`${scheme}${isSelected ? ' - selected' : ''}`}
            </Button>
          )
        })}

        <Button colorScheme="danger" mt={8} size="lg" width="64" onPress={signOut}>
          Sign out!
        </Button>
      </Center>
    </ScrollView>
  )
}
