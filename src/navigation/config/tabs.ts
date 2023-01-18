import { t } from 'i18next'

import { ExamplesStack } from '../ExamplesStack'
import { HomeStack } from '../HomeStack'
import { BottomTabsScreens } from './enums'
import { examplesStackScreensData, homeStackScreensData } from './tabsScreens'

export const bottomTabsScreensData = [
  {
    component: HomeStack,
    icons: {
      active: 'home-5-fill',
      inactive: 'home-line',
    },
    name: BottomTabsScreens.HomeStack,
    screens: homeStackScreensData,
    options: { title: t('navigation.screen_titles.home_stack') },
  },
  {
    component: ExamplesStack,
    icons: {
      active: 'file-list-2-fill',
      inactive: 'file-list-2-line',
    },
    name: BottomTabsScreens.ExamplesStack,
    screens: examplesStackScreensData,
    options: { title: t('navigation.screen_titles.examples_stack') },
  },
] as const

export const webScreensData = bottomTabsScreensData.map((tab) => tab?.screens ?? []).flat()
