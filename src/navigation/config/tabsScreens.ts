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
    options: { title: t('navigation.screen_titles.examples') },
    deeplink: '/examples',
  },
  {
    name: ExamplesStackScreens.Typography,
    component: TypographyScreen,
    options: { title: t('navigation.screen_titles.typography') },
    deeplink: '/typography',
  },
  {
    name: ExamplesStackScreens.Colors,
    component: ColorsScreen,
    options: { title: t('navigation.screen_titles.colors') },
    deeplink: '/colors',
  },
  {
    name: ExamplesStackScreens.Components,
    component: ComponentsScreen,
    options: { title: t('navigation.screen_titles.components') },
    deeplink: '/components',
  },
  {
    name: ExamplesStackScreens.DataFromBeScreen_EXAMPLE,
    component: DataFromBeScreen_EXAMPLE,
    options: { title: t('navigation.screen_titles.data_from_be_screen_example') },
    deeplink: '/data-example',
  },
] as const

export const homeStackScreensData = [
  {
    name: HomeStackScreens.Home,
    component: HomeScreen,
    options: { title: t('navigation.screen_titles.home') },
    deeplink: '/',
  },
  {
    name: HomeStackScreens.Details,
    component: DetailsScreen,
    options: { title: t('navigation.screen_titles.details') },
    deeplink: '/details',
  },
] as const
