/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { createURL } from 'expo-linking'
import Constants from 'expo-constants'
import { LinkingOptions } from '@react-navigation/native'

const prefix = createURL('/')
const universalLinks = Constants.manifest?.extra?.universalLinks ?? []

// Visit https://reactnavigation.org/docs/configuring-links#playground to see more
export const linking: LinkingOptions<ReactNavigation.RootParamList> = {
  prefixes: [prefix, ...universalLinks],
  config: {
    screens: {
      Root: {
        screens: {
          Home: '',
          Examples: 'examples',
        },
      },
      SignIn: 'sign-in',
      SignUp: 'sign-up',
      NotFound: '*',
    },
  },
}
