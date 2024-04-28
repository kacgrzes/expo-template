import { ExpoConfig, ConfigContext } from "expo/config";
import { palette } from "unistyles/palette";

export default ({ config }: ConfigContext): ExpoConfig => {
  const defaultConfig = {
    ...config,
    slug: "template",
    primaryColor: palette.blue,
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
