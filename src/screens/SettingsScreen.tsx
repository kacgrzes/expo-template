import { ScrollView, Text, Button, Center, ColorMode } from 'native-base'

import { useAuth, useCallback, useColorMode, useTranslation } from '~hooks'

export const SettingsScreen = (): JSX.Element => {
  const { t } = useTranslation()
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
          {t('settings_screen.current_theme', { theme: colorMode })}
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
              {`${scheme}${isSelected ? t('settings_screen.selected') : ''}`}
            </Button>
          )
        })}

        <Button colorScheme="danger" mt={8} size="lg" width="64" onPress={signOut}>
          {t('settings_screen.sign_out')}
        </Button>
      </Center>
    </ScrollView>
  )
}
