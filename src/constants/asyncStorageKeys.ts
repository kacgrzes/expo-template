export const ASYNC_STORAGE_KEYS = {
  NAVIGATION_STATE: '@navigation/navigation-state',
  USER_LANGUAGE: '@language/user-language',
  COLOR_SCHEME: '@theme/colorScheme',
  // This value is used in `expo-secure-store` package and it can't include '@' and '/'
  USER_TOKEN: 'user_token',
} as const
