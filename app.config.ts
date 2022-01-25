import { ExpoConfig, ConfigContext } from '@expo/config'

export default ({ config }: ConfigContext): Partial<ExpoConfig> => {
  return {
    ...config,
    extra: {
      universalLinks: [],
    },
    ios: {
      bundleIdentifier: 'com.test.test',
    },
  }
}
