/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native'
import Constants from 'expo-constants'
import { createURL } from 'expo-linking'
import { Platform } from 'react-native'

import { HomeStackScreens, RootStackScreens } from './config/enums'
import { rootStackScreensData } from './config/rootScreens'
import { webScreensData, bottomTabsScreensData } from './config/tabs'

const prefix = createURL('/')
const universalLinks = Constants.manifest?.extra?.universalLinks ?? []

const webTabsScreens = webScreensData.reduce<{ [key: string]: string }>((prev, current) => {
  prev[current.name] = current.deeplink
  return prev
}, {})

const mobileTabsScreens = bottomTabsScreensData.reduce<{
  [key: string]: {
    initialRouteName: string
    screens: { [key: string]: string }
  }
}>((prev, current) => {
  // issue in typescript, follow this thread: https://github.com/microsoft/TypeScript/issues/44373
  const screens = current.screens as unknown as {
    initialRouteName: string
    name: string
    deeplink: string
    screens: { [key: string]: string }
  }[]
  prev[current.name] = {
    initialRouteName: current.screens[0].name,
    screens: screens.reduce<{ [key: string]: string }>((prev, current) => {
      prev[current.name] = current.deeplink
      return prev
    }, {}),
  }
  return prev
}, {})

const rootScreensData = [
  // Filter out MainTab because it's handled separately
  ...rootStackScreensData.authorized.filter((screen) => screen.name !== RootStackScreens.MainTab),
  ...rootStackScreensData.unauthorized,
  ...rootStackScreensData.modals,
]

const webRootScreens = rootScreensData.reduce<{ [key: string]: string }>((prev, current) => {
  prev[current.name] = current.deeplink
  return prev
}, {})

// Visit https://reactnavigation.org/docs/configuring-links#playground to see more
const WEB_LINKS_CONFIG: LinkingOptions<RootStackParamList>['config'] = {
  initialRouteName: 'MainTab',
  screens: {
    MainTab: {
      // @ts-expect-error: Enum can't be cast to string, but the values are the same
      initialRouteName: HomeStackScreens.Home,
      screens: webTabsScreens,
    },
    ...webRootScreens,
  },
}

const APP_LINKS_CONFIG: LinkingOptions<RootStackParamList>['config'] = {
  initialRouteName: 'MainTab',
  screens: {
    MainTab: {
      // @ts-expect-error: Enum can't be cast to string, but the values are the same
      initialRouteName: HomeStackScreens.Home,
      screens: mobileTabsScreens,
    },
    ...webRootScreens,
  },
}

export const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [prefix, ...universalLinks],
  config: Platform.OS === 'web' ? WEB_LINKS_CONFIG : APP_LINKS_CONFIG,
}
