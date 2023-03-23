import { StackNavigationOptions } from '@react-navigation/stack'
import { t } from 'i18next'

import { BottomTabsScreens, ExamplesStackScreens, HomeStackScreens } from './enums'

import {
  ColorsScreen,
  ComponentsScreen,
  DataFromBeScreen_EXAMPLE,
  DetailsScreen,
  ExamplesScreen,
  HomeScreen,
  TypographyScreen,
} from '~screens'

type ScreenType<T extends string> = {
  name: T
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: (props: { navigation: any; route: any }) => JSX.Element
  options?: StackNavigationOptions
  deeplink: string
}

// ExamplesStack_SCREENS_START
const examplesStackScreensData: ScreenType<keyof typeof ExamplesStackScreens>[] = [
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
] // ExamplesStack_SCREENS_END

// HomeStack_SCREENS_START
const homeStackScreensData: ScreenType<keyof typeof HomeStackScreens>[] = [
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
] // HomeStack_SCREENS_END

// BottomTab_SCREENS_START
export const bottomTabsScreensData = [
  {
    icons: {
      active: 'home-5-fill',
      inactive: 'home-line',
    } as const,
    name: BottomTabsScreens.HomeStack,
    screens: homeStackScreensData,
    options: { title: t('navigation.screen_titles.home_stack') },
  },
  {
    icons: {
      active: 'file-list-2-fill',
      inactive: 'file-list-2-line',
    } as const,
    name: BottomTabsScreens.ExamplesStack,
    screens: examplesStackScreensData,
    options: { title: t('navigation.screen_titles.examples_stack') },
  },
] // BottomTab_SCREENS_END

export const webScreensData = bottomTabsScreensData.map((tab) => tab?.screens ?? []).flat()
