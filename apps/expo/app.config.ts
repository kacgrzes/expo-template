import { ConfigContext, ExpoConfig } from "expo/config";

const IS_DEV = process.env.APP_VARIANT === "development";
const IS_PREVIEW = process.env.APP_VARIANT === "preview";

const extendUniqueIdentifier = (identifier: string) => {
  if (IS_DEV) {
    return `${identifier}.dev`;
  }

  if (IS_PREVIEW) {
    return `${identifier}.preview`;
  }

  return identifier;
};

const extendAppName = (originalAppName: string) => {
  if (IS_DEV) {
    return `${originalAppName} (Dev)`;
  }

  if (IS_PREVIEW) {
    return `${originalAppName} (Preview)`;
  }

  return originalAppName;
};

export default ({ config }: ConfigContext): ExpoConfig => {
  const defaultConfig = {
    ...config,
    slug: "template",
  } as ExpoConfig;

  return {
    ...defaultConfig,
    name: extendAppName(defaultConfig.name),
    ios: {
      ...defaultConfig.ios,
      bundleIdentifier: extendUniqueIdentifier(
        defaultConfig.ios?.bundleIdentifier!,
      ),
    },
    android: {
      ...defaultConfig.android,
      package: extendUniqueIdentifier(defaultConfig.android?.package!),
    },
  };
};
