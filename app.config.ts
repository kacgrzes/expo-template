import { ExpoConfig, ConfigContext } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => {
  if (process.env.NODE_ENV === "development") {
    return {
      ...config,
      name: "expo-template (development)",
      slug: "expo-template (development)",
    };
  }

  return {
    ...config,
    name: "expo-template",
    slug: "expo-template",
  };
};
