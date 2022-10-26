import Constants, { AppOwnership } from 'expo-constants'

export const isExpoGo = Constants.appOwnership === AppOwnership.Expo
export const isDevelopment = __DEV__ || process.env.NODE_ENV === 'development'
export const isProduction = !isDevelopment || process.env.NODE_ENV === 'production'
