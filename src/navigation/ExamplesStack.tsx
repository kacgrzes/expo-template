import { createStackNavigator } from '@react-navigation/stack'

import { useTranslation } from '~hooks'
import { ColorsScreen, ComponentsScreen, ExamplesScreen, TypographyScreen } from '~screens'
import { DataFromBeScreen_EXAMPLE } from '~screens/DataFromBeScreen_EXAMPLE'

const { Navigator, Screen } = createStackNavigator<ExampleStackParamList>()

export const ExamplesStack = (): JSX.Element => {
  const { t } = useTranslation()
  return (
    <Navigator>
      <Screen
        name="Examples"
        options={{ title: t('navigation.screen_titles.examples') }}
        component={ExamplesScreen}
      />
      <Screen
        name="Components"
        options={{ title: t('navigation.screen_titles.components') }}
        component={ComponentsScreen}
      />
      <Screen
        name="Colors"
        options={{ title: t('navigation.screen_titles.colors') }}
        component={ColorsScreen}
      />
      <Screen
        name="Typography"
        options={{ title: t('navigation.screen_titles.typography') }}
        component={TypographyScreen}
      />
      <Screen
        name="DataFromBeScreen"
        options={{ title: t('navigation.screen_titles.examples') }}
        component={DataFromBeScreen_EXAMPLE}
      />
    </Navigator>
  )
}
