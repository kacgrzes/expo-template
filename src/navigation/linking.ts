/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native'
import Constants from 'expo-constants'
import { createURL } from 'expo-linking'

export const prefix = createURL('/')
const universalLinks = Constants.manifest?.extra?.universalLinks ?? []

// Visit https://reactnavigation.org/docs/configuring-links#playground to see more
export const linking: LinkingOptions<ReactNavigation.RootParamList> = {
  prefixes: [prefix, ...universalLinks],
  config: {
    initialRouteName: 'Root',
    screens: {
      Settings: 'settings',
      Root: {
        screens: {
          HomeStack: {
            initialRouteName: 'Home',
            screens: {
              Home: '',
              Details: '/details/:id',
            },
          },
          Examples: 'examples',
        },
      },
      SignIn: 'sign-in',
      SignUp: 'sign-up',
      NotFound: '*',
    },
  },
}
