import * as Clipboard from "expo-clipboard";
import { useTranslation } from "react-i18next";
import { Pressable, Text } from "react-native";

export function Version() {
  const { t } = useTranslation("about");
  const appVersionWithBuildNumber = "1.0.0 (1)";

  return (
    <Pressable
      onPress={() => Clipboard.setStringAsync(appVersionWithBuildNumber)}>
      <Text>
        {t("version")} {appVersionWithBuildNumber}
      </Text>
    </Pressable>
  );
}
