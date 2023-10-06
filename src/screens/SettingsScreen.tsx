import { Version, Spacer, Button, Center, Text, ScrollView } from '~components'
import { colorSchemesList } from '~constants'
import { useColorScheme } from '~contexts'
import { useAuth, useCallback, useTranslation } from '~hooks'
import { noop } from '~utils'

export const SettingsScreen = (): JSX.Element => {
  const { t } = useTranslation()
  const { setColorSchemeSetting, colorSchemeSetting } = useColorScheme()
  const { signOut } = useAuth()

  const handleColorSchemeSettingChange = useCallback(
    (scheme: typeof colorSchemeSetting) => () => {
      setColorSchemeSetting(scheme)
    },
    [setColorSchemeSetting]
  )

  return (
    <ScrollView mt={4}>
      <Center flex={1}>
        <Text fontSize="2xl" bold mb={2}>
          {t('settings_screen.current_theme', { theme: colorSchemeSetting })}
        </Text>
        {colorSchemesList.map((scheme) => {
          const isSelected = scheme === colorSchemeSetting

          return (
            <Button size="lg" key={scheme} mb={2} onPress={handleColorSchemeSettingChange(scheme)}>
              {scheme + (isSelected ? ' - selected' : '')}
            </Button>
          )
        })}

        <Button.Secondary mt={8} size="lg" onPress={signOut}>
          {t('settings_screen.sign_out')}
        </Button.Secondary>
        <Spacer y={10} />
        <Version onPress={noop} />
      </Center>
    </ScrollView>
  )
}
