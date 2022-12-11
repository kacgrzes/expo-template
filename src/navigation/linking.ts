/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native'
import Constants from 'expo-constants'
import { createURL } from 'expo-linking'
import { Platform } from 'react-native'
const prefix = createURL('/')
const universalLinks = Constants.manifest?.extra?.universalLinks ?? []


import { ExamplesStackScreensEnum } from './ExamplesStack'
import { HomeStackScreensEnum } from './HomeStack'
// Visit https://reactnavigation.org/docs/configuring-links#playground to see more

const WEB_LINKS_CONFIG: LinkingOptions<RootStackParamList>['config'] = {
  initialRouteName: 'MainTab',
  screens: {
    MainTab: {
      // @ts-expect-error: react navigation works differently on web and it's hard to add types that satisfy web and mobile
      initialRouteName: 'Home',
      screens: {
        // @ts-expect-error: react navigation works differently on web and it's hard to add types that satisfy web and mobile
        [HomeStackScreensEnum.Home]: '/home',
        [HomeStackScreensEnum.Details]: '/details',
        [ExamplesStackScreensEnum.Examples]: '/examples',
        [ExamplesStackScreensEnum.Components]: '/components',
        [ExamplesStackScreensEnum.Colors]: '/colors',
        [ExamplesStackScreensEnum.Typography]: '/typography',
        [ExamplesStackScreensEnum.DataFromBeScreen_EXAMPLE]: '/data-from-be'
      },
    },
    SignIn: 'sign-in',
    SignUp: 'sign-up',
    ApplicationInfoScreen: '/aplication-info',
    NotFound: '*',
  },
}

const APP_LINKS_CONFIG: LinkingOptions<RootStackParamList>['config'] = {
  initialRouteName: 'MainTab',
  screens: {
    Settings: 'settings',
    MainTab: {
      screens: {
        HomeStack: {
          initialRouteName: 'Home',
          screens: {
            Home: '',
            Details: '/details/:id',
          },
        },
        ExamplesStack: {
          initialRouteName: 'Examples',
          screens: {
            Examples: '/examples',
            Components: '/components',
            Colors: '/colors',
            Typography: '/typography',
          },
        },
      },
    },
    SignIn: 'sign-in',
    SignUp: 'sign-up',
    NotFound: '*',
  },
}

export const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [prefix, ...universalLinks],
  config: Platform.OS === 'web' ? WEB_LINKS_CONFIG : APP_LINKS_CONFIG,
}
