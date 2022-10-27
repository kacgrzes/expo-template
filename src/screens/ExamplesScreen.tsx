import { Button, ScrollView, Center } from 'native-base'

import { Icon } from '~components'
import { useTranslation, useCallback } from '~hooks'

export const ExamplesScreen = (props: ExamplesScreenProps): JSX.Element => {
  const {
    navigation: { navigate },
  } = props

  const { t } = useTranslation()

  const goToApplicationInfo = useCallback(() => navigate('ApplicationInfo'), [navigate])
  const goToAppSettings = useCallback(() => navigate('Settings'), [navigate])
  const goToColors = useCallback(() => navigate('Colors'), [navigate])
  const goToComponents = useCallback(() => navigate('Components'), [navigate])
  const goToTypography = useCallback(() => navigate('Typography'), [navigate])
  const goToCityListScreen_EXAMPLE = useCallback(() => navigate('DataFromBeScreen'), [navigate])
  const goToHomeStackDetails = useCallback(
    () =>
      navigate('HomeStack', {
        screen: 'Details',
        params: { id: 'examples-id' },
      }),
    [navigate]
  )
  return (
    <ScrollView p={4}>
      <Center>
        <Button size="lg" width="64" mb={2} onPress={goToApplicationInfo}>
          {t('examples_screen.go_to_application_info')}
        </Button>
        <Button size="lg" width="64" mb={2} onPress={goToColors}>
          {t('examples_screen.go_to_colors')}
        </Button>
        <Button size="lg" width="64" mb={2} onPress={goToComponents}>
          {t('examples_screen.go_to_components')}
        </Button>
        <Button size="lg" width="64" mb={2} onPress={goToTypography}>
          {t('examples_screen.go_to_typography')}
        </Button>
        <Button size="lg" width="64" mb={2} onPress={goToHomeStackDetails}>
          {t('examples_screen.go_to_home_stack_details')}
        </Button>
        <Button size="lg" width="64" mb={2} onPress={goToAppSettings}>
          {t('examples_screen.go_to_settings')}
        </Button>
        <Button size="lg" width="64" mb={2} onPress={goToCityListScreen_EXAMPLE}>
          {t('examples_screen.go_to_screen_with_BEdata')}
        </Button>
        <Icon name="account-box-fill" size={24} color={'amber.600'} />
      </Center>
    </ScrollView>
  )
}
