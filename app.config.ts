import { ExpoConfig, ConfigContext } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => {
  const defaultConfig = {
    ...config,
    slug: "template",
  } as ExpoConfig;

  if (process.env.NODE_ENV === "development") {
    return {
      ...defaultConfig,
      name: "Template (development)",
    };
  }

  return {
    ...defaultConfig,
    name: "Template",
  };
};
