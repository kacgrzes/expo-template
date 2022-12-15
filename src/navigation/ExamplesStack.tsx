import { createStackNavigator } from '@react-navigation/stack'
import { t } from 'i18next'

import { useMemo } from '~hooks'
import { ColorsScreen, ComponentsScreen, ExamplesScreen, TypographyScreen } from '~screens'
import { DataFromBeScreen_EXAMPLE } from '~screens/DataFromBeScreen_EXAMPLE'

const { Navigator, Screen } = createStackNavigator<ExampleStackParamList>()

export const enum ExamplesStackScreens {
  Examples = 'Examples',
  Typography = 'Typography',
  Colors = 'Colors',
  Components = 'Components',
  DataFromBeScreen_EXAMPLE = 'DataFromBeScreen',
}

export const examplesStackScreensData = [
  {
    name: ExamplesStackScreens.Examples,
    component: ExamplesScreen,
    title: t('navigation.screen_titles.examples'),
  },
  {
    name: ExamplesStackScreens.Typography,
    component: TypographyScreen,
    title: t('navigation.screen_titles.typography'),
  },
  {
    name: ExamplesStackScreens.Colors,
    component: ColorsScreen,
    title: t('navigation.screen_titles.colors'),
  },
  {
    name: ExamplesStackScreens.Components,
    component: ComponentsScreen,
    title: t('navigation.screen_titles.components'),
  },
  {
    name: ExamplesStackScreens.DataFromBeScreen_EXAMPLE,
    component: DataFromBeScreen_EXAMPLE,
    title: t('navigation.screen_titles.data_from_be_screen_example'),
  },
] as const

export const ExamplesStack = (): JSX.Element => {
  const screens = useMemo(
    () =>
      examplesStackScreensData.map(({ name, component, title }) => (
        <Screen key={name} options={{ title }} {...{ component, name }} />
      )),
    []
  )
  return <Navigator>{screens}</Navigator>
}
