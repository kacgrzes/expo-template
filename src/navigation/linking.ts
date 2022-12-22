/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native'
import Constants from 'expo-constants'
import { createURL } from 'expo-linking'
import { Platform } from 'react-native'

import { ExamplesStackScreens, HomeStackScreens } from './config/enums'

const prefix = createURL('/')
const authorizedPaths = ['/details', '/examples', '/components', '/colors', '/typography']
const universalLinks = Constants.manifest?.extra?.universalLinks ?? []

// Visit https://reactnavigation.org/docs/configuring-links#playground to see more
const WEB_LINKS_CONFIG: LinkingOptions<RootStackParamList>['config'] = {
  initialRouteName: 'MainTab',
  screens: {
    MainTab: {
      // @ts-expect-error: react navigation works differently on web and it's hard to add types that satisfy web and mobile
      initialRouteName: 'Home',
      screens: {
        // @ts-expect-error: react navigation works differently on web and it's hard to add types that satisfy web and mobile
        [HomeStackScreens.Home]: '/',
        [HomeStackScreens.Details]: '/details',
        [ExamplesStackScreens.Examples]: '/examples',
        [ExamplesStackScreens.Components]: '/components',
        [ExamplesStackScreens.Colors]: '/colors',
        [ExamplesStackScreens.Typography]: '/typography',
        [ExamplesStackScreens.DataFromBeScreen_EXAMPLE]: '/data-from-be',
      },
    },
    SignIn: '/sign-in',
    SignUp: '/sign-up',
    ApplicationInfo: '/aplication-info',
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
  },
}

export const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [prefix, ...universalLinks],
  config: Platform.OS === 'web' ? WEB_LINKS_CONFIG : APP_LINKS_CONFIG,
}

/**
 *  Checks whether provided link contains authorized link or not.
 *
 * @param linkWithoutPrefix link to check with navigation authorized paths
 */
export const isAuthorizedLink = (linkWithoutPrefix: string): boolean =>
  authorizedPaths.some((path) => linkWithoutPrefix.includes(path))
