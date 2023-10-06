import { Button, ScrollView } from '~components'
import { useTranslation, useCallback } from '~hooks'

export const ExamplesScreen = (props: ExamplesScreenProps): JSX.Element => {
  const {
    navigation: { navigate },
  } = props

  const { t } = useTranslation()

  const goToApplicationInfo = useCallback(() => navigate('ApplicationInfo'), [navigate])
  const goToColors = useCallback(() => navigate('Colors'), [navigate])
  const goToComponents = useCallback(() => navigate('Components'), [navigate])
  const goToTypography = useCallback(() => navigate('Typography'), [navigate])
  const goToCityListScreen_EXAMPLE = useCallback(
    () => navigate('DataFromBeScreen_EXAMPLE'),
    [navigate]
  )
  const goToTestForm = useCallback(() => navigate('TestForm'), [navigate])

  const goToHomeStackDetails = useCallback(
    () => navigate('Details', { id: 'example-id' }),
    [navigate]
  )

  return (
    <ScrollView p={4}>
      <Button mb={2} onPress={goToApplicationInfo}>
        {t('examples_screen.go_to_application_info')}
      </Button>
      <Button mb={2} onPress={goToColors}>
        {t('examples_screen.go_to_colors')}
      </Button>
      <Button mb={2} onPress={goToComponents}>
        {t('examples_screen.go_to_components')}
      </Button>
      <Button mb={2} onPress={goToTypography}>
        {t('examples_screen.go_to_typography')}
      </Button>
      <Button mb={2} onPress={goToHomeStackDetails}>
        {t('examples_screen.go_to_home_stack_details')}
      </Button>
      <Button mb={2} onPress={goToCityListScreen_EXAMPLE}>
        {t('examples_screen.go_to_screen_with_BEdata')}
      </Button>
      <Button mb={2} onPress={goToTestForm}>
        {t('examples_screen.go_to_screen_test_form')}
      </Button>
    </ScrollView>
  )
}
