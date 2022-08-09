import { ScrollView, Text, Button, Center, ColorMode } from 'native-base'

import { useCallback, useColorMode } from '~hooks'
import { useAuth } from '~providers'

export const SettingsScreen = (): JSX.Element => {
  const { colorMode, setColorMode } = useColorMode()
  const { signOut } = useAuth()

  const handleColorSchemeSettingChange = useCallback(
    (colorScheme: ColorMode) => () => setColorMode(colorScheme),
    [setColorMode]
  )

  return (
    <ScrollView>
      <Center>
        <Text fontSize="2xl" bold mb={2}>
          Current theme: {colorMode}
        </Text>
        {(['light', 'dark'] as ColorMode[]).map((scheme) => {
          const isSelected = scheme === colorMode

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
