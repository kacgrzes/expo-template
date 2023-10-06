import * as Linking from 'expo-linking'

import { Icon, Loader, Box, Text, Button, Center, ScrollView } from '~components'
import { useCallback, useNotifications, useTranslation } from '~hooks'

const headingSizes = ['xs', 'sm', 'md', 'lg', '2xl', '3xl', '4xl'] as const
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
    <ScrollView flexGrow={1} p={4}>
      <Button.Primary alignSelf="center" onPress={testNotification}>
        {t('components_screen.test_notification')}
      </Button.Primary>
      <Box alignItems="center">
        <Text.H4 mt={8} mb={4}>
          {t('components_screen.typography.label')}
        </Text.H4>
        {headingSizes.map((size) => (
          <Text key={size} fontSize={size}>
            {t(`components_screen.typography.${size}`)}
          </Text>
        ))}
        <Text.H4 mt={8} mb={4}>
          {t('components_screen.button_variants.header')}
        </Text.H4>
        <Button.Primary title={t('components_screen.button_variants.primary')} />
        <Button.Primary
          mt={4}
          leftIcon={<Icon name="account-box-fill" size={24} color="red.400" />}
          rightIcon={<Icon name="account-box-fill" size={24} color="modalBackground" />}
          title={t('components_screen.button_variants.with_icons')}
        />
        <Button.Secondary mt={4} title={t('components_screen.button_variants.secondary')} />
        <Button.Outline mt={4} title={t('components_screen.button_variants.outline')} />
        <Button.Ghost mt={4} title={t('components_screen.button_variants.ghost')} />
        <Button.Link mt={4} title={t('components_screen.button_variants.link')} />
        <Button mt={4} disabled>
          {t('components_screen.button_variants.disabled')}
        </Button>
        <Button mt={4} loading size="lg" />
        <Text.H4 mt={8} mb={4}>
          {t('components_screen.loader_variants.header')}
        </Text.H4>
        {loaderVariants?.map((loader) => (
          <Box flex={1} key={loader.type}>
            <Text my={4} fontSize="sm">
              {t(loader?.headerText)}
            </Text>
            <Center>
              <Loader type={loader?.type} />
            </Center>
          </Box>
        ))}
      </Box>
    </ScrollView>
  )
}
