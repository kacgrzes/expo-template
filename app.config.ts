import { ExpoConfig, ConfigContext } from '@expo/config'
import * as dotenv from 'dotenv'

dotenv.config()

const environments = {
  prod: 'production',
  stg: 'staging',
  qa: 'qa',
} as const

export const envValues = Object.values(environments)
export type Environments = typeof envValues[number]

type Setup = { [key in Environments]: string }

const adaptiveIconPath = './assets/icons/android/adaptive-icon-'
const appIconPath = './assets/icons/ios/icon-'

// CONFIG: Add your eas build config here !! More details about the following parameters, and other available configs -> https://docs.expo.dev/build-reference/eas-json/
export const APP_CONFIG = {
  androidPackageName: 'your_android_package_name', // CONFIG: Add your android package name here
  appName: 'Template', // CONFIG: Add your app name here
  easProjectId: 'ac562c27-4a4e-4532-869f-fe6f9447bee6', // CONFIG: Add your eas project ID here
  iosBundleIdentifier: 'your.ios.bundle.identifier', // CONFIG: Add your ios bundle identifier here
  isDev: process.env.IS_DEV === '1',
  isExpoGo: process.env.IS_EXPO_GO === '1',
} as const

const runtimeVersion = { policy: APP_CONFIG.isDev ? 'sdkVersion' : 'appVersion' } as const

export const EAS_ENV_CONFIG: { [key: string]: Setup } = {
  // CONFIG: Add your android adaptive icon background color here
  adaptiveIconBackgroundColor: {
    production: '#2E7AF0CC',
    staging: '#0064FF',
    qa: '#041939',
  },
  // CONFIG: Change android adaptive icons here
  adaptiveIcon: {
    production: `${adaptiveIconPath}production.png`,
    staging: `${adaptiveIconPath}staging.png`,
    qa: `${adaptiveIconPath}qa.png`,
  },
  androidPackageName: {
    production: `${APP_CONFIG.androidPackageName}`,
    staging: `${APP_CONFIG.androidPackageName}.stg`,
    qa: `${APP_CONFIG.androidPackageName}.qa`,
  },
  // CONFIG: Change ios app icons here
  appIcon: {
    production: `${appIconPath}production.png`,
    staging: `${appIconPath}staging.png`,
    qa: `${appIconPath}qa.png`,
  },
  appName: {
    production: `${APP_CONFIG.appName}`,
    staging: `${APP_CONFIG.appName} (staging)`,
    qa: `${APP_CONFIG.appName} (qa)`,
  },
  iosBundleIdentifier: {
    production: `${APP_CONFIG.iosBundleIdentifier}`,
    staging: `${APP_CONFIG.iosBundleIdentifier}.stg`,
    qa: `${APP_CONFIG.iosBundleIdentifier}.qa`,
  },
} as const

export default ({ config }: ConfigContext): Partial<ExpoConfig> => {
  const ENVIRONMENT = (process.env.ENVIRONMENT || 'qa') as Environments

  if (!envValues.includes(ENVIRONMENT)) {
    throw Error(`${ENVIRONMENT} setup missing`)
  }

  // TODO: Set to hermes when updating to expo 47
  const jsEngine = (!APP_CONFIG.isExpoGo && 'hermes') || undefined
  const eas = APP_CONFIG.isDev
    ? {
        eas: { projectId: APP_CONFIG.easProjectId },
      }
    : {}

  return {
    ...config,
    android: {
      ...config.android,
      adaptiveIcon: {
        backgroundColor: EAS_ENV_CONFIG.adaptiveIconBackgroundColor[ENVIRONMENT],
        foregroundImage: EAS_ENV_CONFIG.adaptiveIcon[ENVIRONMENT],
      },
      package: EAS_ENV_CONFIG.androidPackageName[ENVIRONMENT],
    },
    extra: {
      ...eas,
      ENVIRONMENT,
      universalLinks: [],
    },
    icon: EAS_ENV_CONFIG.appIcon[ENVIRONMENT],
    ios: {
      ...config.ios,
      bundleIdentifier: EAS_ENV_CONFIG.iosBundleIdentifier[ENVIRONMENT],
      jsEngine,
    },
    name: EAS_ENV_CONFIG.appName[ENVIRONMENT],
    owner: config.owner || 'binarapps',
    runtimeVersion,
    updates: { url: `https://u.expo.dev/${APP_CONFIG.easProjectId}` },
  }
}
