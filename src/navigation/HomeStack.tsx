import { createStackNavigator } from '@react-navigation/stack'

import { useTranslation } from '~hooks'
import { DetailsScreen, HomeScreen } from '~screens'

const { Navigator, Screen } = createStackNavigator<HomeStackParamList>()

export const HomeStack = (): JSX.Element => {
  const { t } = useTranslation()
  return (
    <Navigator>
      <Screen
        name="Home"
        options={{ title: t('navigation.screen_titles.home') }}
        component={HomeScreen}
      />
      <Screen
        name="Details"
        options={{ title: t('navigation.screen_titles.details') }}
        component={DetailsScreen}
      />
    </Navigator>
  )
}
