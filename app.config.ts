import { ExpoConfig, ConfigContext } from '@expo/config'
import * as dotenv from 'dotenv'

dotenv.config()

// ENV_VARIABLES_NAMES - array of env variables names
const ENV_VARIABLES_NAMES = ['ENVIRONMENT'] as const

const getEnvVariables = () =>
  ENV_VARIABLES_NAMES.map((envVariable) => {
    return { [envVariable]: process.env[envVariable] }
  })

const ENV_VARIABLES = getEnvVariables()
const ENV_VARIABLES_VALUES = Object.assign({}, ...ENV_VARIABLES)

const environments = {
  prod: 'production',
  stg: 'staging',
  qa: 'qa',
} as const

export const envValues = Object.values(environments)
export type Environments = (typeof envValues)[number]

type Setup = { [key in Environments]: string }

const adaptiveIconPath = './assets/icons/android/adaptive-icon-'
const appIconPath = './assets/icons/ios/icon-'
const faviconPath = './assets/icons/web/favicon-'

// CONFIG: Add your eas build config here !! More details about the following parameters, and other available configs -> https://docs.expo.dev/build-reference/eas-json/
export const APP_CONFIG = {
  androidPackageName: 'your_android_package_name', // CONFIG: Add your android package name here
  appName: 'Template', // CONFIG: Add your app name here
  easProjectId: 'ac562c27-4a4e-4532-869f-fe6f9447bee6', // CONFIG: Add your eas project ID here
  iosBundleIdentifier: 'your.ios.bundle.identifier', // CONFIG: Add your ios bundle identifier here
  isDev: process.env.IS_DEV === '1',
  isExpoGo: process.env.IS_EXPO_GO === '1',
  scheme: 'your_url_scheme', //CONFIG: Add your url scheme to link to your app
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
  favicon: {
    production: `${faviconPath}production`,
    staging: `${faviconPath}staging`,
    qa: `${faviconPath}qa`,
  },
  iosBundleIdentifier: {
    production: `${APP_CONFIG.iosBundleIdentifier}`,
    staging: `${APP_CONFIG.iosBundleIdentifier}.stg`,
    qa: `${APP_CONFIG.iosBundleIdentifier}.qa`,
  },
  scheme: {
    production: `${APP_CONFIG.scheme}`,
    staging: `${APP_CONFIG.scheme}-stg`,
    qa: `${APP_CONFIG.scheme}-qa`,
  },
} as const

export default ({ config }: ConfigContext): Partial<ExpoConfig> => {
  const ENVIRONMENT = (process.env.ENVIRONMENT || 'qa') as Environments

  if (!envValues.includes(ENVIRONMENT)) {
    throw Error(`${ENVIRONMENT} setup missing`)
  }

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
      eas: { projectId: APP_CONFIG.easProjectId },
      ENVIRONMENT,
      ...ENV_VARIABLES_VALUES,
      universalLinks: [],
    },
    icon: EAS_ENV_CONFIG.appIcon[ENVIRONMENT],
    ios: {
      ...config.ios,
      bundleIdentifier: EAS_ENV_CONFIG.iosBundleIdentifier[ENVIRONMENT],
    },
    name: EAS_ENV_CONFIG.appName[ENVIRONMENT],
    owner: config.owner || 'binarapps',
    runtimeVersion,
    scheme: EAS_ENV_CONFIG.scheme[ENVIRONMENT],
    updates: { url: `https://u.expo.dev/${APP_CONFIG.easProjectId}` },
    web: {
      ...config.web,
      favicon: EAS_ENV_CONFIG.favicon[ENVIRONMENT],
    },
  }
}
