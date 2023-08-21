type Keys<T> = keyof T
export const keys = <T extends object>(object: T) => Object.keys(object) as (keyof T)[]

// Root_SCREENS
export const RootStackScreens = {
  SignIn: 'SignIn',
  SignUp: 'SignUp',
  MainTab: 'MainTab',
  Settings: 'Settings',
  ApplicationInfo: 'ApplicationInfo',
  NotFound: 'NotFound',
} as const

// BottomTabs_SCREENS
export const BottomTabsScreens = {
  HomeStack: 'HomeStack',
  ExamplesStack: 'ExamplesStack',
} as const

// ExamplesStack_SCREENS
export const ExamplesStackScreens = {
  Examples: 'Examples',
  Typography: 'Typography',
  Colors: 'Colors',
  Components: 'Components',
  DataFromBeScreen_EXAMPLE: 'DataFromBeScreen_EXAMPLE',
  TestForm: 'TestForm',
} as const

// HomeStack_SCREENS
export const HomeStackScreens = {
  Home: 'Home',
  Details: 'Details',
} as const

export type BottomTabsScreensKeys = Keys<typeof BottomTabsScreens>
