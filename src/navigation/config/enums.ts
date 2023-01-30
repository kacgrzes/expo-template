type Keys<T> = keyof T
export const keys = <T extends object>(object: T) => Object.keys(object) as (keyof T)[]

// SCREENS
export const RootStackScreens = {
  SignIn: 'SignIn',
  SignUp: 'SignUp',
  MainTab: 'MainTab',
  Settings: 'Settings',
  ApplicationInfo: 'ApplicationInfo',
  NotFound: 'NotFound',
} as const

export const ExamplesStackScreens = {
  Examples: 'Examples',
  Typography: 'Typography',
  Colors: 'Colors',
  Components: 'Components',
  DataFromBeScreen_EXAMPLE: 'DataFromBeScreen_EXAMPLE',
} as const

export const HomeStackScreens = {
  Home: 'Home',
  Details: 'Details',
} as const

// BOTTOM TABS
export const BottomTabsScreens = {
  HomeStack: 'HomeStack',
  ExamplesStack: 'ExamplesStack',
} as const

export type BottomTabsScreensKeys = Keys<typeof BottomTabsScreens>
