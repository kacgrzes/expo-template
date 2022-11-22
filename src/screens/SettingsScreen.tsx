import * as Clipboard from 'expo-clipboard'
import * as Notifications from 'expo-notifications'
import { ScrollView, Text, Button, Center } from 'native-base'

import { Version, Spacer } from '~components'
import { colorSchemesList } from '~constants'
import { useColorScheme } from '~contexts'
import { useAuth, useCallback, useTranslation } from '~hooks'
import { noop } from '~utils'

export const SettingsScreen = (): JSX.Element => {
  const { t } = useTranslation()
  const { setColorSchemeSetting, colorSchemeSetting } = useColorScheme()
  const { signOut } = useAuth()

  const handleCopyPushToken = useCallback(async () => {
    const token = (await Notifications.getExpoPushTokenAsync()).data
    await Clipboard.setStringAsync(token)
    alert('Copied push token')
  }, [])

  const handleColorSchemeSettingChange = useCallback(
    (scheme: typeof colorSchemeSetting) => () => {
      setColorSchemeSetting(scheme)
    },
    [setColorSchemeSetting]
  )

  return (
    <ScrollView>
      <Center flex={1}>
        <Button size="lg" width="64" my={2} onPress={handleCopyPushToken}>
          {t('settings_screen.copy_push_token')}
        </Button>
        <Text fontSize="2xl" bold mb={2}>
          {t('settings_screen.current_theme', { theme: colorSchemeSetting })}
        </Text>
        {colorSchemesList.map((scheme) => {
          const isSelected = scheme === colorSchemeSetting

          return (
            <Button
              size="lg"
              width="64"
              key={scheme}
              mb={2}
              onPress={handleColorSchemeSettingChange(scheme)}
            >
              {scheme}
              {isSelected ? ' - selected' : ''}
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
