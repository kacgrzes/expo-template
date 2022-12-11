import { createStackNavigator } from '@react-navigation/stack'
import { t } from 'i18next'

import { useMemo } from '~hooks'
import { ColorsScreen, ComponentsScreen, ExamplesScreen, TypographyScreen } from '~screens'
import { DataFromBeScreen_EXAMPLE } from '~screens/DataFromBeScreen_EXAMPLE'

const { Navigator, Screen } = createStackNavigator<ExampleStackParamList>()

export const enum ExamplesStackScreensEnum {
  Examples = 'Examples',
  Typography = 'Typography',
  Colors = 'Colors',
  Components = 'Components',
  DataFromBeScreen_EXAMPLE = 'DataFromBeScreen',
}

export const examplesStackScreensData = [
  {
    name: ExamplesStackScreensEnum.Examples,
    component: ExamplesScreen,
    title: t('navigation.screen_titles.examples'),
  },
  {
    name: ExamplesStackScreensEnum.Typography,
    component: TypographyScreen,
    title: t('navigation.screen_titles.typography'),
  },
  {
    name: ExamplesStackScreensEnum.Colors,
    component: ColorsScreen,
    title: t('navigation.screen_titles.colors'),
  },
  {
    name: ExamplesStackScreensEnum.Components,
    component: ComponentsScreen,
    title: t('navigation.screen_titles.components'),
  },
  {
    name: ExamplesStackScreensEnum.DataFromBeScreen_EXAMPLE,
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
