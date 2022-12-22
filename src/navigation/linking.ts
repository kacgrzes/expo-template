/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native'
import Constants from 'expo-constants'
import { createURL } from 'expo-linking'

const prefix = createURL('/')
const authorizedPaths = ['/details', '/examples', '/components', '/colors', '/typography']
const universalLinks = Constants.manifest?.extra?.universalLinks ?? []

// Visit https://reactnavigation.org/docs/configuring-links#playground to see more
export const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [prefix, ...universalLinks],
  config: {
    initialRouteName: 'MainTab',
    screens: {
      Settings: '/settings',
      MainTab: {
        screens: {
          HomeStack: {
            initialRouteName: 'Home',
            screens: {
              Home: '/home',
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
              DataFromBeScreen: '/data-from-be',
            },
          },
        },
      },
      ApplicationInfo: '/application-info',
      SignIn: '/sign-in',
      SignUp: '/sign-up',
      NotFound: '*',
    },
  },
}

/**
 *  Checks whether provided link contains authorized link or not.
 *
 * @param linkWithoutPrefix link to check with navigation authorized paths
 */
export const isAuthorizedLink = (linkWithoutPrefix: string): boolean =>
  authorizedPaths.some((path) => linkWithoutPrefix.includes(path))
