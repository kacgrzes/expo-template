import * as Clipboard from 'expo-clipboard'
import * as Notifications from 'expo-notifications'
import { ScrollView, Text, Button, Center, ColorMode } from 'native-base'

import { Version, Spacer } from '~components'
import { useAuth, useCallback, useColorMode, useTranslation } from '~hooks'
import { noop } from '~utils'

export const SettingsScreen = (): JSX.Element => {
  const { t } = useTranslation()
  const { colorMode, setColorMode } = useColorMode()
  const { signOut } = useAuth()

  const handleColorSchemeSettingChange = useCallback(
    (colorScheme: ColorMode) => () => setColorMode(colorScheme),
    [setColorMode]
  )

  const handleCopyPushToken = useCallback(async () => {
    const token = (await Notifications.getExpoPushTokenAsync()).data
    await Clipboard.setStringAsync(token)
    alert('Copied push token')
  }, [])

  return (
    <ScrollView>
      <Center flex={1}>
        <Button size="lg" width="64" my={2} onPress={handleCopyPushToken}>
          {t('settings_screen.copy_push_token')}
        </Button>
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
        <Spacer y="10" />
        <Version onPress={noop} />
      </Center>
    </ScrollView>
  )
}
