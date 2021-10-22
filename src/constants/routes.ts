// This cannot be enum because types are not working with autocompletition
export const Routes = {
  // Stacks
  HomeStack: 'HomeStack',

  // Root stack
  Root: 'Root',
  SignUp: 'SignUp',
  SignIn: 'SignIn',
  ApplicationInfo: 'ApplicationInfo',
  NotFound: 'NotFound',
  Settings: 'Settings',

  // Home stack
  Home: 'Home',
  Details: 'Details',
} as const

export const routesList = Object.values(Routes)
