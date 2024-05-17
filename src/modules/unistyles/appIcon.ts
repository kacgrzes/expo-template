import { Asset } from "expo-asset";
import { Platform } from "react-native";
import AppIcon from "react-native-dynamic-app-icon";

export const setAppIcon = async (iconIndex: string) => {
  if (Platform.OS === "ios" && (await AppIcon.supportsDynamicAppIcon())) {
    AppIcon.setAppIcon(iconIndex);
  }
};

export const listAppIcons = async () => {
  if (Platform.OS === "ios" && (await AppIcon.supportsDynamicAppIcon())) {
    return await Asset.loadAsync([
      require("../../../assets/icon.png"),
      require("../../../assets/icon2.png"),
    ]);
  }
};

export const getIconName = async () => {
  const iconName = await new Promise(
    (resolve: (value: { iconName: string }) => void) => {
      AppIcon.getIconName(resolve);
    },
  );

  return iconName;
};
