import * as Linking from 'expo-linking'
import { VStack, Heading, Divider, Button, ScrollView, View } from 'native-base'

import { Icon, Loader } from '~components'
import { useCallback, useNotifications, useTranslation } from '~hooks'

const headingSizes = ['xs', 'sm', 'md', 'lg', '2xl', '3xl', '4xl'] as const
const buttonVariants = ['solid', 'outline', 'subtle', 'ghost'] as const
const loaderVariants = [
  {
    type: 'circle',
    headerText: 'components_screen.loader_variants.circle',
  },
  {
    type: 'bubbles',
    headerText: 'components_screen.loader_variants.bubbles',
  },
  {
    type: 'bricks',
    headerText: 'components_screen.loader_variants.bricks',
  },
  {
    type: 'disk',
    headerText: 'components_screen.loader_variants.disk',
  },
  {
    type: 'default',
    headerText: 'components_screen.loader_variants.default',
  },
] as const

export const ComponentsScreen = (): JSX.Element => {
  const { notify } = useNotifications()
  const { t } = useTranslation()
  const testNotification = useCallback(
    () =>
      notify('info', {
        params: {
          title: t('components_screen.notification.title'),
          description: t('components_screen.notification.description'),
          onPress: () => {
            Linking.openURL('https://thewidlarzgroup.github.io/react-native-notificated/')
          },
        },
      }),
    [notify, t]
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
        <Icon name="account-box-fill" size={24} color={'amber.600'} />
        <Button my={4} isDisabled>
          {t('components_screen.button_variants.disabled')}
        </Button>
        <Divider my={4} />
        <Heading mb={4}>{t('components_screen.loader_variants.header')}</Heading>
        {loaderVariants?.map((loader) => (
          <View flex={1} key={loader.type}>
            <Heading mb={4} size="sm">
              {t(loader?.headerText)}
            </Heading>
            <Loader type={loader?.type} />
            <Divider my={4} backgroundColor="transparent" />
          </View>
        ))}
      </VStack>
      <Divider my={4} />
    </ScrollView>
  )
}
