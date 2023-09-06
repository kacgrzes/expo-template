import * as Linking from 'expo-linking'
import { ScrollView, StyleSheet } from 'react-native'

import { Icon, Loader } from '~components'
import { Box, Text, Spacer, Button } from '~components/atoms'
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
    <ScrollView contentContainerStyle={styles.container}>
      <Button alignSelf="center" variant="outline" onPress={testNotification}>
        {t('components_screen.test_notification')}
      </Button>
      <Spacer y="4" />
      <Box alignItems="center">
        <Text mb={4}>{t('components_screen.typography.label')}</Text>
        {headingSizes.map((size) => (
          <Text key={size} fontSize={size}>
            {t(`components_screen.typography.${size}`)}
          </Text>
        ))}
        <Spacer y="4" />
        <Text mb={4}>{t('components_screen.button_variants.header')}</Text>
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
        <Spacer y="4" />
        <Text mb={4}>{t('components_screen.loader_variants.header')}</Text>
        {loaderVariants?.map((loader) => (
          <Box flex={1} key={loader.type}>
            <Text mb={4} fontSize="sm">
              {t(loader?.headerText)}
            </Text>
            <Loader type={loader?.type} />
            <Spacer y="4" />
          </Box>
        ))}
      </Box>
      <Spacer y="4" />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
  },
})
