import { t } from 'i18next'

import { ExamplesStackScreens, HomeStackScreens } from './enums'

import {
  ColorsScreen,
  ComponentsScreen,
  DataFromBeScreen_EXAMPLE,
  DetailsScreen,
  ExamplesScreen,
  HomeScreen,
  TypographyScreen,
} from '~screens'

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

export const homeStackScreensData = [
  {
    name: HomeStackScreens.Home,
    component: HomeScreen,
    title: t('navigation.screen_titles.home'),
  },
  {
    name: HomeStackScreens.Details,
    component: DetailsScreen,
    title: t('navigation.screen_titles.details'),
  },
]
