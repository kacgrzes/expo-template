import { StackNavigationOptions } from '@react-navigation/stack'
import { t } from 'i18next'
import { Platform } from 'react-native'

import { RootStackScreens } from './enums'
import { bottomTabsScreensData } from './tabs'

import { BottomTabNavigator } from '~navigation/BottomTabNavigator'
import { WebNavigator } from '~navigation/webNavigator/WebNavigator'
import { ApplicationInfoScreen, NotFoundScreen, SignInScreen, SignUpScreen } from '~screens'

const isWeb = Platform.OS === 'web'

type RootScreenType = {
  name: keyof RootStackParamList
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: (props: { navigation: any; route: any }) => JSX.Element
  options?: StackNavigationOptions
  deeplink: string
}

type RootScreensType = {
  authorized: RootScreenType[]
  unauthorized: RootScreenType[]
  modals: RootScreenType[]
}

// RootStack_SCREENS_START
export const rootStackScreensData: RootScreensType = {
  authorized: [
    {
      name: RootStackScreens.MainTab,
      component: isWeb ? WebNavigator : BottomTabNavigator,
      options: { title: t('navigation.screen_titles.home'), headerShown: false },
      deeplink: '/',
    },
    // authorized_SCREENS_END
  ],
  unauthorized: [
    {
      name: RootStackScreens.SignIn,
      component: SignInScreen,
      options: { title: t('navigation.screen_titles.sign_in') },
      deeplink: '/sign-in',
    },
    {
      name: RootStackScreens.SignUp,
      component: SignUpScreen,
      options: { title: t('navigation.screen_titles.sign_up') },
      deeplink: '/sign-up',
    },
    // unauthorized_SCREENS_END
  ],
  modals: [
    {
      name: RootStackScreens.ApplicationInfo,
      component: ApplicationInfoScreen,
      options: { title: t('navigation.screen_titles.application_info') },
      deeplink: '/app-info',
    },
    {
      name: RootStackScreens.NotFound,
      component: NotFoundScreen,
      options: { title: t('navigation.screen_titles.not_found') },
      deeplink: '*',
    },
    // modals_SCREENS_END
  ],
} // RootStack_SCREENS_END

export const webScreensData = bottomTabsScreensData.map((tab) => tab?.screens ?? []).flat()
