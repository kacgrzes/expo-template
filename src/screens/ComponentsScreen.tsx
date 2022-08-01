import * as Linking from 'expo-linking'
import { VStack, Heading, Divider, Button, ScrollView } from 'native-base'

import { useCallback, useNotifications, useTranslation } from '~hooks'

const headingSizes = ['xs', 'sm', 'md', 'lg', '2xl', '3xl', '4xl'] as const
const buttonVariants = ['solid', 'outline', 'subtle', 'ghost'] as const

export const ComponentsScreen = (): JSX.Element => {
  const { notify } = useNotifications()
  const { t } = useTranslation()
  const testNotification = useCallback(
    () =>
      notify('info', {
        params: {
          title: 'In-app notification example',
          description: 'by react-native-notificated 🎉',
          onPress: () => {
            Linking.openURL('https://thewidlarzgroup.github.io/react-native-notificated/')
          },
        },
      }),
    [notify]
  )

  return (
    <ScrollView p={4}>
      <Button alignSelf="center" variant="outline" onPress={testNotification}>
        {t('components_screen.test_notification')}
      </Button>
      <Divider my={4} />
      <VStack alignItems="center">
        <Heading mb={4}>{t('components_screen.typography.label')}</Heading>
        {headingSizes.map((size) => (
          <Heading key={size} size={size}>
            {t(`components_screen.typography.${size}`)}
          </Heading>
        ))}
        <Divider my={4} />
        <Heading mb={4}>{t('components_screen.button_variants.header')}</Heading>
        {buttonVariants.map((variant) => (
          <Button key={variant} mb={2} variant={variant}>
            {t(`components_screen.button_variants.${variant}`)}
          </Button>
        ))}
        <Button mb={2} isLoading variant="link" />
        <Button mb={2} isDisabled>
          {t('components_screen.button_variants.disabled')}
        </Button>
      </VStack>
    </ScrollView>
  )
}
